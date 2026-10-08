<?php

namespace Tests\Feature;

use App\Models\Gallery;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class GalleryTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_cannot_access_admin_galleries(): void
    {
        $response = $this->get('/admin/galleries');
        $response->assertRedirect('/login');
    }

    public function test_admin_can_view_galleries_list(): void
    {
        $user = User::factory()->create();
        Gallery::create([
            'unit' => 'pesantren',
            'title' => 'Kegiatan Santri',
            'image_url' => '/images/hero-landing.png',
        ]);

        $response = $this->actingAs($user)->get('/admin/galleries');
        $response->assertOk();
    }

    public function test_admin_can_filter_galleries_by_unit(): void
    {
        $user = User::factory()->create();
        Gallery::create([
            'unit' => 'kbihu',
            'title' => 'Manasik KBIHU',
            'image_url' => '/images/pengasuh.png',
        ]);

        $response = $this->actingAs($user)->get('/admin/galleries?unit=kbihu');
        $response->assertOk();
    }

    public function test_admin_can_create_gallery_photo(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/admin/galleries', [
            'unit' => 'sd-it',
            'title' => 'Upacara Bendera',
            'image_url' => 'https://example.com/photo.jpg',
            'description' => 'Upacara hari Senin di SD IT',
            'order' => 1,
            'is_active' => true,
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('galleries', [
            'unit' => 'sd-it',
            'title' => 'Upacara Bendera',
            'image_url' => 'https://example.com/photo.jpg',
        ]);
    }

    public function test_admin_can_update_gallery_photo(): void
    {
        $user = User::factory()->create();
        $gallery = Gallery::create([
            'unit' => 'ma',
            'title' => 'Judul Lama',
            'image_url' => 'https://example.com/old.jpg',
        ]);

        $response = $this->actingAs($user)->put("/admin/galleries/{$gallery->id}", [
            'unit' => 'ma',
            'title' => 'Judul Baru',
            'image_url' => 'https://example.com/new.jpg',
            'description' => 'Deskripsi baru',
            'order' => 2,
            'is_active' => true,
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('galleries', [
            'id' => $gallery->id,
            'title' => 'Judul Baru',
            'image_url' => 'https://example.com/new.jpg',
        ]);
    }

    public function test_admin_can_delete_gallery_photo(): void
    {
        $user = User::factory()->create();
        $gallery = Gallery::create([
            'unit' => 'smk',
            'title' => 'Praktik Komputer',
            'image_url' => 'https://example.com/smk.jpg',
        ]);

        $response = $this->actingAs($user)->delete("/admin/galleries/{$gallery->id}");
        $response->assertRedirect();
        $this->assertDatabaseMissing('galleries', [
            'id' => $gallery->id,
        ]);
    }

    public function test_public_unit_pages_render_galleries(): void
    {
        Gallery::create([
            'unit' => 'pesantren',
            'title' => 'Pesantren View',
            'image_url' => '/images/hero-landing.png',
            'is_active' => true,
        ]);

        $responsePesantren = $this->get('/pesantren');
        $responsePesantren->assertOk();

        $responseKbihu = $this->get('/kbihu');
        $responseKbihu->assertOk();

        $responseSdit = $this->get('/pendidikan/sd-it');
        $responseSdit->assertOk();
    }

    public function test_guest_cannot_upload_gallery_images(): void
    {
        $response = $this->postJson('/admin/galleries/upload-image', []);
        $response->assertRedirect('/login');

        $responseUrl = $this->postJson('/admin/galleries/upload-url', ['url' => 'https://example.com/img.jpg']);
        $responseUrl->assertRedirect('/login');
    }

    public function test_admin_can_upload_gallery_image_file(): void
    {
        Storage::fake('public');
        $user = User::factory()->create();

        $file = UploadedFile::fake()->image('gallery_item.png', 1000, 800);

        $response = $this->actingAs($user)->postJson('/admin/galleries/upload-image', [
            'image' => $file,
        ]);

        $response->assertOk();
        $url = $response->json('url');
        $this->assertStringStartsWith('/storage/galleries/', $url);
        $this->assertStringEndsWith('.webp', $url);

        $storedPath = str_replace('/storage/', '', $url);
        Storage::disk('public')->assertExists($storedPath);
    }

    public function test_admin_can_upload_gallery_image_from_url(): void
    {
        Storage::fake('public');
        $user = User::factory()->create();

        $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
        $imgBinary = $manager->createImage(150, 150)->encode(new \Intervention\Image\Encoders\WebpEncoder(80))->toString();

        Http::fake([
            'https://media.test/santri-belajar.jpg' => Http::response($imgBinary, 200, ['Content-Type' => 'image/jpeg']),
        ]);

        $response = $this->actingAs($user)->postJson('/admin/galleries/upload-url', [
            'url' => 'https://media.test/santri-belajar.jpg',
        ]);

        $response->assertOk();
        $url = $response->json('url');
        $this->assertStringStartsWith('/storage/galleries/', $url);
        $this->assertStringEndsWith('.webp', $url);

        $storedPath = str_replace('/storage/', '', $url);
        Storage::disk('public')->assertExists($storedPath);
    }

    public function test_upload_gallery_image_from_invalid_url_returns_422(): void
    {
        $user = User::factory()->create();

        Http::fake([
            'https://broken.test/error.png' => Http::response('Server Error', 500),
        ]);

        $response = $this->actingAs($user)->postJson('/admin/galleries/upload-url', [
            'url' => 'https://broken.test/error.png',
        ]);

        $response->assertStatus(422);
        $response->assertJsonStructure(['message']);
    }

    public function test_admin_can_create_gallery_with_multiple_images_and_external_urls(): void
    {
        Storage::fake('public');
        $user = User::factory()->create();

        $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
        $imgBinary1 = $manager->createImage(100, 100)->encode(new \Intervention\Image\Encoders\WebpEncoder(80))->toString();
        $imgBinary2 = $manager->createImage(120, 120)->encode(new \Intervention\Image\Encoders\WebpEncoder(80))->toString();

        Http::fake([
            'https://cdn.test/g1.jpg' => Http::response($imgBinary1, 200, ['Content-Type' => 'image/jpeg']),
            'https://cdn.test/g2.jpg' => Http::response($imgBinary2, 200, ['Content-Type' => 'image/jpeg']),
        ]);

        $response = $this->actingAs($user)->post('/admin/galleries', [
            'unit' => 'smp-it',
            'title' => 'Kegiatan Pramuka',
            'images' => [
                'https://cdn.test/g1.jpg',
                'https://cdn.test/g2.jpg',
            ],
            'description' => 'Dokumentasi perkemahan',
            'order' => 1,
            'is_active' => true,
        ]);

        $response->assertRedirect();
        $gallery = Gallery::where('title', 'Kegiatan Pramuka')->firstOrFail();
        $this->assertCount(2, $gallery->images);
        $this->assertStringStartsWith('/storage/galleries/', $gallery->image_url);
        $this->assertStringEndsWith('.webp', $gallery->image_url);
        $this->assertStringStartsWith('/storage/galleries/', $gallery->images[0]);
        $this->assertStringStartsWith('/storage/galleries/', $gallery->images[1]);

        foreach ($gallery->images as $imgPath) {
            $diskPath = str_replace('/storage/', '', $imgPath);
            Storage::disk('public')->assertExists($diskPath);
        }
    }
}
