<?php

namespace App\Http\Controllers;

use App\Models\ProjectItem;
use App\Models\ServiceItem;
use App\Models\CorporateClient;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $featuredProjects = ProjectItem::where('is_featured', true)
            ->orderBy('display_order')
            ->take(6)
            ->get();

        $allProjects = ProjectItem::orderBy('display_order')
            ->get();

        $services = ServiceItem::orderBy('display_order')
            ->get();

        $clients = CorporateClient::orderBy('display_order')
            ->get();

        $categories = ProjectItem::select('category')
            ->distinct()
            ->pluck('category');

        return Inertia::render('Home', [
            'featuredProjects' => $featuredProjects,
            'allProjects' => $allProjects,
            'services' => $services,
            'clients' => $clients,
            'categories' => $categories,
            'stats' => [],
            'company' => [
                'name' => 'PT. Karyatim Mandiri Engineering',
                'brand' => 'Karyatim Engineering Contractors',
                'established' => '2014',
                'phone' => '0812-3171-6286',
                'phone_raw' => '6281231716286',
                'alt_phone' => '0812-8490-0094',
                'alt_phone_raw' => '6281284900094',
                'email' => 'infokaryatimsurabaya@gmail.com',
                'city' => 'Surabaya, Jawa Timur',
                'address' => 'Surabaya, Jawa Timur',
                'maps_url' => null,
                'instagram' => 'https://instagram.com/karyatimcontractor',
                'tiktok' => null,
                'linkedin' => null,
                'facebook' => null,
                'download_pdf_url' => '/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf',
            ],
        ]);
    }
}
