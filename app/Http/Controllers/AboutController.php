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
        return Inertia::render('About/Index', [
            'clients' => $clients,
            'stats' => [],
            'company' => [
                'name' => 'PT. Karyatim Mandiri Engineering',
                'established' => '2014',
                'city' => 'Surabaya, Jawa Timur',
                'address' => 'Surabaya, Jawa Timur',
                'phone' => '0812-3171-6286',
                'alt_phone' => '0812-8490-0094',
                'email' => 'infokaryatimsurabaya@gmail.com',
                'maps_url' => null,
                'download_pdf_url' => '/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf',
            ],
        ]);
    }
}
