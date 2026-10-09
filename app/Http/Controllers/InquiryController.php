<?php

namespace App\Http\Controllers;

use App\Models\ProjectInquiry;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class InquiryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Contact/Index', [
            'company' => [
                'name' => 'PT. Karyatim Mandiri Engineering',
                'brand' => 'Karyatim Engineering Contractors',
                'phone' => '0812-3171-6286',
                'phone_raw' => '6281231716286',
                'alt_phone' => '0812-8490-0094',
                'alt_phone_raw' => '6281284900094',
                'email' => 'infokaryatimsurabaya@gmail.com',
                'address' => 'Surabaya, Jawa Timur, Indonesia',
                'maps_url' => null,
                'hours' => null,
                'download_pdf_url' => '/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf',
            ],
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'company' => 'nullable|string|max:255',
            'phone' => 'required|string|max:50',
            'email' => 'nullable|email|max:255',
            'service_type' => 'required|string|max:255',
            'project_location' => 'nullable|string|max:255',
            'estimated_volume' => 'nullable|string|max:255',
            'budget_range' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        ProjectInquiry::create($validated);

        return back()->with('success', 'Permintaan konsultasi proyek Anda berhasil dikirim. Tim teknis Karyatim akan segera menghubungi Anda.');
    }
}
