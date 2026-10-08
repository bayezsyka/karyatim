<?php

namespace App\Http\Controllers;

use App\Models\ServiceItem;
use App\Models\ProjectItem;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function index(): Response
    {
        $services = ServiceItem::orderBy('display_order')->get();
        return Inertia::render('Services/Index', [
            'services' => $services,
        ]);
    }

    public function show(string $slug): Response
    {
        $service = ServiceItem::where('slug', $slug)->firstOrFail();
        
        $relatedProjects = ProjectItem::where('category', 'like', '%' . $service->category . '%')
            ->orWhere('title', 'like', '%' . $service->title . '%')
            ->take(3)
            ->get();

        if ($relatedProjects->isEmpty()) {
            $relatedProjects = ProjectItem::take(3)->get();
        }

        return Inertia::render('Services/Show', [
            'service' => $service,
            'relatedProjects' => $relatedProjects,
        ]);
    }
}
