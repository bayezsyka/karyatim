import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '../../Layouts/AppLayout';
import { 
    Building2, 
    Wrench, 
    Layers, 
    Truck, 
    LayoutGrid, 
    ShieldCheck, 
    Umbrella, 
    Briefcase, 
    Paintbrush, 
    Shield, 
    Store, 
    Cpu, 
    CheckCircle2, 
    ArrowRight, 
    Phone 
} from 'lucide-react';

const iconMap = {
    'Building2': Building2,
    'Wrench': Wrench,
    'Layers': Layers,
    'Truck': Truck,
    'LayoutGrid': LayoutGrid,
    'ShieldCheck': ShieldCheck,
    'Umbrella': Umbrella,
    'Briefcase': Briefcase,
    'Paintbrush': Paintbrush,
    'Shield': Shield,
    'Store': Store,
    'Cpu': Cpu,
};

export default function Index({ services }) {
    return (
        <AppLayout title="Layanan Spesialisasi Konstruksi & Rekayasa Rekayasa">
            {/* Header */}
            <div className="bg-[#0c253b] text-[#fffdf8] py-14 border-b border-[#163e61]">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold text-[#97ad82] uppercase tracking-wider block mb-2">
                            Solusi Rekayasa & Konstruksi
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black text-[#fffdf8] tracking-tight mb-3">
                            Layanan Konstruksi Terpadu Karyatim
                        </h1>
                        <p className="text-sm sm:text-base text-[#e5e0d3] leading-relaxed">
                            Penyediaan jasa konstruksi sipil, fabrikasi baja, perkerasan jalan, fasad arsitektural, dan interior dengan rekam jejak teruji sejak 2012.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = iconMap[service.icon] || Building2;
                        return (
                            <div
                                key={service.id}
                                className="bg-[#ffffff] border border-[#e5e0d3] hover:border-[#0c253b] rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-xs"
                            >
                                {service.image && (
                                    <div className="aspect-[16/9] bg-[#f1ede3] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                )}

                                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <div className="w-10 h-10 bg-[#f7f5ef] text-[#0c253b] rounded flex items-center justify-center border border-[#e5e0d3]">
                                                <Icon className="w-5 h-5 text-[#0c253b]" />
                                            </div>
                                            <span className="text-[11px] font-semibold text-[#97ad82] bg-[#f7f5ef] px-2.5 py-1 rounded">
                                                {service.category}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-[#0c253b] mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#5c6773] leading-relaxed">
                                            {service.short_description}
                                        </p>

                                        {service.deliverables && (
                                            <div className="mt-4 pt-4 border-t border-[#f1ede3] space-y-1.5">
                                                <div className="text-[11px] font-bold text-[#0c253b]">
                                                    Cakupan Pekerjaan:
                                                </div>
                                                <ul className="space-y-1 text-xs text-[#5c6773]">
                                                    {service.deliverables.slice(0, 3).map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-1.5">
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#97ad82] shrink-0 mt-0.5" />
                                                            <span className="line-clamp-1">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-4 border-t border-[#f1ede3] flex items-center justify-between">
                                        <Link
                                            href={`/layanan/${service.slug}`}
                                            className="text-xs font-semibold text-[#0c253b] hover:text-[#97ad82] inline-flex items-center gap-1"
                                        >
                                            <span>Rincian Spesifikasi</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                        <a
                                            href={`https://wa.me/6281231716286?text=Halo%20Karyatim,%20saya%20tertarik%20konsultasi%20layanan%20${encodeURIComponent(service.title)}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs font-semibold text-[#97ad82] hover:underline"
                                        >
                                            Konsultasi WA
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Consultation Banner */}
                <div className="mt-16 bg-[#0c253b] text-[#fffdf8] rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#fffdf8]">
                            Punya Kebutuhan Spesifik di Luar Daftar di Atas?
                        </h3>
                        <p className="text-xs sm:text-sm text-[#e5e0d3] max-w-2xl">
                            PT. Karyatim Mandiri Engineering memiliki kapasitas rekayasa khusus untuk menangani proyek kustom skala industri dan komersial di seluruh Indonesia.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/6281231716286?text=Halo%20Tim%20Teknis%20Karyatim,%20saya%20ingin%20konsultasi%20kebutuhan%20proyek%20kustom."
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3.5 text-xs font-bold text-[#081a2a] bg-[#97ad82] hover:bg-[#7a8f68] rounded transition-colors shrink-0 inline-flex items-center gap-2"
                    >
                        <Phone className="w-4 h-4 text-[#081a2a]" />
                        <span>Konsultasi Teknis Langsung</span>
                    </a>
                </div>
            </div>
        </AppLayout>
    );
}
