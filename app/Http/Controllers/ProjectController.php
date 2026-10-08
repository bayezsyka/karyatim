<?php

namespace App\Http\Controllers;

use App\Models\ProjectItem;
use App\Models\CorporateClient;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(Request $request): Response
    {
        $selectedCategory = $request->query('category', 'all');
        
        $query = ProjectItem::orderBy('display_order');
        if ($selectedCategory !== 'all' && !empty($selectedCategory)) {
            $query->where('category', $selectedCategory);
        }

        $projects = $query->get();
        $categories = ProjectItem::select('category')->distinct()->pluck('category');

        return Inertia::render('Projects/Index', [
            'projects' => $projects,
            'categories' => $categories,
            'selectedCategory' => $selectedCategory,
        ]);
    }

    public function show(string $slug): Response
    {
        $project = ProjectItem::where('slug', $slug)->firstOrFail();
        
        $relatedProjects = ProjectItem::where('id', '!=', $project->id)
            ->where('category', $project->category)
            ->take(3)
            ->get();

        if ($relatedProjects->isEmpty()) {
            $relatedProjects = ProjectItem::where('id', '!=', $project->id)->take(3)->get();
        }

        return Inertia::render('Projects/Show', [
            'project' => $project,
            'relatedProjects' => $relatedProjects,
        ]);
    }
}
