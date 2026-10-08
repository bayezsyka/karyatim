<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CorporateClient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sector',
        'logo_path',
        'display_order',
    ];

    protected $casts = [
        'display_order' => 'integer',
    ];
}
