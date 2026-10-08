<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'category_id',
        'title',
        'slug',
        'category',
        'author_name',
        'excerpt',
        'content',
        'featured_image',
        'units',
        'is_published',
        'published_at',
        'views',
    ];

    protected function casts(): array
    {
        return [
            'units' => 'array',
            'is_published' => 'boolean',
            'published_at' => 'datetime',
            'views' => 'integer',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function categoryRel(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true)->whereNotNull('published_at');
    }

    public function scopeForUnit($query, string $unit)
    {
        return $query->whereJsonContains('units', $unit);
    }

    public static function getLatestForUnit(string $unit, int $limit = 3)
    {
        return static::published()
            ->forUnit($unit)
            ->orderByDesc('published_at')
            ->limit($limit)
            ->get()
            ->map(fn ($article) => [
                'id' => $article->id,
                'slug' => $article->slug,
                'title' => $article->title,
                'category' => $article->category,
                'excerpt' => $article->excerpt,
                'featured_image' => $article->featured_image,
                'date' => $article->formatted_date,
                'readingTime' => $article->reading_time,
            ]);
    }

    public function getReadingTimeAttribute(): string
    {
        $words = str_word_count(strip_tags($this->content));
        $minutes = max(1, ceil($words / 200));
        return $minutes . ' menit baca';
    }

    public function getFormattedDateAttribute(): string
    {
        if (!$this->published_at) {
            return $this->created_at->translatedFormat('d F Y');
        }
        return $this->published_at->translatedFormat('d F Y');
    }

    public function getMonthAttribute(): string
    {
        $date = $this->published_at ?? $this->created_at;
        return $date->translatedFormat('M Y');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * Generate an SEO-friendly, clean, concise slug from title.
     * Prevents overly long slugs (caps at ~8-9 words or 75-80 chars on word boundary).
     */
    public static function generateCleanSlug(string $title): string
    {
        $words = Str::words($title, 9, '');
        $slug = Str::slug($words);

        if (strlen($slug) > 80) {
            $slug = substr($slug, 0, 80);
            $lastDash = strrpos($slug, '-');
            if ($lastDash !== false && $lastDash > 20) {
                $slug = substr($slug, 0, $lastDash);
            }
        }

        return trim($slug, '-') ?: 'artikel';
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($article) {
            if (empty($article->slug)) {
                $article->slug = static::generateCleanSlug($article->title);
            }
            // Ensure unique slug
            $original = $article->slug;
            $count = 1;
            while (static::where('slug', $article->slug)->exists()) {
                $article->slug = $original . '-' . $count++;
            }
        });

        static::updating(function ($article) {
            // For already published articles, keep URL stable: do NOT auto-regenerate slug when title changes
            if ($article->getOriginal('is_published')) {
                return;
            }

            if ($article->isDirty('title') && !$article->isDirty('slug')) {
                $article->slug = static::generateCleanSlug($article->title);
                $original = $article->slug;
                $count = 1;
                while (static::where('slug', $article->slug)->where('id', '!=', $article->id)->exists()) {
                    $article->slug = $original . '-' . $count++;
                }
            }
        });
    }
}
