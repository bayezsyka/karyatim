import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '../../Layouts/AppLayout';
import ProjectCard from '../../Components/ProjectCard';
import { 
    ArrowLeft, 
    CheckCircle2, 
    Phone, 
    ShieldCheck, 
    FileText, 
    ArrowRight 
} from 'lucide-react';

export default function Show({ service, relatedProjects = [] }) {
    return (
        <AppLayout title={`${service.title} — PT. Karyatim Mandiri Engineering`}>
            {/* Header */}
            <div className="bg-[#0c253b] text-[#fffdf8] py-10 border-b border-[#163e61]">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <Link
                        href="/layanan"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#97ad82] hover:text-[#fffdf8] transition-colors mb-4"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Kembali ke Semua Layanan</span>
                    </Link>
                    <span className="text-xs font-semibold text-[#97ad82] bg-[#163e61] px-2.5 py-1 rounded inline-block mb-3">
                        {service.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black text-[#fffdf8] tracking-tight">
                        {service.title}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8 space-y-8">
                        {service.image && (
                            <div className="rounded-lg overflow-hidden border border-[#e5e0d3] bg-[#0c253b]">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-80 sm:h-96 object-cover"
                                />
                            </div>
                        )}

                        <div className="bg-[#ffffff] border border-[#e5e0d3] rounded-lg p-6 sm:p-8 space-y-4">
                            <h2 className="text-lg font-bold text-[#0c253b]">
                                Deskripsi & Standar Pelaksanaan
                            </h2>
                            <p className="text-sm text-[#5c6773] leading-relaxed">
                                {service.full_description || service.short_description}
                            </p>
                            <p className="text-xs text-[#5c6773] leading-relaxed">
                                Pelaksanaan layanan ini didukung oleh peralatan mekanis modern, tim teknis berpengalaman, serta jaminan mutu material berstandar SNI / ASTM untuk memastikan durabilitas konstruksi jangka panjang.
                            </p>
                        </div>

                        {service.deliverables && (
                            <div className="bg-[#ffffff] border border-[#e5e0d3] rounded-lg p-6 sm:p-8 space-y-4">
                                <h2 className="text-lg font-bold text-[#0c253b]">
                                    Cakupan & Rincian Deliverables
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.deliverables.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-[#f7f5ef] p-3.5 rounded border border-[#e5e0d3] flex items-start gap-2.5 text-xs text-[#081a2a]"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-[#97ad82] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-[#0c253b] text-[#fffdf8] rounded-lg p-6 space-y-4">
                            <h3 className="text-base font-bold text-[#fffdf8]">
                                Konsultasikan Layanan Ini
                            </h3>
                            <p className="text-xs text-[#e5e0d3] leading-relaxed">
                                Hubungi tim estimator Karyatim untuk penjadwalan survei lapangan dan perhitungan Rencana Anggaran Biaya (RAB) gratis.
                            </p>
                            <a
                                href={`https://wa.me/6281231716286?text=Halo%20Tim%20Teknis%20Karyatim,%20saya%20ingin%20konsultasi%20layanan%20${encodeURIComponent(service.title)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#97ad82] hover:bg-[#7a8f68] text-[#081a2a] font-bold text-xs rounded transition-colors"
                            >
                                <Phone className="w-4 h-4 text-[#081a2a]" />
                                <span>Hubungi via WhatsApp</span>
                            </a>
                        </div>

                        <div className="bg-[#f7f5ef] border border-[#e5e0d3] rounded-lg p-5 space-y-3">
                            <div className="flex items-center gap-2 text-[#0c253b] font-bold text-xs">
                                <ShieldCheck className="w-4 h-4 text-[#97ad82]" />
                                <span>Jaminan Kualitas Karyatim</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-[#5c6773]">
                                <li>• Material bersertifikat SNI</li>
                                <li>• Pekerja bersertifikat K3</li>
                                <li>• Garansi pemeliharaan pasca proyek</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-[#e5e0d3]">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-[#0c253b]">
                                Proyek Terkait Layanan Ini
                            </h2>
                            <Link href="/proyek" className="text-xs font-semibold text-[#0c253b] hover:text-[#97ad82]">
                                Lihat Semua Portofolio
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedProjects.map((p) => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
