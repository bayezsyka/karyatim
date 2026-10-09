import React from 'react';
import { useForm } from '@inertiajs/react';
import { Check, Mail, Phone, Send } from 'lucide-react';
import AppLayout from '../../Layouts/AppLayout';

export default function Index() {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({ name: '', company: '', phone: '', email: '', service_type: 'Konstruksi Bangunan & Sipil', project_location: '', estimated_volume: '', budget_range: '', description: '' });
    const serviceTypes = ['Konstruksi Bangunan & Sipil', 'Struktur Baja', 'Rigid Pavement & Beton', 'Pengaspalan', 'ACP & Fasad', 'Epoxy', 'Waterproofing', 'Interior & Partisi', 'Pengecatan', 'Kanopi & Railing', 'Branding & Signage', 'Elektrikal, Jaringan & CCTV', 'Pekerjaan Lainnya'];
    const submit = (event) => { event.preventDefault(); post('/inquiry', { onSuccess: () => reset() }); };
    const sendWhatsApp = () => {
        const message = `Halo Karyatim, saya ingin berkonsultasi.\n\nNama: ${data.name || '-'}\nPerusahaan: ${data.company || '-'}\nNomor kontak: ${data.phone || '-'}\nJenis pekerjaan: ${data.service_type}\nLokasi: ${data.project_location || '-'}\nVolume: ${data.estimated_volume || '-'}\nKeterangan: ${data.description || '-'}`;
        window.open(`https://wa.me/6281284900094?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    };
    const FieldError = ({ name }) => errors[name] ? <p className="mt-1 text-xs text-red-700">{errors[name]}</p> : null;
    return <AppLayout title="Kontak dan Konsultasi Proyek">
        <header className="kt-page-head"><div className="kt-shell kt-page-head-inner"><p className="mb-5 text-sm text-white/65">Konsultasi proyek</p><h1 className="kt-page-title">Ceritakan kebutuhan pekerjaan Anda.</h1></div></header>
        <div className="kt-section"><div className="kt-shell grid gap-14 lg:grid-cols-12">
            <aside className="lg:col-span-4"><h2 className="text-3xl font-semibold tracking-[-0.035em] text-brand-ink">Hubungi Karyatim</h2><div className="mt-8 border-t border-line">
                <a href="tel:+6281231716286" className="flex min-h-16 items-center gap-3 border-b border-line text-sm font-semibold text-brand-ink"><Phone className="h-4 w-4 text-brand" /> 0812 3171 6286</a>
                <a href="tel:+6281284900094" className="flex min-h-16 items-center gap-3 border-b border-line text-sm font-semibold text-brand-ink"><Phone className="h-4 w-4 text-brand" /> 0812 8490 0094</a>
                <a href="mailto:infokaryatimsurabaya@gmail.com" className="flex min-h-16 items-center gap-3 break-all border-b border-line text-sm font-semibold text-brand-ink"><Mail className="h-4 w-4 shrink-0 text-brand" /> infokaryatimsurabaya@gmail.com</a>
            </div><p className="mt-6 text-sm leading-relaxed text-muted">Basis operasional di Surabaya, Jawa Timur.</p></aside>
            <div className="border border-line bg-white p-6 sm:p-9 lg:col-span-8">
                <h2 className="mb-8 text-2xl font-semibold tracking-[-0.03em] text-brand-ink">Informasi awal proyek</h2>
                {recentlySuccessful && <div className="mb-7 flex items-center gap-3 border border-brand bg-[#eaf4f9] p-4 text-sm text-brand-ink"><Check className="h-5 w-5 text-brand" /> Permintaan konsultasi berhasil dikirim.</div>}
                <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
                    <div><label className="kt-label" htmlFor="name">Nama lengkap *</label><input id="name" className="kt-field" required value={data.name} onChange={(e) => setData('name', e.target.value)} /><FieldError name="name" /></div>
                    <div><label className="kt-label" htmlFor="company">Perusahaan / instansi</label><input id="company" className="kt-field" value={data.company} onChange={(e) => setData('company', e.target.value)} /></div>
                    <div><label className="kt-label" htmlFor="phone">Nomor WhatsApp / telepon *</label><input id="phone" type="tel" className="kt-field" required value={data.phone} onChange={(e) => setData('phone', e.target.value)} /><FieldError name="phone" /></div>
                    <div><label className="kt-label" htmlFor="email">Email</label><input id="email" type="email" className="kt-field" value={data.email} onChange={(e) => setData('email', e.target.value)} /><FieldError name="email" /></div>
                    <div className="sm:col-span-2"><label className="kt-label" htmlFor="service_type">Jenis pekerjaan *</label><select id="service_type" className="kt-field" value={data.service_type} onChange={(e) => setData('service_type', e.target.value)}>{serviceTypes.map((item) => <option key={item}>{item}</option>)}</select><FieldError name="service_type" /></div>
                    <div><label className="kt-label" htmlFor="project_location">Lokasi proyek</label><input id="project_location" className="kt-field" value={data.project_location} onChange={(e) => setData('project_location', e.target.value)} /></div>
                    <div><label className="kt-label" htmlFor="estimated_volume">Estimasi luas / volume</label><input id="estimated_volume" className="kt-field" value={data.estimated_volume} onChange={(e) => setData('estimated_volume', e.target.value)} /></div>
                    <div className="sm:col-span-2"><label className="kt-label" htmlFor="description">Keterangan pekerjaan</label><textarea id="description" rows="5" className="kt-field resize-y" value={data.description} onChange={(e) => setData('description', e.target.value)} /></div>
                    <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row"><button type="submit" disabled={processing} className="kt-button disabled:opacity-60"><Send className="h-4 w-4" /> {processing ? 'Mengirim...' : 'Kirim permintaan'}</button><button type="button" onClick={sendWhatsApp} className="kt-button kt-button-ghost"><Phone className="h-4 w-4" /> Kirim melalui WhatsApp</button></div>
                </form>
            </div>
        </div></div>
    </AppLayout>;
}
