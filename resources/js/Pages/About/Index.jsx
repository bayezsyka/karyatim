import React from 'react';
import { Download, Phone } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';
import ClientLogoGrid from '../../Components/ClientLogoGrid';

export default function Index({ clients = [] }) {
    const principles = ['Kebutuhan pelanggan menjadi titik awal perencanaan.', 'Mutu, waktu, biaya, dan ruang lingkup dibaca sebagai satu kesatuan.', 'Koordinasi lapangan dijaga sepanjang pelaksanaan pekerjaan.', 'Hasil pekerjaan dievaluasi sebelum serah terima.'];
    return <AppLayout title="Tentang PT. Karyatim Mandiri Engineering">
        <header className="kt-page-head"><div className="kt-shell kt-page-head-inner"><p className="mb-5 text-sm text-white/65">Profil perusahaan · Surabaya · Sejak 2014</p><h1 className="kt-page-title">Mitra pelaksana untuk kebutuhan konstruksi yang beragam.</h1></div></header>
        <div>
            <section className="kt-section"><div className="kt-shell grid gap-14 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-6"><h2 className="kt-section-title">Berorientasi pada kebutuhan dan kepuasan pelanggan.</h2><div className="mt-8 space-y-5 kt-body"><p>PT. Karyatim Mandiri Engineering adalah perusahaan general contractor yang berbasis di Surabaya. Sejak 2014, Karyatim menangani pekerjaan bangunan, sipil, struktur baja, fasad, interior, perkerasan, dan kebutuhan pendukung lainnya.</p><p>Setiap pekerjaan diarahkan agar selaras dengan mutu, waktu, biaya, serta ruang lingkup yang telah dibicarakan bersama pengguna jasa.</p></div></div>
                <figure className="lg:col-span-6"><img src="/images/projects/tim-teknis-karyatim-rompi-lapangan.webp" alt="Tim teknis Karyatim di lapangan" className="aspect-[4/3] w-full object-cover" /><figcaption className="border-x border-b border-line bg-white px-4 py-3 text-xs text-muted">Tim teknis Karyatim · Dokumentasi lapangan</figcaption></figure>
            </div></section>
            <section className="bg-white"><div className="kt-shell grid lg:grid-cols-2"><div className="border-x border-line p-7 sm:p-10"><h2 className="text-3xl font-semibold tracking-[-0.035em] text-brand-ink">Cara kami bekerja</h2></div><ol className="border-r border-line">{principles.map((item, index) => <li key={item} className="grid min-h-24 grid-cols-[3.5rem_1fr] items-center border-t border-line px-5 last:border-b"><span className="kt-index">{String(index + 1).padStart(2, '0')}</span><span className="font-medium text-brand-ink">{item}</span></li>)}</ol></div></section>
            <section className="kt-section"><div className="kt-shell"><ClientLogoGrid clients={clients} /></div></section>
            <section className="bg-brand text-white"><div className="kt-shell flex flex-col items-start justify-between gap-7 py-16 sm:flex-row sm:items-center"><h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Pelajari rekam pekerjaan atau mulai percakapan proyek.</h2><div className="flex flex-wrap gap-3"><a href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf" download className="kt-button kt-button-light"><Download className="h-4 w-4" /> Unduh profil</a><a href="https://wa.me/6281284900094" target="_blank" rel="noreferrer" className="kt-button border-white/50 bg-transparent hover:bg-white/10"><Phone className="h-4 w-4" /> WhatsApp</a></div></div></section>
        </div>
    </AppLayout>;
}
