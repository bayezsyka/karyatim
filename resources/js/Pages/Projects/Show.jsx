import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, MapPin, Phone } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import ProjectCard from '../../Components/ProjectCard';

export default function Show({ project, relatedProjects = [] }) {
    const supportedScope = project.scope_of_work?.filter((item) => !/(sertifik|jamin|garansi|SNI|HACCP|GMP|zero accident)/i.test(item)) || [];
    const useFallback = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = '/images/projects/hero-proyek-tower-crane-konstruksi-gedung.webp';
    };
    return <AppLayout title={`${project.title} — Karyatim`}>
        <header className="bg-[#073752] text-white"><div className="kt-shell py-12 sm:py-16"><Link href="/proyek" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"><ArrowLeft className="h-4 w-4" /> Kembali ke proyek</Link><p className="mb-4 text-sm text-[#75c9ee]">{project.category}</p><h1 className="kt-page-title">{project.title}</h1><div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm text-white/65">{project.location && <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{project.location}</span>}{project.year && <span>{project.year}</span>}{project.client && <span>{project.client}</span>}</div></div></header>
        <div>
            <div className="h-[52vw] max-h-[720px] min-h-[340px] bg-[#dce3e5]"><img src={project.primary_image} alt={project.title} onError={useFallback} className="h-full w-full object-cover" /></div>
            <section className="kt-section"><div className="kt-shell grid gap-14 lg:grid-cols-12">
                <div className="lg:col-span-7"><h2 className="mb-6 text-3xl font-semibold tracking-[-0.035em] text-brand-ink">Catatan pekerjaan</h2><p className="kt-body whitespace-pre-line">{project.description}</p></div>
                <aside className="lg:col-span-4 lg:col-start-9"><h2 className="mb-5 text-sm font-semibold text-brand-ink">Ruang lingkup</h2><ol className="border-t border-line">{supportedScope.map((item, index) => <li key={index} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-4 text-sm"><span className="kt-index">{String(index + 1).padStart(2, '0')}</span><span>{item}</span></li>)}</ol><a href={`https://wa.me/6281284900094?text=Halo%20Karyatim,%20saya%20ingin%20mendiskusikan%20pekerjaan%20serupa%20dengan%20${encodeURIComponent(project.title)}.`} target="_blank" rel="noreferrer" className="kt-button mt-7"><Phone className="h-4 w-4" /> Diskusikan pekerjaan serupa</a></aside>
            </div></section>
            {project.gallery_images?.length > 0 && <section className="kt-shell pb-20"><h2 className="mb-8 text-3xl font-semibold tracking-[-0.035em] text-brand-ink">Dokumentasi lapangan</h2><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{project.gallery_images.map((image, index) => <img key={image} src={image} alt={`${project.title}, dokumentasi ${index + 1}`} onError={useFallback} className="aspect-[4/3] w-full object-cover" loading="lazy" />)}</div></section>}
            {relatedProjects.length > 0 && <section className="kt-section border-t border-line bg-white"><div className="kt-shell"><div className="mb-10 flex items-end justify-between"><h2 className="kt-section-title">Pekerjaan terkait.</h2><Link href="/proyek" className="kt-link">Semua proyek <ArrowRight className="h-4 w-4" /></Link></div><div className="kt-project-grid">{relatedProjects.map((item) => <ProjectCard key={item.id} project={item} />)}</div></div></section>}
        </div>
    </AppLayout>;
}
