import React from 'react';
import { router } from '@inertiajs/react';
import { Download } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import ProjectCard from '../../Components/ProjectCard';

export default function Index({ projects = [], categories = [], selectedCategory = 'all' }) {
    const choose = (category) => router.get('/proyek', category === 'all' ? {} : { category }, { preserveState: true, preserveScroll: true });
    return <AppLayout title="Portofolio Proyek">
        <header className="kt-page-head"><div className="kt-shell kt-page-head-inner"><p className="mb-5 text-sm text-white/65">Dokumentasi pekerjaan</p><h1 className="kt-page-title">Proyek yang telah dikerjakan Karyatim.</h1></div></header>
        <div className="kt-section"><div className="kt-shell">
            <div className="mb-10 flex gap-2 overflow-x-auto border-b border-line pb-5" aria-label="Filter kategori proyek">
                <button onClick={() => choose('all')} className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${selectedCategory === 'all' ? 'border-brand bg-brand text-white' : 'border-line bg-white text-brand-ink'}`}>Semua</button>
                {categories.map((category) => <button key={category} onClick={() => choose(category)} className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${selectedCategory === category ? 'border-brand bg-brand text-white' : 'border-line bg-white text-brand-ink'}`}>{category}</button>)}
            </div>
            {projects.length ? <div className="kt-project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div> : <div className="border-y border-line py-20 text-center"><p className="font-semibold text-brand-ink">Belum ada proyek pada kategori ini.</p></div>}
            <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center"><h2 className="max-w-xl text-2xl font-semibold tracking-[-0.03em] text-brand-ink">Versi lengkap portofolio tersedia dalam dokumen perusahaan.</h2><a href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf" download className="kt-button"><Download className="h-4 w-4" /> Unduh profil PDF</a></div>
        </div></div>
    </AppLayout>;
}
