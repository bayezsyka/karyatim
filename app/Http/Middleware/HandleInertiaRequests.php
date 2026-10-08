<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
            'company' => [
                'name' => 'PT. Karyatim Mandiri Engineering',
                'brand' => 'Karyatim Engineering Contractors',
                'established' => '2012',
                'phone' => '0812-3171-6286',
                'alt_phone' => '0851-1124-9501',
                'email' => 'infokaryatimsurabaya@gmail.com',
                'address' => 'Surabaya, Jawa Timur — Melayani Proyek Seluruh Indonesia',
                'maps_url' => 'https://g.page/karyatimsurabaya?share',
                'download_pdf_url' => '/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf',
            ],
        ];
    }
}
