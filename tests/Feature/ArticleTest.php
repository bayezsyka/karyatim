<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ArticleTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_view_public_article_index(): void
    {
        $response = $this->get('/artikel');
        $response->assertOk();
    }

    public function test_can_view_public_article_detail_by_slug(): void
    {
        $user = User::factory()->create();
        $article = Article::create([
            'user_id' => $user->id,
            'title' => 'Judul Artikel Test',
            'slug' => 'judul-artikel-test',
            'category' => 'Umum',
            'content' => '<p>Konten artikel</p>',
            'is_published' => true,
            'published_at' => now(),
        ]);

        $response = $this->get("/artikel/{$article->slug}");
        $response->assertOk();
    }

    public function test_admin_can_access_article_edit_by_slug(): void
    {
        $user = User::factory()->create();
        $article = Article::create([
            'user_id' => $user->id,
            'title' => 'Artikel Admin Test',
            'slug' => 'artikel-admin-test',
            'category' => 'Umum',
            'content' => '<p>Konten</p>',
        ]);

        $response = $this->actingAs($user)->get("/admin/articles/{$article->slug}/edit");
        $response->assertOk();
    }

    public function test_admin_can_update_article_by_slug(): void
    {
        $user = User::factory()->create();
        $article = Article::create([
            'user_id' => $user->id,
            'title' => 'Artikel Awal',
            'slug' => 'artikel-awal',
            'category' => 'Umum',
            'content' => '<p>Konten Awal</p>',
        ]);

        $response = $this->actingAs($user)->put("/admin/articles/{$article->slug}", [
            'title' => 'Artikel Diubah',
            'slug' => 'artikel-diubah',
            'category' => 'Literasi',
            'content' => '<p>Konten Baru</p>',
        ]);

        $response->assertRedirect('/admin/articles');
        $this->assertDatabaseHas('articles', [
            'id' => $article->id,
            'title' => 'Artikel Diubah',
            'slug' => 'artikel-diubah',
        ]);
    }

    public function test_admin_can_delete_article_by_slug(): void
    {
        $user = User::factory()->create();
        $article = Article::create([
            'user_id' => $user->id,
            'title' => 'Artikel Dihapus',
            'slug' => 'artikel-dihapus',
            'category' => 'Umum',
            'content' => '<p>Konten</p>',
        ]);

        $response = $this->actingAs($user)->delete("/admin/articles/{$article->slug}");

        $response->assertRedirect('/admin/articles');
        $this->assertDatabaseMissing('articles', [
            'id' => $article->id,
        ]);
    }

    public function test_guest_cannot_upload_article_images(): void
    {
        $response = $this->postJson('/admin/articles/upload-image', []);
        $response->assertRedirect('/login');

        $responseUrl = $this->postJson('/admin/articles/upload-url', ['url' => 'https://example.com/img.jpg']);
        $responseUrl->assertRedirect('/login');
    }

    public function test_admin_can_upload_article_image_file(): void
    {
        Storage::fake('public');
        $user = User::factory()->create();

        $file = UploadedFile::fake()->image('test_article.jpg', 800, 600);

        $response = $this->actingAs($user)->postJson('/admin/articles/upload-image', [
            'image' => $file,
        ]);

        $response->assertOk();
        $url = $response->json('url');
        $this->assertStringStartsWith('/storage/articles/', $url);
        $this->assertStringEndsWith('.webp', $url);

        $storedPath = str_replace('/storage/', '', $url);
        Storage::disk('public')->assertExists($storedPath);
    }

    public function test_admin_can_upload_article_image_from_direct_url(): void
    {
        Storage::fake('public');
        $user = User::factory()->create();

        $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
        $imgBinary = $manager->createImage(100, 100)->encode(new \Intervention\Image\Encoders\WebpEncoder(80))->toString();

        Http::fake([
            'https://external-site.test/photo.jpg' => Http::response($imgBinary, 200, ['Content-Type' => 'image/jpeg']),
        ]);

        $response = $this->actingAs($user)->postJson('/admin/articles/upload-url', [
            'url' => 'https://external-site.test/photo.jpg',
        ]);

        $response->assertOk();
        $url = $response->json('url');
        $this->assertStringStartsWith('/storage/articles/', $url);
        $this->assertStringEndsWith('.webp', $url);

        $storedPath = str_replace('/storage/', '', $url);
        Storage::disk('public')->assertExists($storedPath);
    }

    public function test_admin_can_upload_article_image_from_webpage_with_og_image(): void
    {
        Storage::fake('public');
        $user = User::factory()->create();

        $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
        $imgBinary = $manager->createImage(120, 80)->encode(new \Intervention\Image\Encoders\WebpEncoder(80))->toString();

        Http::fake([
            'https://berita.test/kegiatan-santri' => Http::response(
                '<!DOCTYPE html><html><head><meta property="og:image" content="https://berita.test/media/santri.jpg"></head><body>Berita Santri</body></html>',
                200,
                ['Content-Type' => 'text/html']
            ),
            'https://berita.test/media/santri.jpg' => Http::response($imgBinary, 200, ['Content-Type' => 'image/jpeg']),
        ]);

        $response = $this->actingAs($user)->postJson('/admin/articles/upload-url', [
            'url' => 'https://berita.test/kegiatan-santri',
        ]);

        $response->assertOk();
        $url = $response->json('url');
        $this->assertStringStartsWith('/storage/articles/', $url);
        $this->assertStringEndsWith('.webp', $url);

        $storedPath = str_replace('/storage/', '', $url);
        Storage::disk('public')->assertExists($storedPath);
    }

    public function test_upload_article_image_from_invalid_url_returns_422(): void
    {
        $user = User::factory()->create();

        Http::fake([
            'https://broken-site.test/not-found.jpg' => Http::response('Not Found', 404),
        ]);

        $response = $this->actingAs($user)->postJson('/admin/articles/upload-url', [
            'url' => 'https://broken-site.test/not-found.jpg',
        ]);

        $response->assertStatus(422);
        $response->assertJsonStructure(['message']);
    }

    public function test_admin_creating_article_with_external_image_downloads_and_converts_to_webp(): void
    {
        Storage::fake('public');
        $user = User::factory()->create();

        $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
        $imgBinary = $manager->createImage(100, 100)->encode(new \Intervention\Image\Encoders\WebpEncoder(80))->toString();

        Http::fake([
            'https://source.test/headline.jpg' => Http::response($imgBinary, 200, ['Content-Type' => 'image/jpeg']),
        ]);

        $response = $this->actingAs($user)->post('/admin/articles', [
            'title' => 'Artikel Gambar Eksternal',
            'slug' => 'artikel-gambar-eksternal',
            'category' => 'Umum',
            'content' => '<p>Konten artikel dengan gambar eksternal</p>',
            'featured_image' => 'https://source.test/headline.jpg',
        ]);

        $response->assertRedirect('/admin/articles');
        $article = Article::where('slug', 'artikel-gambar-eksternal')->firstOrFail();
        $this->assertStringStartsWith('/storage/articles/', $article->featured_image);
        $this->assertStringEndsWith('.webp', $article->featured_image);

        $storedPath = str_replace('/storage/', '', $article->featured_image);
        Storage::disk('public')->assertExists($storedPath);
    }

    public function test_admin_can_create_article_with_linked_units(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/admin/articles', [
            'title' => 'Prestasi Santri MTs dan MA',
            'slug' => 'prestasi-santri-mts-dan-ma',
            'category' => 'Prestasi',
            'content' => '<p>Santri berprestasi tingkat provinsi.</p>',
            'units' => ['mts', 'ma', 'pesantren'],
            'is_published' => true,
        ]);

        $response->assertRedirect('/admin/articles');
        $article = Article::where('slug', 'prestasi-santri-mts-dan-ma')->firstOrFail();
        $this->assertEquals(['mts', 'ma', 'pesantren'], $article->units);
    }

    public function test_admin_can_update_article_linked_units(): void
    {
        $user = User::factory()->create();
        $article = Article::create([
            'user_id' => $user->id,
            'title' => 'Artikel Awal Unit',
            'slug' => 'artikel-awal-unit',
            'category' => 'Umum',
            'content' => '<p>Konten</p>',
            'units' => ['sd-it'],
        ]);

        $response = $this->actingAs($user)->put("/admin/articles/{$article->slug}", [
            'title' => 'Artikel Awal Unit',
            'slug' => 'artikel-awal-unit',
            'category' => 'Umum',
            'content' => '<p>Konten</p>',
            'units' => ['smp-it', 'smk'],
        ]);

        $response->assertRedirect('/admin/articles');
        $article->refresh();
        $this->assertEquals(['smp-it', 'smk'], $article->units);
    }

    public function test_get_latest_for_unit_returns_only_published_articles_for_that_unit(): void
    {
        $user = User::factory()->create();

        // 1. Published for pesantren
        $a1 = Article::create([
            'user_id' => $user->id,
            'title' => 'Warta Pesantren 1',
            'slug' => 'warta-pesantren-1',
            'category' => 'Kegiatan',
            'content' => '<p>Content 1</p>',
            'units' => ['pesantren', 'ma'],
            'is_published' => true,
            'published_at' => now()->subDay(),
        ]);

        // 2. Published for pesantren (newer)
        $a2 = Article::create([
            'user_id' => $user->id,
            'title' => 'Warta Pesantren 2',
            'slug' => 'warta-pesantren-2',
            'category' => 'Kegiatan',
            'content' => '<p>Content 2</p>',
            'units' => ['pesantren'],
            'is_published' => true,
            'published_at' => now(),
        ]);

        // 3. Draft for pesantren (should NOT appear)
        Article::create([
            'user_id' => $user->id,
            'title' => 'Draf Pesantren',
            'slug' => 'draf-pesantren',
            'category' => 'Kegiatan',
            'content' => '<p>Draft</p>',
            'units' => ['pesantren'],
            'is_published' => false,
            'published_at' => null,
        ]);

        // 4. Published for SD-IT only (should NOT appear in pesantren)
        Article::create([
            'user_id' => $user->id,
            'title' => 'Warta SD IT',
            'slug' => 'warta-sd-it',
            'category' => 'Pendidikan',
            'content' => '<p>Content SD</p>',
            'units' => ['sd-it'],
            'is_published' => true,
            'published_at' => now(),
        ]);

        $pesantrenArticles = Article::getLatestForUnit('pesantren', 3);
        $this->assertCount(2, $pesantrenArticles);
        $this->assertEquals('Warta Pesantren 2', $pesantrenArticles[0]['title']);
        $this->assertEquals('Warta Pesantren 1', $pesantrenArticles[1]['title']);

        $sdArticles = Article::getLatestForUnit('sd-it', 3);
        $this->assertCount(1, $sdArticles);
        $this->assertEquals('Warta SD IT', $sdArticles[0]['title']);

        $kbihuArticles = Article::getLatestForUnit('kbihu', 3);
        $this->assertCount(0, $kbihuArticles);
    }

    public function test_public_unit_pages_render_with_articles_prop(): void
    {
        $user = User::factory()->create();
        Article::create([
            'user_id' => $user->id,
            'title' => 'Kabar Santri Pesantren',
            'slug' => 'kabar-santri-pesantren',
            'category' => 'Kegiatan',
            'content' => '<p>Content</p>',
            'units' => ['pesantren'],
            'is_published' => true,
            'published_at' => now(),
        ]);

        $resPesantren = $this->get('/pesantren');
        $resPesantren->assertOk();
        $resPesantren->assertInertia(fn ($page) => $page
            ->component('Profil/Index')
            ->has('articles', 1)
            ->has('galleries')
        );

        $resSdit = $this->get('/pendidikan/sd-it');
        $resSdit->assertOk();
        $resSdit->assertInertia(fn ($page) => $page
            ->component('Pendidikan/SdIt')
            ->has('articles')
            ->has('galleries')
        );

        $resKbihu = $this->get('/kbihu');
        $resKbihu->assertOk();
        $resKbihu->assertInertia(fn ($page) => $page
            ->component('Kbihu/Index')
            ->has('articles')
            ->has('galleries')
        );
    }

    public function test_article_auto_slug_is_clean_and_concise(): void
    {
        $longTitle = 'Kementerian Haji dan Umrah RI: Ponpes dan KBIHU Asshodiqiyah Sampaikan Selamat kepada Menteri dan Wakil Menteri';
        $slug = Article::generateCleanSlug($longTitle);

        $this->assertLessThanOrEqual(80, strlen($slug));
        $this->assertStringStartsWith('kementerian-haji-dan-umrah-ri', $slug);
        $this->assertFalse(str_ends_with($slug, '-'));
    }

    public function test_published_article_slug_is_preserved_when_title_is_updated(): void
    {
        $user = User::factory()->create();
        $article = Article::create([
            'user_id' => $user->id,
            'title' => 'Judul Berita Awal Resmi',
            'slug' => 'judul-berita-awal-resmi',
            'category' => 'Umum',
            'content' => '<p>Konten artikel awal.</p>',
            'is_published' => true,
            'published_at' => now(),
        ]);

        // Writer edits article and changes title to fix typo
        $response = $this->actingAs($user)->put("/admin/articles/{$article->slug}", [
            'title' => 'Judul Berita Awal Resmi yang Diperbaiki Ejaannya',
            'category' => 'Umum',
            'content' => '<p>Konten artikel yang diperbarui.</p>',
            'is_published' => true,
        ]);

        $response->assertRedirect('/admin/articles');

        $article->refresh();
        $this->assertEquals('Judul Berita Awal Resmi yang Diperbaiki Ejaannya', $article->title);
        // The slug MUST remain unchanged so Google's indexed URL does not become 404!
        $this->assertEquals('judul-berita-awal-resmi', $article->slug);
    }

    public function test_article_page_renders_valid_json_ld_schema_and_semantic_noscript(): void
    {
        $user = User::factory()->create();
        $article = Article::create([
            'user_id' => $user->id,
            'title' => 'Uji Coba Schema dan Semantic',
            'slug' => 'uji-coba-schema-dan-semantic',
            'category' => 'Khazanah',
            'excerpt' => 'Ringkasan artikel uji coba.',
            'content' => '<p>Isi lengkap artikel untuk crawler Googlebot.</p>',
            'is_published' => true,
            'published_at' => now(),
        ]);

        $response = $this->get("/artikel/{$article->slug}");
        $response->assertOk();

        $content = $response->getContent();

        // 1. Must NOT contain the corrupted Blade directive PHP code
        $this->assertStringNotContainsString('$__contextArgs', $content);

        // 2. Must contain valid "@context": "https://schema.org"
        $this->assertStringContainsString('"@context": "https://schema.org"', $content);

        // 3. Extract and parse all JSON-LD blocks to ensure strict JSON validity
        preg_match_all('/<script type="application\/ld\+json">(.*?)<\/script>/s', $content, $matches);
        $this->assertNotEmpty($matches[1]);

        foreach ($matches[1] as $jsonString) {
            $parsed = json_decode(trim($jsonString), true);
            $this->assertNotNull($parsed, 'JSON-LD must be valid JSON syntax: ' . json_last_error_msg());
            $this->assertEquals('https://schema.org', $parsed['@context']);
        }

        // 4. Must contain the semantic noscript fallback with h1 and article body
        $this->assertStringContainsString('<noscript>', $content);
        $this->assertStringContainsString('<h1>' . e($article->title) . '</h1>', $content);
        $this->assertStringContainsString('Isi lengkap artikel untuk crawler Googlebot.', $content);
    }
}


