import React from 'react';
import AppLayout from '../../Layouts/AppLayout';
import StatsSection from '../../Components/StatsSection';
import ClientLogoGrid from '../../Components/ClientLogoGrid';
import { 
    Award, 
    ShieldCheck, 
    FileText, 
    CheckCircle2, 
    Building2, 
    Target, 
    Compass, 
    Phone, 
    ArrowDownToLine 
} from 'lucide-react';

export default function Index({ clients, stats, company }) {
    const values = [
        {
            title: 'Kualitas & Presisi Struktural',
            desc: 'Kami menerapkan standar ketat dalam pemilihan material bersertifikasi SNI dan pengawasan teknis berkelanjutan demi menghasilkan struktur yang kokoh dan tahan lama.',
        },
        {
            title: 'Kepatuhan Waktu & Jadwal',
            desc: 'Manajemen proyek terencana dengan pengawasan S-Curve mingguan memastikan setiap tahapan pekerjaan diselesaikan sesuai target waktu yang disepakati.',
        },
        {
            title: 'Transparansi Anggaran',
            desc: 'Penyusunan Rencana Anggaran Biaya (RAB) terperinci tanpa biaya tersembunyi, memberikan kepastian investasi bagi klien korporat maupun perorangan.',
        },
        {
            title: 'Budaya K3 & Zero Accident',
            desc: 'Keselamatan kerja adalah prioritas mutlak. Seluruh tenaga kerja dibekali APD lengkap dan mengikuti standar operasional keselamatan konstruksi nasional.',
        },
    ];

    const equipmentList = [
        'Mesin Concrete Laser Screed & Ride-on Power Trowel',
        'Mesin Aspal Tandem Roller & Pneumatic Tire Roller',
        'Mobile Crane & Crane Truck Kapasitas 25 Ton',
        'Mesin Diamond Floor Grinding & Dust Extractor',
        'Torch-On Membrane Waterproofing Equipment',
        'Total Station & Laser Distance Meter Presisi Tinggi',
        'Scaffolding Modular & Full Body Safety Harness Set K3',
    ];

    return (
        <AppLayout title="Tentang Perusahaan — PT. Karyatim Mandiri Engineering">
            {/* Header */}
            <div className="bg-[#0c253b] text-[#fffdf8] py-14 border-b border-[#163e61]">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold text-[#97ad82] uppercase tracking-wider block mb-2">
                            Profil Korporasi & Rekam Jejak
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black text-[#fffdf8] tracking-tight mb-3">
                            Dedikasi Lebih Dari 12 Tahun dalam Rekayasa Konstruksi
                        </h1>
                        <p className="text-sm sm:text-base text-[#e5e0d3] leading-relaxed">
                            PT. Karyatim Mandiri Engineering adalah perusahaan kontraktor sipil dan rekayasa konstruksi yang berpusat di Surabaya, melayani kebutuhan industri, komersial, dan infrastruktur di seluruh Indonesia.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-16">
                {/* Stats */}
                <StatsSection stats={stats} />

                {/* Company Story & Narrative */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 space-y-4 text-sm text-[#5c6773] leading-relaxed">
                        <h2 className="text-2xl font-black text-[#0c253b] tracking-tight">
                            Membangun dengan Fondasi Integritas dan Keahlian Teknis
                        </h2>
                        <p>
                            Didirikan di Kota Surabaya, <strong className="text-[#0c253b]">PT. Karyatim Mandiri Engineering</strong> tumbuh menjadi mitra konstruksi pilihan bagi berbagai sektor industri, manufaktur, logistik, pengembang properti, hingga instansi BUMN.
                        </p>
                        <p>
                            Fokus layanan kami berorientasi pada kepuasan pelanggan (*customer oriented*) dengan mengedepankan mutu hasil pengerjaan, ketepatan jadwal, efisiensi biaya, serta kepatuhan penuh terhadap ruang lingkup kerja (*scope of work*).
                        </p>
                        <p>
                            Dengan dukungan tim insinyur berpengalaman, tenaga kerja terampil, serta armada peralatan mekanis mandiri, kami siap menjawab tantangan konstruksi dari skala renovasi presisi hingga pembangunan gedung dan pabrik bentang lebar.
                        </p>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="rounded-lg overflow-hidden border border-[#e5e0d3] bg-[#0c253b] shadow-md">
                            <img
                                src="/images/projects/p01_1_X6.webp"
                                alt="Profil Karyatim"
                                className="w-full h-80 object-cover"
                            />
                            <div className="p-4 bg-[#0c253b] text-[#fffdf8] flex items-center justify-between text-xs">
                                <span>Kantor & Basis Operasional: Surabaya, Jawa Timur</span>
                                <span className="text-[#97ad82] font-semibold">Sejak 2012</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#ffffff] border border-[#e5e0d3] p-6 sm:p-8 rounded-lg space-y-3">
                        <div className="w-10 h-10 bg-[#0c253b] text-[#97ad82] rounded flex items-center justify-center">
                            <Target className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-[#0c253b]">
                            Visi Perusahaan
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5c6773] leading-relaxed">
                            Menjadi perusahaan general contractor dan rekayasa konstruksi terdepan di Indonesia yang diakui atas keunggulan mutu, integritas pengerjaan, dan inovasi solusi bangunan yang berkelanjutan.
                        </p>
                    </div>

                    <div className="bg-[#ffffff] border border-[#e5e0d3] p-6 sm:p-8 rounded-lg space-y-3">
                        <div className="w-10 h-10 bg-[#0c253b] text-[#97ad82] rounded flex items-center justify-center">
                            <Compass className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-[#0c253b]">
                            Misi Perusahaan
                        </h3>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#5c6773]">
                            <li>• Menyediakan layanan konstruksi berstandar tinggi yang tepat waktu dan sesuai anggaran.</li>
                            <li>• Mengembangkan kapabilitas teknis dan inovasi metode kerja secara berkesinambungan.</li>
                            <li>• Membangun hubungan kemitraan jangka panjang berlandaskan transparansi dan kepercayaan.</li>
                        </ul>
                    </div>
                </div>

                {/* Core Values */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-black text-[#0c253b] tracking-tight pb-3 border-b border-[#e5e0d3]">
                        Nilai Utama & Komitmen Pelayanan
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, idx) => (
                            <div
                                key={idx}
                                className="bg-[#f7f5ef] border border-[#e5e0d3] p-6 rounded-lg space-y-2"
                            >
                                <div className="text-xs font-bold text-[#97ad82] font-mono">0{idx + 1}</div>
                                <h3 className="font-bold text-sm text-[#0c253b]">{v.title}</h3>
                                <p className="text-xs text-[#5c6773] leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Equipment & Capabilities */}
                <div className="bg-[#ffffff] border border-[#e5e0d3] rounded-lg p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#97ad82]" />
                        <h2 className="text-lg font-bold text-[#0c253b]">
                            Dukungan Peralatan & Kapasitas Alat Kerja
                        </h2>
                    </div>
                    <p className="text-xs text-[#5c6773]">
                        Untuk menjamin efisiensi dan kecepatan eksekusi, Karyatim mengoperasikan armada peralatan mekanis mandiri:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                        {equipmentList.map((eq, idx) => (
                            <div
                                key={idx}
                                className="bg-[#f7f5ef] p-3 rounded border border-[#e5e0d3] flex items-center gap-2 text-xs text-[#081a2a]"
                            >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#97ad82] shrink-0" />
                                <span>{eq}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Client Grid */}
                <ClientLogoGrid clients={clients} />

                {/* Bottom Callout */}
                <div className="bg-[#0c253b] text-[#fffdf8] rounded-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-bold text-[#fffdf8] mb-1">
                            Unduh Dokumen Portofolio & Legalitas Resmi
                        </h3>
                        <p className="text-xs text-[#e5e0d3]">
                            File PDF lengkap 24 halaman mencakup profil, foto proyek, dan kontak operasional.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                        <a
                            href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf"
                            download
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#081a2a] bg-[#97ad82] hover:bg-[#7a8f68] rounded transition-colors"
                        >
                            <ArrowDownToLine className="w-4 h-4 text-[#081a2a]" />
                            <span>Unduh PDF Portofolio</span>
                        </a>
                        <a
                            href="https://wa.me/6281231716286"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2.5 text-xs font-semibold text-[#fffdf8] bg-[#163e61] rounded"
                        >
                            Hubungi Manajemen
                        </a>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
