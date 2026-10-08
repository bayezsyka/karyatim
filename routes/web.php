<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\InquiryController;

// Landing Page
Route::get('/', [HomeController::class, 'index'])->name('home');

// Projects Portfolio
Route::get('/proyek', [ProjectController::class, 'index'])->name('projects.index');
Route::get('/proyek/{slug}', [ProjectController::class, 'show'])->name('projects.show');

// Services
Route::get('/layanan', [ServiceController::class, 'index'])->name('services.index');
Route::get('/layanan/{slug}', [ServiceController::class, 'show'])->name('services.show');

// About & Track Record
Route::get('/tentang-kami', [AboutController::class, 'index'])->name('about');

// Contact & Estimation Request
Route::get('/kontak', [InquiryController::class, 'index'])->name('contact');
Route::post('/inquiry', [InquiryController::class, 'store'])->name('inquiry.store');
