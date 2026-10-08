<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'short_description',
        'full_description',
        'icon',
        'image',
        'deliverables',
        'display_order',
    ];

    protected $casts = [
        'deliverables' => 'array',
        'display_order' => 'integer',
    ];
}
