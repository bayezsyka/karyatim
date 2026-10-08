<?php

namespace App\Http\Controllers;

use App\Models\CorporateClient;
use App\Models\ProjectItem;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    public function index(): Response
    {
        $clients = CorporateClient::orderBy('display_order')->get();
        $projectCount = ProjectItem::count();

        return Inertia::render('About/Index', [
            'clients' => $clients,
            'stats' => [
                'years_experience' => '12+',
                'projects_completed' => max($projectCount, 150) . '+',
                'corporate_clients' => '35+',
                'safety_record' => 'Zero Accident',
            ],
            'company' => [
                'name' => 'PT. Karyatim Mandiri Engineering',
                'established' => '2012',
                'city' => 'Surabaya, Jawa Timur',
                'address' => 'Surabaya, Jawa Timur — Melayani Proyek Seluruh Indonesia',
                'phone' => '0812-3171-6286',
                'alt_phone' => '0851-1124-9501',
                'email' => 'infokaryatimsurabaya@gmail.com',
                'maps_url' => 'https://g.page/karyatimsurabaya?share',
                'download_pdf_url' => '/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf',
            ],
        ]);
    }
}
