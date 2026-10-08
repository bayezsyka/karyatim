import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, MapPin, Calendar, CheckCircle2, X } from 'lucide-react';

export default function ProjectCard({ project }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="group bg-[#ffffff] border border-[#e5e0d3] hover:border-[#0c253b] rounded-lg overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-xs">
                {/* Image & Category */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#f1ede3]">
                    <img
                        src={project.primary_image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0c253b]/90 text-[#fffdf8] text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-xs">
                        {project.category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                        <div className="flex items-center gap-3 text-xs text-[#5c6773] mb-1.5">
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
                        <h3 className="font-bold text-base text-[#0c253b] group-hover:text-[#163e61] transition-colors leading-snug">
                            {project.title}
                        </h3>
                        <p className="text-xs text-[#5c6773] mt-2 line-clamp-2 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Scope tags */}
                    {project.scope_of_work && project.scope_of_work.length > 0 && (
                        <div className="pt-2 border-t border-[#f1ede3] space-y-1">
                            <div className="text-[11px] font-semibold text-[#0c253b]">Ruang Lingkup:</div>
                            <ul className="space-y-0.5 text-[11px] text-[#5c6773]">
                                {project.scope_of_work.slice(0, 2).map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                                        <CheckCircle2 className="w-3 h-3 text-[#97ad82] shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Action */}
                    <div className="pt-3 border-t border-[#f1ede3] flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="text-xs font-semibold text-[#0c253b] hover:text-[#97ad82] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                            <span>Lihat Detail Spesifikasi</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                        <Link
                            href={`/proyek/${project.slug}`}
                            className="text-xs text-[#5c6773] hover:text-[#0c253b] underline underline-offset-2"
                        >
                            Halaman Penuh
                        </Link>
                    </div>
                </div>
            </div>

            {/* Quick View Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-[#081a2a]/70 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-[#fffdf8] border border-[#0c253b] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
                        <div className="flex items-start justify-between gap-4 border-b border-[#e5e0d3] pb-4">
                            <div>
                                <span className="text-xs font-semibold text-[#97ad82] block mb-1">
                                    {project.category}
                                </span>
                                <h3 className="text-lg sm:text-xl font-bold text-[#0c253b]">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-4 text-xs text-[#5c6773] mt-1">
                                    <span>Lokasi: {project.location}</span>
                                    <span>Tahun: {project.year}</span>
                                    {project.client && <span>Klien: {project.client}</span>}
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="p-1 text-[#0c253b] hover:bg-[#f1ede3] rounded"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Image Showcase */}
                        <div className="aspect-[16/9] rounded overflow-hidden bg-[#f1ede3]">
                            <img
                                src={project.primary_image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Gallery Thumbnails if available */}
                        {project.gallery_images && project.gallery_images.length > 0 && (
                            <div className="grid grid-cols-3 gap-2">
                                {project.gallery_images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Dokumentasi ${idx + 1}`}
                                        className="h-20 w-full object-cover rounded border border-[#e5e0d3]"
                                    />
                                ))}
                            </div>
                        )}

                        {/* Description */}
                        <div>
                            <h4 className="text-xs font-bold text-[#0c253b] uppercase tracking-wide mb-1.5">
                                Deskripsi Pekerjaan
                            </h4>
                            <p className="text-xs sm:text-sm text-[#5c6773] leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Scope */}
                        {project.scope_of_work && project.scope_of_work.length > 0 && (
                            <div>
                                <h4 className="text-xs font-bold text-[#0c253b] uppercase tracking-wide mb-2">
                                    Ruang Lingkup & Metode Kerja
                                </h4>
                                <ul className="space-y-1.5 text-xs text-[#081a2a]">
                                    {project.scope_of_work.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#97ad82] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Modal Footer */}
                        <div className="pt-4 border-t border-[#e5e0d3] flex flex-wrap items-center justify-between gap-3">
                            <a
                                href={`https://wa.me/6281231716286?text=Halo%20Karyatim,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(project.title)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#fffdf8] bg-[#0c253b] hover:bg-[#163e61] rounded transition-colors"
                            >
                                <span>Konsultasikan Proyek Serupa</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#97ad82]" />
                            </a>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-3.5 py-2 text-xs text-[#5c6773] hover:text-[#0c253b]"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
