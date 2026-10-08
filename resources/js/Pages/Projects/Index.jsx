import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '../../Layouts/AppLayout';
import ProjectCard from '../../Components/ProjectCard';
import { Filter, ArrowDownToLine, Phone } from 'lucide-react';

export default function Index({ projects, categories, selectedCategory }) {
    const [activeTab, setActiveTab] = useState(selectedCategory || 'all');

    const handleCategoryChange = (cat) => {
        setActiveTab(cat);
        router.get('/proyek', cat === 'all' ? {} : { category: cat }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <AppLayout title="Portofolio Proyek Konstruksi & Rekayasa Sipil">
            {/* Header */}
            <div className="bg-[#0c253b] text-[#fffdf8] py-14 border-b border-[#163e61]">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold text-[#97ad82] uppercase tracking-wider block mb-2">
                            Rekam Jejak Pekerjaan
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black text-[#fffdf8] tracking-tight mb-3">
                            Portofolio Proyek PT. Karyatim Mandiri Engineering
                        </h1>
                        <p className="text-sm sm:text-base text-[#e5e0d3] leading-relaxed">
                            Dokumentasi pelaksanaan konstruksi sipil, pabrik, struktur baja berat, rigid pavement, pengaspalan, fasad ACP, dan interior di berbagai wilayah Indonesia.
                        </p>
                    </div>
                </div>
            </div>

            {/* Filter Bar & Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
                {/* Category Filters */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#e5e0d3]">
                    <span className="text-xs font-bold text-[#0c253b] flex items-center gap-1.5 mr-2 shrink-0">
                        <Filter className="w-3.5 h-3.5 text-[#97ad82]" />
                        <span>Kategori:</span>
                    </span>
                    
                    <button
                        type="button"
                        onClick={() => handleCategoryChange('all')}
                        className={`px-3.5 py-1.5 text-xs font-semibold rounded shrink-0 transition-colors ${
                            activeTab === 'all'
                                ? 'bg-[#0c253b] text-[#fffdf8]'
                                : 'bg-[#f7f5ef] text-[#5c6773] hover:text-[#0c253b] hover:bg-[#e5e0d3]'
                        }`}
                    >
                        Semua Kategori ({projects.length})
                    </button>

                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-3.5 py-1.5 text-xs font-semibold rounded shrink-0 transition-colors ${
                                activeTab === cat
                                    ? 'bg-[#0c253b] text-[#fffdf8]'
                                    : 'bg-[#f7f5ef] text-[#5c6773] hover:text-[#0c253b] hover:bg-[#e5e0d3]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-[#f7f5ef] border border-[#e5e0d3] rounded-lg p-12 text-center">
                        <p className="text-sm font-semibold text-[#0c253b]">
                            Tidak ada proyek pada kategori ini saat ini.
                        </p>
                        <button
                            type="button"
                            onClick={() => handleCategoryChange('all')}
                            className="mt-3 text-xs text-[#97ad82] underline font-bold"
                        >
                            Tampilkan Semua Proyek
                        </button>
                    </div>
                )}

                {/* PDF Download Callout */}
                <div className="mt-16 bg-[#f7f5ef] border border-[#e5e0d3] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0c253b] mb-1">
                            Membutuhkan Dokumen Portofolio Lengkap dalam Format PDF?
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5c6773]">
                            Unduh dokumen portofolio resmi 24 halaman yang mencakup legalitas, daftar alat berat, dan lampiran teknis proyek.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                        <a
                            href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf"
                            download
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#fffdf8] bg-[#0c253b] hover:bg-[#163e61] rounded transition-colors"
                        >
                            <ArrowDownToLine className="w-4 h-4 text-[#97ad82]" />
                            <span>Unduh PDF Portofolio</span>
                        </a>
                        <a
                            href="https://wa.me/6281231716286?text=Halo%20Karyatim,%20saya%20ingin%20konsultasi%20portofolio%20dan%20proyek."
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#0c253b] bg-[#ffffff] border border-[#0c253b] hover:bg-[#f1ede3] rounded transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Kontak WA</span>
                        </a>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
