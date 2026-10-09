import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import ProjectCard from '../../Components/ProjectCard';

export default function Show({ service, relatedProjects = [] }) {
    const supportedDeliverables = service.deliverables?.filter((item) => !/(sertifik|jamin|garansi|SNI|HACCP|GMP|zero accident)/i.test(item)) || [];
    const useFallback = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = '/images/projects/hero-proyek-tower-crane-konstruksi-gedung.webp';
    };
    return <AppLayout title={`${service.title} — Karyatim`}>
        <header className="kt-page-head"><div className="kt-shell kt-page-head-inner"><Link href="/layanan" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"><ArrowLeft className="h-4 w-4" /> Kembali ke layanan</Link><p className="mb-4 text-sm text-[#75c9ee]">{service.category}</p><h1 className="kt-page-title">{service.title}</h1></div></header>
        <div>{service.image && <div className="h-[48vw] max-h-[660px] min-h-[320px]"><img src={service.image} alt={service.title} onError={useFallback} className="h-full w-full object-cover" /></div>}
            <section className="kt-section"><div className="kt-shell grid gap-14 lg:grid-cols-12"><div className="lg:col-span-7"><h2 className="mb-6 text-3xl font-semibold tracking-[-0.035em] text-brand-ink">Tentang pekerjaan ini</h2><p className="kt-body">Karyatim menerima konsultasi dan pelaksanaan pekerjaan {service.title.toLowerCase()} berdasarkan kebutuhan serta kondisi proyek.</p></div><aside className="lg:col-span-4 lg:col-start-9"><h2 className="mb-5 text-sm font-semibold text-brand-ink">Cakupan</h2><ol className="border-t border-line">{supportedDeliverables.map((item, index) => <li key={index} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-4 text-sm"><span className="kt-index">{String(index + 1).padStart(2, '0')}</span><span>{item}</span></li>)}</ol><a href={`https://wa.me/6281284900094?text=Halo%20Karyatim,%20saya%20ingin%20berkonsultasi%20tentang%20${encodeURIComponent(service.title)}.`} target="_blank" rel="noreferrer" className="kt-button mt-7"><Phone className="h-4 w-4" /> Konsultasikan layanan</a></aside></div></section>
            {relatedProjects.length > 0 && <section className="kt-section border-t border-line bg-white"><div className="kt-shell"><div className="mb-10 flex items-end justify-between"><h2 className="kt-section-title">Pekerjaan terkait.</h2><Link href="/proyek" className="kt-link">Semua proyek <ArrowRight className="h-4 w-4" /></Link></div><div className="kt-project-grid">{relatedProjects.map((item) => <ProjectCard key={item.id} project={item} />)}</div></div></section>}
        </div>
    </AppLayout>;
}
