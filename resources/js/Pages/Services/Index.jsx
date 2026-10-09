import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, Phone } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';

export default function Index({ services = [] }) {
    return <AppLayout title="Layanan Konstruksi">
        <header className="kt-page-head"><div className="kt-shell kt-page-head-inner"><p className="mb-5 text-sm text-white/65">Cakupan pekerjaan</p><h1 className="kt-page-title">Layanan konstruksi yang disiapkan untuk kondisi nyata.</h1></div></header>
        <div className="kt-section"><div className="kt-shell">
            <div className="border-t border-line">{services.map((service, index) => <Link key={service.id} href={`/layanan/${service.slug}`} className="group grid gap-5 border-b border-line py-7 sm:grid-cols-[4rem_1fr_1.2fr_auto] sm:items-center">
                <span className="kt-index">{String(index + 1).padStart(2, '0')}</span><h2 className="text-xl font-semibold leading-tight text-brand-ink">{service.title}</h2><p className="text-sm leading-relaxed text-muted">{service.category}</p><ArrowRight className="h-5 w-5 text-brand transition-transform group-hover:translate-x-1" />
            </Link>)}</div>
            <div className="mt-16 grid gap-8 bg-brand p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center"><h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em]">Kebutuhan Anda belum tercantum? Bicarakan lingkupnya langsung.</h2><a href="https://wa.me/6281284900094?text=Halo%20Karyatim,%20saya%20ingin%20mendiskusikan%20lingkup%20pekerjaan." target="_blank" rel="noreferrer" className="kt-button kt-button-light"><Phone className="h-4 w-4" /> Hubungi Karyatim</a></div>
        </div></div>
    </AppLayout>;
}
