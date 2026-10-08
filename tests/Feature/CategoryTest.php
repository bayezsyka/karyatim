<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_cannot_access_categories(): void
    {
        $response = $this->get('/admin/categories');
        $response->assertRedirect('/login');
    }

    public function test_admin_can_view_categories_list(): void
    {
        $user = User::factory()->create();
        Category::create(['name' => 'Kajian Kitab', 'slug' => 'kajian-kitab']);

        $response = $this->actingAs($user)->get('/admin/categories');
        $response->assertOk();
    }

    public function test_admin_can_create_category(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/admin/categories', [
            'name' => 'Prestasi Santri',
            'description' => 'Kategori khusus lomba dan penghargaan',
        ]);

        $response->assertRedirect('/admin/categories');
        $this->assertDatabaseHas('categories', [
            'name' => 'Prestasi Santri',
            'slug' => 'prestasi-santri',
        ]);
    }

    public function test_admin_can_update_category(): void
    {
        $user = User::factory()->create();
        $category = Category::create(['name' => 'Lama', 'slug' => 'lama']);

        $response = $this->actingAs($user)->put("/admin/categories/{$category->slug}", [
            'name' => 'Baru',
            'description' => 'Deskripsi baru',
        ]);

        $response->assertRedirect('/admin/categories');
        $this->assertDatabaseHas('categories', [
            'id' => $category->id,
            'name' => 'Baru',
        ]);
    }

    public function test_admin_can_delete_category(): void
    {
        $user = User::factory()->create();
        $category = Category::create(['name' => 'Hapus Saya', 'slug' => 'hapus-saya']);

        $response = $this->actingAs($user)->delete("/admin/categories/{$category->slug}");

        $response->assertRedirect('/admin/categories');
        $this->assertDatabaseMissing('categories', [
            'id' => $category->id,
        ]);
    }
}
