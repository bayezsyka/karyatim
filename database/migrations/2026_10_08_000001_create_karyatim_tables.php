<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Projects Portfolio Table
        Schema::create('project_items', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category'); // Sipil & Gedung, Struktur Baja, Jalan & Beton, ACP & Facade, Interior & Fit-Out, Epoxy & Coating, Railing & Kanopi, MEP & Keamanan
            $table->string('client')->nullable();
            $table->string('location')->default('Surabaya & Jawa Timur');
            $table->string('year')->default('2023 - 2024');
            $table->text('description');
            $table->json('scope_of_work')->nullable();
            $table->string('primary_image');
            $table->json('gallery_images')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->integer('display_order')->default(0);
            $table->timestamps();
        });

        // Services Table
        Schema::create('service_items', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category');
            $table->text('short_description');
            $table->longText('full_description')->nullable();
            $table->string('icon')->default('HardHat');
            $table->string('image')->nullable();
            $table->json('deliverables')->nullable();
            $table->integer('display_order')->default(0);
            $table->timestamps();
        });

        // Corporate Clients Table
        Schema::create('corporate_clients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sector')->nullable(); // Food & Beverage, Logistik, BUMN, Properti, Retail
            $table->string('logo_path')->nullable();
            $table->integer('display_order')->default(0);
            $table->timestamps();
        });

        // Inquiries & Estimation Requests (RAB / Konsultasi)
        Schema::create('project_inquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('company')->nullable();
            $table->string('phone');
            $table->string('email')->nullable();
            $table->string('service_type');
            $table->string('project_location')->nullable();
            $table->string('estimated_volume')->nullable(); // misal 500 m2
            $table->string('budget_range')->nullable();
            $table->text('description')->nullable();
            $table->string('status')->default('new'); // new, in_review, contacted, done
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('project_inquiries');
        Schema::dropIfExists('corporate_clients');
        Schema::dropIfExists('service_items');
        Schema::dropIfExists('project_items');
    }
};
