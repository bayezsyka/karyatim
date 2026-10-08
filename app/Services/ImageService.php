<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\WebpEncoder;
use Intervention\Image\ImageManager;

class ImageService
{
    protected ImageManager $manager;

    public function __construct()
    {
        $this->manager = new ImageManager(new Driver());
    }

    /**
     * Convert and compress an image to WebP (max 500KB, max 1920x1920).
     *
     * @param UploadedFile|string $file UploadedFile or local path or binary string or base64 data URL
     * @param string $directory Storage subdirectory (default: 'articles')
     * @param int $maxDimension Maximum width or height
     * @param int $maxSizeBytes Maximum size in bytes (default: 500KB)
     * @return string Public URL path (e.g. /storage/articles/uuid.webp)
     */
    public function storeAsWebp(
        UploadedFile|string $file,
        string $directory = 'articles',
        int $maxDimension = 1920,
        int $maxSizeBytes = 500 * 1024
    ): string {
        $cleanDir = trim($directory, '/');
        Storage::disk('public')->makeDirectory($cleanDir);

        $filename = Str::uuid() . '.webp';
        $path = $cleanDir . '/' . $filename;

        if ($file instanceof UploadedFile) {
            $image = $this->manager->decode($file->getPathname());
        } elseif (is_string($file) && str_starts_with($file, 'data:image')) {
            $data = substr($file, strpos($file, ',') + 1);
            $binary = base64_decode($data);
            $image = $this->manager->decode($binary);
        } else {
            $image = $this->manager->decode($file);
        }

        // Scale down if larger than max dimension while preserving aspect ratio
        $image->scaleDown($maxDimension, $maxDimension);

        // Iteratively compress to guarantee <= maxSizeBytes
        $quality = 85;
        do {
            $encoded = $image->encode(new WebpEncoder($quality));
            $size = strlen($encoded->toString());
            $quality -= 5;
        } while ($size > $maxSizeBytes && $quality > 10);

        Storage::disk('public')->put($path, $encoded->toString());

        return '/storage/' . $path;
    }

    /**
     * Alias for storeAsWebp for uploaded files.
     */
    public function storeUploadedImage(
        UploadedFile $file,
        string $directory = 'articles',
        int $maxDimension = 1920,
        int $maxSizeBytes = 500 * 1024
    ): string {
        return $this->storeAsWebp($file, $directory, $maxDimension, $maxSizeBytes);
    }

    /**
     * Download an image from an external URL, convert, and store as WebP.
     * Supports direct image URLs and webpage URLs with og:image/twitter:image.
     *
     * @throws \InvalidArgumentException
     */
    public function storeFromUrl(
        string $url,
        string $directory = 'articles',
        int $maxDimension = 1920,
        int $maxSizeBytes = 500 * 1024,
        int $depth = 0
    ): string {
        $url = trim($url);

        // If it's already a local storage path, return it directly
        if (str_starts_with($url, '/storage/') || str_contains($url, '/storage/' . trim($directory, '/'))) {
            return $url;
        }

        if (!filter_var($url, FILTER_VALIDATE_URL) && !str_starts_with($url, '//')) {
            throw new \InvalidArgumentException('Format tautan URL tidak valid.');
        }

        if (str_starts_with($url, '//')) {
            $url = 'https:' . $url;
        }

        if ($depth > 2) {
            throw new \InvalidArgumentException('Terlalu banyak pengalihan tautan gambar.');
        }

        try {
            $response = Http::withHeaders([
                'User-Agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept' => 'image/avif,image/webp,image/apng,image/svg+xml,image/*,text/html,*/*;q=0.8',
            ])->timeout(15)->get($url);

            if (!$response->successful()) {
                throw new \InvalidArgumentException("Server gambar eksternal merespons dengan kode {$response->status()}.");
            }

            $contentType = strtolower($response->header('Content-Type', ''));
            $body = $response->body();

            // If the URL returned an HTML page, try extracting og:image or twitter:image
            if (str_contains($contentType, 'text/html')) {
                $foundImage = null;
                if (preg_match('/<meta[^>]+(?:property|name)=["\'](?:og:image|twitter:image)["\'][^>]+content=["\']([^"\']+)["\']/i', $body, $m)) {
                    $foundImage = $m[1];
                } elseif (preg_match('/<meta[^>]+content=["\']([^"\']+)["\'][^>]+(?:property|name)=["\'](?:og:image|twitter:image)["\']/i', $body, $m)) {
                    $foundImage = $m[1];
                }

                if ($foundImage) {
                    if (str_starts_with($foundImage, '//')) {
                        $foundImage = 'https:' . $foundImage;
                    } elseif (str_starts_with($foundImage, '/')) {
                        $parsed = parse_url($url);
                        $foundImage = ($parsed['scheme'] ?? 'https') . '://' . ($parsed['host'] ?? '') . $foundImage;
                    }

                    return $this->storeFromUrl($foundImage, $directory, $maxDimension, $maxSizeBytes, $depth + 1);
                }

                throw new \InvalidArgumentException('Tautan merupakan halaman web dan tidak ditemukan gambar pratinjau (og:image).');
            }

            if (empty($body)) {
                throw new \InvalidArgumentException('Berkas gambar kosong dari sumber tautan.');
            }

            return $this->storeAsWebp($body, $directory, $maxDimension, $maxSizeBytes);
        } catch (\InvalidArgumentException $e) {
            throw $e;
        } catch (\Throwable $e) {
            Log::warning('Image download error from URL: ' . $url . ' - ' . $e->getMessage());
            throw new \InvalidArgumentException('Gagal mengunduh gambar dari tautan: ' . $e->getMessage());
        }
    }

    /**
     * Delete an image from public storage if it is a local storage path.
     */
    public function deleteIfLocal(?string $url): void
    {
        if (!$url || str_starts_with($url, 'http://') || str_starts_with($url, 'https://')) {
            return;
        }

        $path = str_replace('/storage/', '', $url);
        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
    }
}
