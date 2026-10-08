<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProjectItem;
use App\Models\ServiceItem;
use App\Models\CorporateClient;
use Illuminate\Support\Str;

class KaryatimDatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Corporate Clients
        $clients = [
            ['name' => 'PT Nippon Indosari Corpindo Tbk (Sari Roti)', 'sector' => 'Food & Beverage / Manufaktur', 'display_order' => 1],
            ['name' => 'PT HM Sampoerna Tbk', 'sector' => 'FMCG / Fasilitas Industri', 'display_order' => 2],
            ['name' => 'PT Greenfields Dairy Indonesia', 'sector' => 'Dairy & Agro Industri', 'display_order' => 3],
            ['name' => 'A.P. Moller – Maersk Indonesia', 'sector' => 'Shipping & Global Logistics', 'display_order' => 4],
            ['name' => 'PT PP Properti Tbk (BUMN)', 'sector' => 'Konstruksi & Properti', 'display_order' => 5],
            ['name' => 'PT Pegadaian (Persero)', 'sector' => 'BUMN / Jasa Keuangan', 'display_order' => 6],
            ['name' => 'PT Indofood CBP Sukses Makmur Tbk', 'sector' => 'Consumer Goods & Pabrik', 'display_order' => 7],
            ['name' => 'PT Nutrifood Indonesia', 'sector' => 'Health & Food Manufacturing', 'display_order' => 8],
            ['name' => 'PT Ninja Express Logistik', 'sector' => 'Supply Chain & Pergudangan', 'display_order' => 9],
            ['name' => 'Maison Féerie', 'sector' => 'Commercial Bakery & Retail', 'display_order' => 10],
            ['name' => 'Diamond Cold Storage / Diamond Fair', 'sector' => 'Cold Chain Logistics & Retail', 'display_order' => 11],
            ['name' => 'PT Bhirawa Steel (Hutama Karya Group)', 'sector' => 'Industri Baja & Manufaktur', 'display_order' => 12],
            ['name' => 'Universitas Surabaya (UBAYA)', 'sector' => 'Fasilitas Pendidikan Tinggi', 'display_order' => 13],
            ['name' => 'Kamadjaja Logistics', 'sector' => 'Freight Forwarding & Logistik', 'display_order' => 14],
            ['name' => 'PAI Indonesia', 'sector' => 'Automotive & Industrial Supply', 'display_order' => 15],
            ['name' => 'Yasa Sampoerna Strategic', 'sector' => 'Holding & Komersial', 'display_order' => 16],
        ];

        foreach ($clients as $client) {
            CorporateClient::updateOrCreate(
                ['name' => $client['name']],
                $client
            );
        }

        // 2. Services List
        $services = [
            [
                'title' => 'Konstruksi Bangunan & Sipil',
                'slug' => 'konstruksi-bangunan-dan-sipil',
                'category' => 'Konstruksi Sipil',
                'short_description' => 'Pembangunan gedung bertingkat, struktur gudang, pabrik, showroom, dan fasilitas komersial berstandar teknis SNI.',
                'full_description' => 'Layanan general contracting konstruksi sipil menyeluruh mulai dari perencanaan pondasi, struktur beton bertulang, dinding arsitektural, hingga serah terima bangunan dengan pengawasan ketat terhadap mutu bahan, jadwal pelaksanaan, dan K3.',
                'icon' => 'Building2',
                'image' => '/images/projects/p05_1_X6.webp',
                'deliverables' => [
                    'Pondasi Strauss Pile, Bored Pile & Footplate',
                    'Struktur Kolom, Balok & Plat Lantai Beton Bertulang',
                    'Pekerjaan Dinding Bata Ringan & Plester Acian Presisi',
                    'Penyelesaian Arsitektural Gedung & Fasilitas Operasional',
                ],
                'display_order' => 1,
            ],
            [
                'title' => 'Konstruksi Rangka & Struktur Baja',
                'slug' => 'konstruksi-struktur-baja',
                'category' => 'Struktur Baja',
                'short_description' => 'Fabrikasi dan ereksi struktur baja berat WF, H-Beam, pipa truss, dan rangka atap bentang lebar untuk gudang & pabrik.',
                'full_description' => 'Pekerjaan konstruksi baja berkapasitas beban berat dengan kalkulasi rekayasa struktur akurat, pengelasan bersertifikasi, sistem baut mutu tinggi (HTB), dan pelapisan cat anti-korosi prima.',
                'icon' => 'Wrench',
                'image' => '/images/projects/p07_1_X6.webp',
                'deliverables' => [
                    'Fabrikasi WF Beam & Kolom H-Beam Heavy Duty',
                    'Pemasangan Rangka Kuda-Kuda Atap Bentang Lebar',
                    'Pemasangan Gording C-Channel, Sagrod & Wind Bracing',
                    'Pemasangan Atap Galvalum / Zincalume & Insulasi Termal',
                ],
                'display_order' => 2,
            ],
            [
                'title' => 'Pengecoran Lantai & Rigid Pavement',
                'slug' => 'pengecoran-jalan-dan-rigid-pavement',
                'category' => 'Infrastruktur Jalan',
                'short_description' => 'Pekerjaan lantai beton industri, jalan rigid kawasan industri, docking area, dan area manuver truk logistik.',
                'full_description' => 'Spesialisasi pengecoran beton mutu tinggi (K-300 s/d FS-45) dengan metode perataan modern, penulangan wiremesh presisi, trowel floor hardener, serta pemotongan dilatasi sambungan (expansion & contraction joint) untuk mencegah retak.',
                'icon' => 'Layers',
                'image' => '/images/projects/p09_1_X6.webp',
                'deliverables' => [
                    'Pemadatan Sub-Grade & Lapisan Pondasi Bawah Lean Concrete',
                    'Pembesian Wiremesh M8/M10 Double Layer & Dowel Bar',
                    'Pengecoran Ready Mix Mutu Tinggi & Finishing Power Trowel',
                    'Joint Cutting Dilatasi Beton & Aplikasi Polyurethane Sealant',
                ],
                'display_order' => 3,
            ],
            [
                'title' => 'Pengaspalan Hotmix Jalan & Parkir',
                'slug' => 'pengaspalan-hotmix-jalan-dan-parkir',
                'category' => 'Infrastruktur Jalan',
                'short_description' => 'Jasa pengaspalan hotmix AC-WC / AC-BC untuk jalan akses pabrik, kompleks pergudangan, perumahan, dan area parkir.',
                'full_description' => 'Pengaspalan hotmix dengan standar kepadatan tinggi menggunakan finisher dan tandem roller mekanis. Menghasilkan permukaan jalan yang rata, kedap air, tahan lintasan kendaraan tonase berat, dan berumur pakai panjang.',
                'icon' => 'Truck',
                'image' => '/images/projects/p11_1_X6.webp',
                'deliverables' => [
                    'Grading & Pemadatan Base Course Agregat Kelas A',
                    'Penyemprotan Perekat Aspal Prime Coat / Tack Coat',
                    'Penghamparan Hotmix AC-BC & AC-Wearing Course',
                    'Pemadatan Akhir Tandem Roller & Pneumatic Tire Roller',
                ],
                'display_order' => 4,
            ],
            [
                'title' => 'Aluminium Composite Panel (ACP) & Facade',
                'slug' => 'pemasangan-acp-dan-facade-gedung',
                'category' => 'Eksterior & Arsitektural',
                'short_description' => 'Pemasangan ACP eksterior, curtain wall kaca, kisi-kisi louvre aluminium untuk fasad modern gedung komersial.',
                'full_description' => 'Pemasangan fasad ACP dengan panel PVDF grade eksterior tahan cuaca tropis puluhan tahun. Dikerjakan dengan bracket hollow galvanis terukur, perataan laser, serta sealing neutral tahan UV.',
                'icon' => 'LayoutGrid',
                'image' => '/images/projects/p13_1_X6.webp',
                'deliverables' => [
                    'Rangka Hollow Galvanis Anti Karat & Bracket Siku Baja',
                    'Pemasangan Lembaran ACP Seven / Alucobond PVDF Exterior',
                    'Sealant Weatherproofing Neutral Silicone Anti Jamur',
                    'Integrasi Kaca Tempered & Panel Curtain Wall Arsitektural',
                ],
                'display_order' => 5,
            ],
            [
                'title' => 'Lantai Epoxy & Coating Industri',
                'slug' => 'lantai-epoxy-dan-coating-industri',
                'category' => 'Lantai Khusus & Proteksi',
                'short_description' => 'Aplikasi epoxy self-leveling, epoxy mortar heavy duty, dan polyurethane coating untuk pabrik higienis dan gudang.',
                'full_description' => 'Solusi lantai tanpa sambungan (seamless), higienis, tahan abrasi kimia, mudah dibersihkan, dan memenuhi standar GMP/HACCP untuk industri makanan, farmasi, rumah sakit, serta workshop manufaktur.',
                'icon' => 'ShieldCheck',
                'image' => '/images/projects/p23_1_X6.webp',
                'deliverables' => [
                    'Diamond Grinding & Mechanical Surface Preparation',
                    'Aplikasi Primer Epoxy High Penetration',
                    'Epoxy Body Coat & Scratch Filler Levelling',
                    'Top Coat Polyurethane High Gloss / Doff Anti-Chemical',
                ],
                'display_order' => 6,
            ],
            [
                'title' => 'Waterproofing Membran & Coating',
                'slug' => 'waterproofing-membran-dan-coating',
                'category' => 'Proteksi Gedung',
                'short_description' => 'Sistem proteksi kebocoran atap dak beton, rooftop, basement, kolam penampungan, dan ground water tank.',
                'full_description' => 'Penerapan waterproofing membran bakar elastis 3mm granule, semen polyurethane coating, dan injeksi epoxy beton bocor untuk memastikan ketahanan total bangunan dari rembesan air.',
                'icon' => 'Umbrella',
                'image' => '/images/projects/p15_1_X6.webp',
                'deliverables' => [
                    'Surface Preparation & Chipping Area Keropos',
                    'Aplikasi Primer Bitumen Kedap Air',
                    'Pemasangan Membran Bakar Torch-On Granule 3mm',
                    'Screed Proteksi Beton & Pengujian Genangan Air (Flood Test)',
                ],
                'display_order' => 7,
            ],
            [
                'title' => 'Interior Office Fit-Out & Partisi Ruang',
                'slug' => 'interior-office-fit-out-dan-partisi',
                'category' => 'Interior & Arsitektural',
                'short_description' => 'Renovasi interior kantor, partisi gypsum peredam suara, plafon akustik, wall paneling, dan custom furniture korporat.',
                'full_description' => 'Menciptakan ruang kerja modern, fungsional, dan representatif dengan kerapian pengerjaan tinggi. Melayani kantor pusat, kantor operasional cabang, ruang meeting eksekutif, hingga area lobby korporasi.',
                'icon' => 'Briefcase',
                'image' => '/images/projects/p19_1_X6.webp',
                'deliverables' => [
                    'Partisi Gypsum Rangka Metal Furing & Glass Partition Frameless',
                    'Plafon Drop Ceiling Akustik dengan Indirect LED Lighting',
                    'Pemasangan Lantai Vinyl SPC Wood Grain / Karpet Komersial',
                    'Custom Furniture Meja Kerja, Credenza, dan Resepsionis HPL',
                ],
                'display_order' => 8,
            ],
            [
                'title' => 'Pengecatan Gedung Eksterior & Industri',
                'slug' => 'pengecatan-gedung-eksterior-dan-industri',
                'category' => 'Proteksi & Finishing',
                'short_description' => 'Pengecatan gedung bertingkat tinggi, struktur pabrik, tangki industri, dan perlindungan anti korosi.',
                'full_description' => 'Menggunakan cat weather-shield bermutu tinggi dengan tim tersertifikasi K3 ketinggian (rope access & scaffolding). Menjamin estetika warna tahan lama dan proteksi dinding luar terhadap jamur dan cuaca ekstrem.',
                'icon' => 'Paintbrush',
                'image' => '/images/projects/p06_1_X6.webp',
                'deliverables' => [
                    'Pembersihan Dinding Luar & Perbaikan Retak Rambut (Wall Filler)',
                    'Aplikasi Alkali Primer Sealer Anti Garam Dinding',
                    'Pelapisan Cat Eksterior Tahan UV & Cuaca Ekstrem',
                    'Pengecatan Struktur Baja & Pipa dengan Epoxy Anti-Korosi',
                ],
                'display_order' => 9,
            ],
            [
                'title' => 'Kanopi Baja, Railing & Stainless Steel',
                'slug' => 'kanopi-baja-railing-dan-stainless-steel',
                'category' => 'Fabrikasi Logam',
                'short_description' => 'Pembuatan kanopi carport drop-off, railing tangga darurat, pagar industri, dan fabrikasi stainless steel.',
                'full_description' => 'Pengerjaan fabrikasi logam presisi dengan pengelasan rapi, finishing powder coating atau duco epoxy, serta material stainless steel SUS 304 tahan karat untuk area higienis dan luar ruangan.',
                'icon' => 'Shield',
                'image' => '/images/projects/p17_1_X6.webp',
                'deliverables' => [
                    'Kanopi Baja Hollow / WF dengan Atap Polycarbonate / Solartuff',
                    'Railing Tangga, Void, dan Balkon Standar Keselamatan Gedung',
                    'Pintu Gerbang Geser & Pagar Pengaman Kompleks Gudang',
                    'Instalasi Handrail Stainless Steel SUS 304 Bersertifikat',
                ],
                'display_order' => 10,
            ],
            [
                'title' => 'Retail Outlet & Branding Storefront',
                'slug' => 'retail-outlet-dan-branding-storefront',
                'category' => 'Komersial & Ritel',
                'short_description' => 'Pembangunan dan renovasi gerai ritel, outlet FnB, neon signage 3D, dan fasad komersial di pusat perbelanjaan.',
                'full_description' => 'Mewujudkan identitas merek ritel secara presisi sesuai panduan brand guideline, pengerjaan cepat saat mall fit-out window, serta penyelesaian mechanical-electrical gerai yang aman dan rapi.',
                'icon' => 'Store',
                'image' => '/images/projects/p21_1_X6.webp',
                'deliverables' => [
                    'Konstruksi Fasad Storefront & Pintu Kaca Tempered',
                    'Pembuatan Neon Signage Acrylic 3D & Letter Box Stainless',
                    'Penyusunan Interior Display, Rak Showcase & Meja Kasir Kas',
                    'Instalasi Titik Lampu Track Spotlight & Daya Listrik Ritel',
                ],
                'display_order' => 11,
            ],
            [
                'title' => 'Elektrikal MEP, CCTV & Keamanan Industri',
                'slug' => 'elektrikal-mep-cctv-dan-keamanan-industri',
                'category' => 'Mekanikal & Elektrikal',
                'short_description' => 'Instalasi kelistrikan tegangan rendah (LVMDP), instalasi grounding, jaringan data server, dan kamera pengawas CCTV terpadu.',
                'full_description' => 'Penataan jalur kelistrikan industri yang aman dengan beban seimbang, proteksi lonjakan arus, pembumian grounding tembaga standar SNI, serta instalasi sistem CCTV IP camera untuk pengawasan aset pabrik & gudang.',
                'icon' => 'Cpu',
                'image' => '/images/projects/p14_1_X6.webp',
                'deliverables' => [
                    'Pemasangan & Perakitan Panel Distribusi Daya Listrik (LVMDP / SDP)',
                    'Instalasi Kabel Tray Ladder & Penarikan Kabel NYY / NYFGBY',
                    'Penanaman Grounding Rod Tembaga (Tahanan < 2 Ohm)',
                    'Pemasangan IP CCTV Camera HD & Sistem Perekaman NVR Terpusat',
                ],
                'display_order' => 12,
            ],
        ];

        foreach ($services as $service) {
            ServiceItem::updateOrCreate(
                ['slug' => $service['slug']],
                $service
            );
        }

        // 3. Portfolio Projects
        $projects = [
            [
                'title' => 'Konstruksi Fasilitas Bangunan Sipil & Area Operasional Pabrik',
                'slug' => 'konstruksi-fasilitas-bangunan-sipil-pabrik',
                'category' => 'Sipil & Gedung',
                'client' => 'Mitra Industri & Manufaktur Jawa Timur',
                'location' => 'Surabaya, Jawa Timur',
                'year' => '2023 - 2024',
                'description' => 'Pekerjaan struktur pondasi, kolom beton bertulang, pasangan dinding bata ringan presisi, dan lantai kerja untuk fasilitas operasional manufaktur.',
                'scope_of_work' => [
                    'Galian tanah & perkuatan pondasi strauss pile',
                    'Pengecoran sloof, kolom & balok lantai 2 bertulang',
                    'Pasangan bata ringan, plesteran dan acian mortar utama',
                    'Finishing waterproofing dan talang pembuangan atap',
                ],
                'primary_image' => '/images/projects/p05_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p05_2_X9.webp',
                    '/images/projects/p05_3_X14.webp',
                    '/images/projects/p06_1_X6.webp',
                ],
                'is_featured' => true,
                'display_order' => 1,
            ],
            [
                'title' => 'Konstruksi Rangka Struktur Baja Berat & Gudang Bentang Lebar',
                'slug' => 'konstruksi-rangka-struktur-baja-berat-gudang',
                'category' => 'Struktur Baja',
                'client' => 'Kompleks Pergudangan Logistik',
                'location' => 'Gresik / Surabaya Raya',
                'year' => '2023',
                'description' => 'Fabrikasi dan instalasi rangka utama baja WF 350/400 dengan sistem kuda-kuda bentang 30 meter bebas kolom tengah untuk memaksimalkan kapasitas gudang.',
                'scope_of_work' => [
                    'Fabrikasi kolom H-Beam dan rafter baja WF di workshop',
                    'Ereksi rangka baja dengan crane berkapasitas 25 ton',
                    'Pemasangan sagrod, wind bracing dan gording c-channel galvanis',
                    'Pemasangan atap galvalum zincalume 0.40mm anti bocor',
                ],
                'primary_image' => '/images/projects/p07_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p07_2_X11.webp',
                    '/images/projects/p08_1_X6.webp',
                    '/images/projects/p08_2_X11.webp',
                ],
                'is_featured' => true,
                'display_order' => 2,
            ],
            [
                'title' => 'Rigid Pavement & Pengecoran Lantai Beton Akses Truk Muatan Berat',
                'slug' => 'rigid-pavement-pengecoran-jalan-beton-logistik',
                'category' => 'Jalan & Beton',
                'client' => 'Kawasan Pergudangan Terpadu',
                'location' => 'Sidoarjo, Jawa Timur',
                'year' => '2024',
                'description' => 'Pembangunan akses jalan beton bertulang tebal 20 cm dengan mutu beton K-350 untuk jalur keluar masuk truk kontainer bermuatan berat.',
                'scope_of_work' => [
                    'Pemadatan sub-base agregat kelas A dan lean concrete 5 cm',
                    'Pemasangan wiremesh M10 double layer dan dowel besi ulir',
                    'Pengecoran beton ready-mix K-350 dengan aditif pengeras cepat',
                    'Cut joint sambungan dilatasi beton dan aplikasi silicone sealant',
                ],
                'primary_image' => '/images/projects/p09_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p09_2_X11.webp',
                    '/images/projects/p10_1_X6.webp',
                ],
                'is_featured' => true,
                'display_order' => 3,
            ],
            [
                'title' => 'Pengaspalan Hotmix AC-WC Area Parkir & Sirkulasi Kendaraan',
                'slug' => 'pengaspalan-hotmix-area-parkir-dan-jalan-akses',
                'category' => 'Jalan & Beton',
                'client' => 'Fasilitas Komersial & Showroom',
                'location' => 'Surabaya Barat',
                'year' => '2023',
                'description' => 'Pelapisan aspal hotmix jenis Asphalt Concrete Wearing Course (AC-WC) seluas 4.500 m2 dengan pemadatan maksimal dan marka garis parkir presisi.',
                'scope_of_work' => [
                    'Pembersihan dasar lantai dan penyemprotan tack coat aspal cair',
                    'Penghamparan campuran aspal panas AC-WC tebal padat 4 cm',
                    'Pemadatan berulang dengan tandem roller & pneumatic tire roller',
                    'Pengecatan marka jalan thermoplastik reflektif standar dishub',
                ],
                'primary_image' => '/images/projects/p11_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p11_2_X11.webp',
                    '/images/projects/p12_1_X6.webp',
                ],
                'is_featured' => true,
                'display_order' => 4,
            ],
            [
                'title' => 'Pemasangan Facade Aluminium Composite Panel (ACP) & Kaca Modern',
                'slug' => 'pemasangan-facade-acp-dan-kaca-gedung',
                'category' => 'ACP & Facade',
                'client' => 'Gedung Kantor Korporasi',
                'location' => 'Surabaya Pusat',
                'year' => '2023 - 2024',
                'description' => 'Pembaruan fasad eksterior gedung bertingkat menggunakan panel ACP Seven PVDF metallic color yang dipadukan dengan curtain wall kaca stopsol.',
                'scope_of_work' => [
                    'Fabrikasi rangka hollow galvanis 40x40x1.8mm terpasang presisi',
                    'Pemotongan, grooving dan tekukan lembaran ACP standar laser',
                    'Penguncian sekrup bracket baja dan sealant neutral weather-seal',
                    'Pembersihan akhir fasad dan serah terima garansi ketahanan warna',
                ],
                'primary_image' => '/images/projects/p13_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p13_2_X11.webp',
                    '/images/projects/p14_1_X6.webp',
                ],
                'is_featured' => true,
                'display_order' => 5,
            ],
            [
                'title' => 'Aplikasi Lantai Epoxy Heavy Duty Anti-Slip & Self-Leveling Gudang',
                'slug' => 'aplikasi-lantai-epoxy-heavy-duty-gudang-pabrik',
                'category' => 'Epoxy & Coating',
                'client' => 'Fasilitas Manufaktur Food & Distribution Center',
                'location' => 'Pasuruan, Jawa Timur',
                'year' => '2024',
                'description' => 'Aplikasi pelapisan lantai epoxy self-leveling 2.000 mikron (2mm) berstandar food grade, tahan cairan kimia, anti gores beban forklift, dan mudah dibersihkan.',
                'scope_of_work' => [
                    'Surface preparation diamond grinding mesin rotari dan vacuum debu',
                    'Aplikasi primer epoxy solvent-free untuk daya rekat maksimal',
                    'Pelapisan body coat epoxy mortar leveling celah beton',
                    'Finishing top coat epoxy warna high gloss dan garis line walkway',
                ],
                'primary_image' => '/images/projects/p23_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p23_2_X11.webp',
                    '/images/projects/p24_1_X6.webp',
                ],
                'is_featured' => true,
                'display_order' => 6,
            ],
            [
                'title' => 'Waterproofing Membran Bakar Rooftop Gedung & Dak Beton',
                'slug' => 'waterproofing-membran-bakar-rooftop-gedung',
                'category' => 'Waterproofing & Proteksi',
                'client' => 'Gedung Komersial & Apartemen',
                'location' => 'Surabaya Timur',
                'year' => '2023',
                'description' => 'Penanganan anti bocor total pada area dak atas seluas 1.800 m2 dengan sistem membran bakar torch-on 3mm mineral granule.',
                'scope_of_work' => [
                    'Pembersihan lumut, chipping dak beton retak dan pembuatan chamfer',
                    'Pelapisan primer bitumen penetrasi tinggi secara merata',
                    'Pembakaran dan penempelan lembaran membran bakar overlap 10 cm',
                    'Pengujian rendam air (flood test) selama 48 jam tanpa rembesan',
                ],
                'primary_image' => '/images/projects/p15_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p15_2_X11.webp',
                    '/images/projects/p16_1_X6.webp',
                ],
                'is_featured' => false,
                'display_order' => 7,
            ],
            [
                'title' => 'Renovasi Interior & Fit-Out Ruang Kantor Manajemen Eksekutif',
                'slug' => 'renovasi-interior-fit-out-kantor-manajemen',
                'category' => 'Interior & Fit-Out',
                'client' => 'Kantor Pusat Perusahaan Ekspedisi',
                'location' => 'Surabaya, Jawa Timur',
                'year' => '2024',
                'description' => 'Penataan interior modern minimalis meliputi partisi ruang meeting kedap suara, wall paneling aksen kayu HPL, plafon drop ceiling akustik, dan pencahayaan hangat.',
                'scope_of_work' => [
                    'Pemasangan partisi gypsum ganda dengan insulasi glasswool peredam',
                    'Pembuatan backdrop resepsionis dan panel dinding kisi-kisi HPL',
                    'Pemasangan lantai vinyl SPC ketebalan 5mm anti air dan rayap',
                    'Instalasi kelistrikan stop kontak lantai (floor outlet) dan lampu LED',
                ],
                'primary_image' => '/images/projects/p19_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p19_2_X11.webp',
                    '/images/projects/p20_1_X6.webp',
                ],
                'is_featured' => false,
                'display_order' => 8,
            ],
            [
                'title' => 'Pemasangan Kanopi Baja Drop-Off & Railing Pengaman Gedung',
                'slug' => 'pemasangan-kanopi-baja-drop-off-dan-railing',
                'category' => 'Railing & Kanopi',
                'client' => 'Fasilitas Gedung Pelayanan & Kantor Cabang',
                'location' => 'Sidoarjo, Jawa Timur',
                'year' => '2023',
                'description' => 'Pekerjaan kanopi struktur pipa hollow seamless penutup solar flat solid dan pembuatan railing void tangga dengan material stainless steel SUS 304.',
                'scope_of_work' => [
                    'Fabrikasi struktur cantilever kanopi pipa baja anti karat',
                    'Pemasangan lembaran penutup atap solarflat 3mm bening tahan benturan',
                    'Pembuatan handrail tangga stainless steel kombinasi kaca tempered',
                    'Pengecatan finishing rangka kanopi cat duco polyurethane tahan cuaca',
                ],
                'primary_image' => '/images/projects/p17_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p17_2_X11.webp',
                    '/images/projects/p18_1_X6.webp',
                ],
                'is_featured' => false,
                'display_order' => 9,
            ],
            [
                'title' => 'Pembangunan Storefront Ritel, Neon Signage & Fasad Toko',
                'slug' => 'pembangunan-storefront-ritel-dan-neon-signage',
                'category' => 'Interior & Fit-Out',
                'client' => 'Jaringan Toko & Outlet Ritel',
                'location' => 'Mall & Commercial Strip Surabaya',
                'year' => '2024',
                'description' => 'Pengerjaan fasad toko ritel dengan pintu kaca tempered frameless, illuminated letter box 3D akrilik, serta interior display rapi siap buka.',
                'scope_of_work' => [
                    'Pemasangan pintu floor hinge dan dinding kaca tempered 12mm',
                    'Fabrikasi letter sign 3D acrylic LED backlight hemat energi',
                    'Pemasangan rak display built-in dan meja kasir finishing HPL',
                    'Penyesuaian titik sprinkler dan instalasi kelistrikan standar mall',
                ],
                'primary_image' => '/images/projects/p21_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p21_2_X11.webp',
                    '/images/projects/p22_1_X6.webp',
                ],
                'is_featured' => false,
                'display_order' => 10,
            ],
            [
                'title' => 'Pengecatan Ulang Dinding Luar Gedung Bertingkat (Exterior Re-Painting)',
                'slug' => 'pengecatan-ulang-eksterior-gedung-bertingkat',
                'category' => 'Epoxy & Coating',
                'client' => 'Gedung Instansi & Kantor Sewa',
                'location' => 'Surabaya',
                'year' => '2023',
                'description' => 'Perawatan eksterior gedung bertingkat 5 lantai menggunakan metode rope access profesional dan cat weathercoat pelindung lumut/jamur.',
                'scope_of_work' => [
                    'Water jet high pressure cleaning seluruh permukaan fasad lama',
                    'Perbaikan retak rambut dinding dengan elastomeric patch filler',
                    'Pemberian cat dasar sealer alkali resisting primer',
                    'Pengecatan 2 lapis cat eksterior premium garansi 5 tahun',
                ],
                'primary_image' => '/images/projects/p06_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p06_2_X11.webp',
                ],
                'is_featured' => false,
                'display_order' => 11,
            ],
            [
                'title' => 'Instalasi Panel Daya Listrik, Kabel Tray & CCTV Keamanan Gudang',
                'slug' => 'instalasi-panel-daya-listrik-dan-cctv-gudang',
                'category' => 'MEP & Keamanan',
                'client' => 'Pusat Distribusi & Logistik',
                'location' => 'Gresik, Jawa Timur',
                'year' => '2024',
                'description' => 'Penataan sistem kelistrikan terpusat, instalasi kabel tray sepanjang 300 meter, penanaman grounding sistem petir, dan pemasangan 32 unit IP CCTV outdoor.',
                'scope_of_work' => [
                    'Perakitan panel sub distribution board (SDB) komponen Schneider',
                    'Pemasangan jalur kabel tray perforated di ketinggian rangka baja',
                    'Penarikan kabel power NYM/NYY dan grounding pembumian pipa tembaga',
                    'Pemasangan IP Camera 4MP infrared, NVR 32 channel dan monitoring desk',
                ],
                'primary_image' => '/images/projects/p14_1_X6.webp',
                'gallery_images' => [
                    '/images/projects/p14_2_X11.webp',
                ],
                'is_featured' => false,
                'display_order' => 12,
            ],
        ];

        foreach ($projects as $project) {
            ProjectItem::updateOrCreate(
                ['slug' => $project['slug']],
                $project
            );
        }
    }
}
