<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'client',
        'location',
        'year',
        'description',
        'scope_of_work',
        'primary_image',
        'gallery_images',
        'is_featured',
        'display_order',
    ];

    protected $casts = [
        'scope_of_work' => 'array',
        'gallery_images' => 'array',
        'is_featured' => 'boolean',
        'display_order' => 'integer',
    ];
}
