import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '../../Layouts/AppLayout';
import ProjectCard from '../../Components/ProjectCard';
import { 
    MapPin, 
    Calendar, 
    Building, 
    CheckCircle2, 
    ArrowLeft, 
    Phone, 
    Share2, 
    ShieldCheck, 
    FileText 
} from 'lucide-react';

export default function Show({ project, relatedProjects = [] }) {
    return (
        <AppLayout title={`${project.title} — PT. Karyatim Mandiri Engineering`}>
            {/* Breadcrumb & Navigation */}
            <div className="bg-[#0c253b] text-[#fffdf8] py-8 border-b border-[#163e61]">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <Link
                        href="/proyek"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#97ad82] hover:text-[#fffdf8] transition-colors mb-4"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Kembali ke Semua Portofolio</span>
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#e5e0d3] mb-2">
                        <span className="bg-[#163e61] px-2.5 py-1 rounded text-[#97ad82] font-semibold">
                            {project.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#97ad82]" />
                            {project.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#97ad82]" />
                            {project.year}
                        </span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black text-[#fffdf8] tracking-tight">
                        {project.title}
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left: Media & Description */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Primary Image */}
                        <div className="rounded-lg overflow-hidden border border-[#e5e0d3] bg-[#0c253b] shadow-sm">
                            <img
                                src={project.primary_image}
                                alt={project.title}
                                className="w-full h-auto max-h-[520px] object-cover"
                            />
                        </div>

                        {/* Gallery Thumbnails */}
                        {project.gallery_images && project.gallery_images.length > 0 && (
                            <div className="space-y-2">
                                <h3 className="text-xs font-bold text-[#0c253b] uppercase tracking-wide">
                                    Dokumentasi Pelaksanaan di Lapangan
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {project.gallery_images.map((img, idx) => (
                                        <div key={idx} className="aspect-[4/3] rounded overflow-hidden border border-[#e5e0d3] bg-[#f1ede3]">
                                            <img
                                                src={img}
                                                alt={`Dokumentasi ${idx + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Narrative Description */}
                        <div className="bg-[#ffffff] border border-[#e5e0d3] rounded-lg p-6 sm:p-8 space-y-4">
                            <h2 className="text-lg font-bold text-[#0c253b]">
                                Ringkasan & Uraian Teknis Proyek
                            </h2>
                            <p className="text-sm text-[#5c6773] leading-relaxed">
                                {project.description}
                            </p>
                            <p className="text-xs text-[#5c6773] leading-relaxed">
                                Pelaksanaan proyek dilakukan dengan pengendalian mutu material sesuai spesifikasi teknis, kepatuhan jadwal kerja yang ketat, serta pengawasan K3 zero accident oleh tim engineering PT. Karyatim Mandiri Engineering.
                            </p>
                        </div>

                        {/* Scope of Work */}
                        {project.scope_of_work && project.scope_of_work.length > 0 && (
                            <div className="bg-[#ffffff] border border-[#e5e0d3] rounded-lg p-6 sm:p-8 space-y-4">
                                <h2 className="text-lg font-bold text-[#0c253b]">
                                    Ruang Lingkup & Metode Pekerjaan (Scope of Work)
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {project.scope_of_work.map((scope, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-[#f7f5ef] p-3.5 rounded border border-[#e5e0d3] flex items-start gap-2.5 text-xs text-[#081a2a]"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-[#97ad82] shrink-0 mt-0.5" />
                                            <span>{scope}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Project Meta Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Project Specs Box */}
                        <div className="bg-[#ffffff] border border-[#0c253b] rounded-lg p-6 space-y-4">
                            <h3 className="text-sm font-bold text-[#0c253b] uppercase tracking-wide pb-3 border-b border-[#e5e0d3]">
                                Informasi Ringkas Proyek
                            </h3>
                            <div className="space-y-3 text-xs text-[#081a2a]">
                                <div className="flex justify-between py-1 border-b border-[#f1ede3]">
                                    <span className="text-[#5c6773]">Kategori:</span>
                                    <span className="font-semibold text-right text-[#0c253b]">{project.category}</span>
                                </div>
                                <div className="flex justify-between py-1 border-b border-[#f1ede3]">
                                    <span className="text-[#5c6773]">Lokasi:</span>
                                    <span className="font-semibold text-right text-[#0c253b]">{project.location}</span>
                                </div>
                                <div className="flex justify-between py-1 border-b border-[#f1ede3]">
                                    <span className="text-[#5c6773]">Tahun Eksekusi:</span>
                                    <span className="font-semibold text-right text-[#0c253b]">{project.year}</span>
                                </div>
                                {project.client && (
                                    <div className="flex justify-between py-1 border-b border-[#f1ede3]">
                                        <span className="text-[#5c6773]">Klien / Pengguna Jasa:</span>
                                        <span className="font-semibold text-right text-[#0c253b]">{project.client}</span>
                                    </div>
                                )}
                                <div className="flex justify-between py-1 border-b border-[#f1ede3]">
                                    <span className="text-[#5c6773]">Standar Mutu:</span>
                                    <span className="font-semibold text-right text-[#97ad82]">SNI / K3 Certified</span>
                                </div>
                            </div>

                            <div className="pt-2">
                                <a
                                    href={`https://wa.me/6281231716286?text=Halo%20Tim%20Teknis%20Karyatim,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20${encodeURIComponent(project.title)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0c253b] hover:bg-[#163e61] text-[#fffdf8] font-bold text-xs rounded transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-[#97ad82]" />
                                    <span>Konsultasikan Proyek Serupa</span>
                                </a>
                            </div>
                        </div>

                        {/* Karyatim Guarantee Box */}
                        <div className="bg-[#f7f5ef] border border-[#e5e0d3] rounded-lg p-5 space-y-3">
                            <div className="flex items-center gap-2 text-[#0c253b] font-bold text-xs">
                                <ShieldCheck className="w-4 h-4 text-[#97ad82]" />
                                <span>Jaminan Mutu & Retensi Karyatim</span>
                            </div>
                            <p className="text-xs text-[#5c6773] leading-relaxed">
                                Setiap pekerjaan konstruksi dan perbaikan dilindungi oleh masa retensi pemeliharaan serta dukungan teknis pasca-serah terima.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <div className="mt-20 pt-12 border-t border-[#e5e0d3]">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-[#0c253b]">
                                Proyek Terkait Lainnya
                            </h2>
                            <Link href="/proyek" className="text-xs font-semibold text-[#0c253b] hover:text-[#97ad82]">
                                Lihat Semua
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
