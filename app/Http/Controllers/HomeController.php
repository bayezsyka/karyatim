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
            'stats' => [
                'years_experience' => '12+',
                'projects_completed' => '150+',
                'corporate_clients' => '35+',
                'safety_record' => 'Zero Accident',
            ],
            'company' => [
                'name' => 'PT. Karyatim Mandiri Engineering',
                'brand' => 'Karyatim Engineering Contractors',
                'established' => '2012',
                'phone' => '0812-3171-6286',
                'phone_raw' => '6281231716286',
                'alt_phone' => '0851-1124-9501',
                'alt_phone_raw' => '6285111249501',
                'email' => 'infokaryatimsurabaya@gmail.com',
                'city' => 'Surabaya, Jawa Timur',
                'address' => 'Surabaya, Jawa Timur — Melayani Proyek Seluruh Indonesia',
                'maps_url' => 'https://g.page/karyatimsurabaya?share',
                'instagram' => 'https://instagram.com/karyatimcontractor',
                'tiktok' => 'https://www.tiktok.com/@kontraktorsurabayaraya',
                'linkedin' => 'https://www.linkedin.com/company/karyatim',
                'facebook' => 'https://facebook.com/kontraktorkaryatim',
                'download_pdf_url' => '/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf',
            ],
        ]);
    }
}
