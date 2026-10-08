<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = [
        'unit',
        'title',
        'image_url',
        'images',
        'description',
        'order',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'images' => 'array',
            'is_active' => 'boolean',
            'order' => 'integer',
        ];
    }

    public const UNITS = [
        'pesantren' => 'Pondok Pesantren',
        'sd-it' => 'SD IT Asshodiqiyah',
        'smp-it' => 'SMP IT Asshodiqiyah',
        'mts' => 'MTs Asshodiqiyah',
        'ma' => 'MA Asshodiqiyah',
        'smk' => 'SMK Asshodiqiyah',
        'kbihu' => 'KBIHU Asshodiqiyah',
    ];

    public function getUnitNameAttribute(): string
    {
        return self::UNITS[$this->unit] ?? ucfirst($this->unit);
    }
}
