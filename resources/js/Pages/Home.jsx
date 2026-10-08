import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import StatsSection from '../Components/StatsSection';
import ProjectCard from '../Components/ProjectCard';
import ClientLogoGrid from '../Components/ClientLogoGrid';
import EstimationCalculator from '../Components/EstimationCalculator';
import { 
    Building2, 
    Wrench, 
    Layers, 
    Truck, 
    LayoutGrid, 
    ShieldCheck, 
    ArrowRight, 
    FileDown, 
    Phone, 
    CheckCircle2, 
    HardHat,
    Clock,
    Award
} from 'lucide-react';

export default function Home({ featuredProjects, services, clients, stats, company }) {
    const serviceIcons = {
        'Building2': Building2,
        'Wrench': Wrench,
        'Layers': Layers,
        'Truck': Truck,
        'LayoutGrid': LayoutGrid,
        'ShieldCheck': ShieldCheck,
    };

    const workflowSteps = [
        {
            num: '01',
            title: 'Konsultasi & Survei Lokasi',
            desc: 'Analisis kebutuhan teknis di lapangan, pengukuran luas area, dan pengecekan kondisi tanah serta akses logistik proyek.',
        },
        {
            num: '02',
            title: 'Perencanaan Struktur & RAB Transparan',
            desc: 'Penyusunan gambar kerja, perhitungan beban struktur, spesifikasi material SNI, dan penawaran biaya detail tanpa biaya tersembunyi.',
        },
        {
            num: '03',
            title: 'Eksekusi Proyek Berstandar K3',
            desc: 'Pengerjaan lapangan oleh tenaga ahli bersertifikat, pengawasan harian ketat, serta kepatuhan penuh terhadap jadwal kerja (S-Curve).',
        },
        {
            num: '04',
            title: 'Serah Terima & Garansi Pemeliharaan',
            desc: 'Inspeksi akhir bersama (checklist BAST), pengujian fungsi menyeluruh, serta jaminan masa retensi dan pemeliharaan konstruksi.',
        },
    ];

    return (
        <AppLayout title="General Contractor & Civil Engineering Surabaya">
            {/* Hero Section */}
            <section className="relative bg-[#0c253b] text-[#fffdf8] pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#163e61] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Hero Text */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex items-center gap-2 text-xs font-semibold text-[#97ad82]">
                                <HardHat className="w-4 h-4 text-[#97ad82]" />
                                <span>PT. Karyatim Mandiri Engineering — Berpengalaman Sejak 2012</span>
                            </div>

                            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#fffdf8] tracking-tight leading-tight">
                                Kontraktor Sipil, Struktur Baja & Fasilitas Industri Terpercaya di Surabaya
                            </h1>

                            <p className="text-base sm:text-lg text-[#e5e0d3] leading-relaxed max-w-2xl">
                                Menyediakan solusi konstruksi terpadu untuk pembangunan gedung, fabrikasi baja bentang lebar, rigid pavement beton, pengaspalan hotmix, fasad ACP, hingga interior perkantoran dengan komitmen mutu tinggi dan kepatuhan jadwal.
                            </p>

                            {/* Trust badges */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#e5e0d3]">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#97ad82] shrink-0" />
                                    <span>Material Standar SNI</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#97ad82] shrink-0" />
                                    <span>Protokol K3 & Zero Accident</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#97ad82] shrink-0" />
                                    <span>RAB Transparan & Presisi</span>
                                </div>
                            </div>

                            {/* Hero Action Buttons */}
                            <div className="pt-4 flex flex-wrap items-center gap-4">
                                <a
                                    href="https://wa.me/6281231716286?text=Halo%20Tim%20Teknis%20PT.%20Karyatim%20Mandiri%20Engineering,%20saya%20ingin%20konsultasi%20kebutuhan%20proyek."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#081a2a] bg-[#97ad82] hover:bg-[#7a8f68] rounded transition-colors shadow-sm"
                                >
                                    <Phone className="w-4 h-4 text-[#081a2a]" />
                                    <span>Konsultasi Proyek & Survei Gratis</span>
                                    <ArrowRight className="w-4 h-4 text-[#081a2a]" />
                                </a>

                                <a
                                    href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#fffdf8] bg-[#163e61] hover:bg-[#1f507b] rounded border border-[#1f507b] transition-colors"
                                >
                                    <FileDown className="w-4 h-4 text-[#97ad82]" />
                                    <span>Unduh Portofolio PDF (24 Hal)</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Hero Showcase Image */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-lg overflow-hidden border-2 border-[#163e61] shadow-2xl bg-[#081a2a]">
                                <img
                                    src="/images/projects/p07_1_X6.webp"
                                    alt="Proyek Struktur Baja Karyatim"
                                    className="w-full h-80 sm:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#081a2a] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4 right-4 bg-[#0c253b]/90 backdrop-blur-xs p-3.5 rounded border border-[#163e61] text-xs">
                                    <div className="font-bold text-[#fffdf8] mb-0.5">
                                        Struktur Baja Bentang Lebar & Bangunan Industri
                                    </div>
                                    <div className="text-[#97ad82] text-[11px]">
                                        Dokumentasi Riil Proyek PT. Karyatim Mandiri Engineering
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Stats */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 relative z-20">
                <StatsSection stats={stats} />
            </section>

            {/* Core Services Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-[#e5e0d3]">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#0c253b] tracking-tight">
                            Layanan Spesialisasi Konstruksi
                        </h2>
                        <p className="text-sm text-[#5c6773] mt-1">
                            Penyediaan jasa konstruksi menyeluruh dengan kapasitas teknis tinggi dan standar rekayasa teruji
                        </p>
                    </div>
                    <Link
                        href="/layanan"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c253b] hover:text-[#97ad82] transition-colors"
                    >
                        <span>Lihat Semua 12 Layanan</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.slice(0, 6).map((service) => {
                        const Icon = serviceIcons[service.icon] || Building2;
                        return (
                            <div
                                key={service.id}
                                className="bg-[#ffffff] border border-[#e5e0d3] hover:border-[#0c253b] rounded-lg p-6 flex flex-col justify-between transition-all duration-200 shadow-xs"
                            >
                                <div>
                                    <div className="w-12 h-12 bg-[#f7f5ef] border border-[#e5e0d3] text-[#0c253b] rounded flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-[#0c253b]" />
                                    </div>
                                    <h3 className="font-bold text-lg text-[#0c253b] mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#5c6773] leading-relaxed mb-4">
                                        {service.short_description}
                                    </p>

                                    {service.deliverables && (
                                        <ul className="space-y-1.5 text-xs text-[#081a2a] pt-3 border-t border-[#f1ede3]">
                                            {service.deliverables.slice(0, 3).map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-1.5">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#97ad82] shrink-0 mt-0.5" />
                                                    <span className="line-clamp-1">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="pt-5 mt-4 border-t border-[#f1ede3] flex items-center justify-between">
                                    <Link
                                        href={`/layanan/${service.slug}`}
                                        className="text-xs font-semibold text-[#0c253b] hover:text-[#97ad82] inline-flex items-center gap-1"
                                    >
                                        <span>Rincian Layanan</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                    <span className="text-[11px] text-[#5c6773] font-medium">
                                        {service.category}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Featured Projects Showcase */}
            <section className="bg-[#f7f5ef] py-20 border-y border-[#e5e0d3]">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-[#e5e0d3]">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-black text-[#0c253b] tracking-tight">
                                Dokumentasi Portofolio Proyek Unggulan
                            </h2>
                            <p className="text-sm text-[#5c6773] mt-1">
                                Bukti riil pengerjaan konstruksi, struktur baja, rigid pavement, dan fit-out di lapangan
                            </p>
                        </div>
                        <Link
                            href="/proyek"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c253b] hover:text-[#97ad82] transition-colors"
                        >
                            <span>Jelajahi Semua Portofolio</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Estimation Calculator Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
                <EstimationCalculator />
            </section>

            {/* Verified Corporate Clients */}
            <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-8">
                <ClientLogoGrid clients={clients} />
            </section>

            {/* Methodology & Quality Assurance */}
            <section className="bg-[#0c253b] text-[#fffdf8] py-20 border-t border-[#163e61]">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="text-xs font-semibold text-[#97ad82] mb-2 flex items-center justify-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>Metodologi Kerja Terstruktur</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#fffdf8]">
                            Standar Pengerjaan Proyek Karyatim
                        </h2>
                        <p className="text-sm text-[#e5e0d3] mt-2">
                            Setiap proyek dijalankan melalui tahapan baku guna menjamin kepatuhan spesifikasi teknis, ketepatan jadwal, dan efisiensi biaya.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {workflowSteps.map((step, idx) => (
                            <div
                                key={idx}
                                className="bg-[#163e61]/60 border border-[#1f507b] p-6 rounded-lg relative flex flex-col justify-between"
                            >
                                <div>
                                    <div className="text-2xl font-black text-[#97ad82] font-mono mb-3">
                                        {step.num}
                                    </div>
                                    <h3 className="font-bold text-base text-[#fffdf8] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs text-[#e5e0d3] leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA Box */}
                    <div className="mt-16 bg-[#081a2a] border border-[#1f507b] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-1">
                            <h3 className="text-lg sm:text-xl font-bold text-[#fffdf8]">
                                Siap Mendiskusikan Kebutuhan Proyek Konstruksi Anda?
                            </h3>
                            <p className="text-xs text-[#e5e0d3]">
                                Tim insinyur dan estimator Karyatim siap melakukan survei lokasi dan memberikan penawaran RAB transparan.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <a
                                href="https://wa.me/6281231716286?text=Halo%20Tim%20Teknis%20PT.%20Karyatim%20Mandiri%20Engineering,%20saya%20ingin%20jadwalkan%20survei%20lokasi%20proyek."
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-3 text-xs font-bold text-[#081a2a] bg-[#97ad82] hover:bg-[#7a8f68] rounded transition-colors"
                            >
                                Hubungi via WhatsApp
                            </a>
                            <Link
                                href="/kontak"
                                className="px-5 py-3 text-xs font-semibold text-[#fffdf8] bg-[#163e61] hover:bg-[#1f507b] rounded border border-[#1f507b] transition-colors"
                            >
                                Formulir Konsultasi
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
