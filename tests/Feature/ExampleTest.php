<?php

namespace Tests\Feature;

use Database\Seeders\AdminSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(AdminSeeder::class);
    }
    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_public_information_pages_are_available(): void
    {
        $this->get('/artikel')->assertOk();
        $this->get('/kontak')->assertOk();
        $this->get('/ppdb')->assertOk();
    }

    public function test_legacy_news_url_redirects_to_articles(): void
    {
        $this->get('/berita')->assertRedirect('/artikel');
    }

    public function test_article_detail_pages_are_available(): void
    {
        $slugs = [
            'mengenal-pondok-pesantren-asshodiqiyah-semarang',
            'kh-shodiq-hamzah-pesan-haji-kesabaran-keikhlasan',
            'kolaborasi-asshodiqiyah-undip-kolam-retensi',
            'asshodiqiyah-tanamkan-disiplin-dan-kebersamaan',
            'tafsir-al-bayan-karya-kh-shodiq-hamzah',
        ];

        foreach ($slugs as $slug) {
            $this->get("/artikel/{$slug}")->assertOk();
        }

        $this->get('/artikel/artikel-tidak-ada')->assertNotFound();
    }

    public function test_gallery_page_is_removed(): void
    {
        $this->get('/galeri')->assertNotFound();
    }

    public function test_sitemap_is_available(): void
    {
        $response = $this->get('/sitemap.xml');
        $response->assertOk();
        $response->assertHeader('Content-Type', 'application/xml');
        $response->assertSee('urlset');
    }
}
