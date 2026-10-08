<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\AuditLog;
use App\Models\Category;
use App\Models\Gallery;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserAndAuditTest extends TestCase
{
    use RefreshDatabase;

    public function test_superadmin_can_create_admin_user(): void
    {
        $superadmin = User::factory()->create(['role' => 'superadmin']);

        $response = $this->actingAs($superadmin)->post('/admin/users', [
            'name' => 'Ustadz Baru',
            'email' => 'ustadz@asshodiqiyah.com',
            'password' => 'password123',
            'role' => 'admin',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('users', [
            'name' => 'Ustadz Baru',
            'email' => 'ustadz@asshodiqiyah.com',
            'role' => 'admin',
        ]);

        $this->assertDatabaseHas('audit_logs', [
            'action' => 'CREATE_USER',
        ]);
    }

    public function test_regular_admin_cannot_manage_users(): void
    {
        $admin = User::factory()->create(['role' => 'admin']);

        $response = $this->actingAs($admin)->get('/admin/users');
        $response->assertStatus(403);
    }

    public function test_audit_log_records_article_creation(): void
    {
        $admin = User::factory()->create(['role' => 'superadmin']);

        $response = $this->actingAs($admin)->post('/admin/articles', [
            'title' => 'Kajian Rutin Malam Jumat',
            'category' => 'Khazanah Pesantren',
            'content' => '<p>Konten kajian</p>',
            'is_published' => true,
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('audit_logs', [
            'action' => 'CREATE_ARTICLE',
        ]);
    }
}
