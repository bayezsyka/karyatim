import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AppLayout from '../../Layouts/AppLayout';
import EstimationCalculator from '../../Components/EstimationCalculator';
import { 
    Phone, 
    Mail, 
    MapPin, 
    Clock, 
    Send, 
    CheckCircle2, 
    MessageSquare, 
    ShieldCheck, 
    ArrowUpRight 
} from 'lucide-react';

export default function Index({ company }) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: '',
        company: '',
        phone: '',
        email: '',
        service_type: 'Konstruksi Bangunan & Sipil',
        project_location: '',
        estimated_volume: '',
        budget_range: '',
        description: '',
    });

    const [submittedViaWa, setSubmittedViaWa] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/inquiry', {
            onSuccess: () => reset(),
        });
    };

    const handleSendDirectWA = () => {
        const text = `Halo Tim Teknis PT. Karyatim Mandiri Engineering,%0A%0ASaya ingin konsultasi rencana proyek:%0A• Nama: ${data.name || '-'}${data.company ? ` (${data.company})` : ''}%0A• No. Kontak: ${data.phone || '-'}%0A• Jenis Pekerjaan: ${data.service_type}%0A• Lokasi Proyek: ${data.project_location || '-'}${data.estimated_volume ? `%0A• Estimasi Volume: ${data.estimated_volume}` : ''}${data.budget_range ? `%0A• Estimasi Anggaran: ${data.budget_range}` : ''}${data.description ? `%0A• Keterangan Tambahan: ${data.description}` : ''}%0A%0AMohon konfirmasi jadwal survei lapangan dan penawaran teknisnya. Terima kasih.`;
        window.open(`https://wa.me/6281231716286?text=${text}`, '_blank');
        setSubmittedViaWa(true);
    };

    const serviceTypes = [
        'Konstruksi Bangunan & Sipil',
        'Konstruksi Struktur Baja Berat (WF/H-Beam)',
        'Rigid Pavement & Pengecoran Lantai Beton',
        'Pengaspalan Hotmix Jalan & Area Parkir',
        'Aluminium Composite Panel (ACP) & Facade Gedung',
        'Lantai Epoxy Industri & Coating Heavy Duty',
        'Waterproofing Membran Bakar & Proteksi Dak',
        'Interior Office Fit-Out & Partisi Akustik',
        'Pengecatan Gedung Eksterior & Industri',
        'Kanopi Baja, Railing & Stainless Steel',
        'Commercial Storefront & Retail Facade',
        'Instalasi Elektrikal MEP, CCTV & Keamanan',
        'Pekerjaan Konstruksi / Renovasi Lainnya',
    ];

    return (
        <AppLayout title="Kontak & Konsultasi Estimasi Biaya Proyek">
            {/* Header */}
            <div className="bg-[#0c253b] text-[#fffdf8] py-14 border-b border-[#163e61]">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold text-[#97ad82] uppercase tracking-wider block mb-2">
                            Hubungi Tim Engineering
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black text-[#fffdf8] tracking-tight mb-3">
                            Konsultasi Teknis & Jadwal Survei Proyek
                        </h1>
                        <p className="text-sm sm:text-base text-[#e5e0d3] leading-relaxed">
                            Diskusikan spesifikasi teknis, anggaran biaya, dan rencana pelaksanaan proyek konstruksi Anda langsung bersama tim insinyur dan estimator Karyatim.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-[#0c253b] mb-2">
                                Informasi Kantor & Saluran Komunikasi
                            </h2>
                            <p className="text-xs text-[#5c6773]">
                                Melayani konsultasi daring dan survei lapangan langsung di wilayah Surabaya, Jawa Timur, dan seluruh Indonesia.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-3">
                            <div className="bg-[#ffffff] border border-[#e5e0d3] rounded-lg p-4 flex items-start gap-3.5">
                                <div className="w-10 h-10 bg-[#0c253b] text-[#97ad82] rounded flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="text-xs">
                                    <div className="font-bold text-[#0c253b]">Hotline Telepon & WhatsApp</div>
                                    <div className="text-[#5c6773] mt-1 space-y-0.5">
                                        <div><a href="tel:081231716286" className="font-semibold text-[#0c253b] hover:text-[#97ad82]">0812-3171-6286</a> (Konsultasi Teknis & Survei)</div>
                                        <div><a href="tel:085111249501" className="font-semibold text-[#0c253b] hover:text-[#97ad82]">0851-1124-9501</a> (Admin & Informasi Proyek)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#ffffff] border border-[#e5e0d3] rounded-lg p-4 flex items-start gap-3.5">
                                <div className="w-10 h-10 bg-[#0c253b] text-[#97ad82] rounded flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="text-xs">
                                    <div className="font-bold text-[#0c253b]">Email Korespondensi Resmi</div>
                                    <a href="mailto:infokaryatimsurabaya@gmail.com" className="text-[#5c6773] hover:text-[#0c253b] block mt-1">
                                        infokaryatimsurabaya@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="bg-[#ffffff] border border-[#e5e0d3] rounded-lg p-4 flex items-start gap-3.5">
                                <div className="w-10 h-10 bg-[#0c253b] text-[#97ad82] rounded flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="text-xs">
                                    <div className="font-bold text-[#0c253b]">Basis Kantor Operasional</div>
                                    <div className="text-[#5c6773] mt-1">
                                        Surabaya, Jawa Timur — Melayani Proyek Seluruh Indonesia
                                    </div>
                                    <a 
                                        href={company.maps_url} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="inline-flex items-center gap-1 text-[#97ad82] font-semibold mt-2 hover:underline"
                                    >
                                        <span>Buka di Google Maps & Ulasan</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-[#ffffff] border border-[#e5e0d3] rounded-lg p-4 flex items-start gap-3.5">
                                <div className="w-10 h-10 bg-[#0c253b] text-[#97ad82] rounded flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="text-xs">
                                    <div className="font-bold text-[#0c253b]">Jam Kerja & Operasional</div>
                                    <div className="text-[#5c6773] mt-1">
                                        Senin – Sabtu: 08:00 – 17:00 WIB
                                    </div>
                                    <div className="text-[11px] text-[#97ad82] mt-0.5">
                                        *Layanan pesan darurat aktif 24 jam via WhatsApp
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-[#f7f5ef] border border-[#e5e0d3] rounded-lg p-4 space-y-2">
                            <div className="text-xs font-bold text-[#0c253b]">
                                Kanal Media Sosial Resmi:
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <a 
                                    href="https://instagram.com/karyatimcontractor" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="px-3 py-1.5 bg-[#ffffff] border border-[#e5e0d3] rounded font-medium text-[#0c253b] hover:border-[#0c253b]"
                                >
                                    Instagram: @karyatimcontractor
                                </a>
                                <a 
                                    href="https://www.tiktok.com/@kontraktorsurabayaraya" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="px-3 py-1.5 bg-[#ffffff] border border-[#e5e0d3] rounded font-medium text-[#0c253b] hover:border-[#0c253b]"
                                >
                                    TikTok: @kontraktorsurabayaraya
                                </a>
                                <a 
                                    href="https://www.linkedin.com/company/karyatim" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="px-3 py-1.5 bg-[#ffffff] border border-[#e5e0d3] rounded font-medium text-[#0c253b] hover:border-[#0c253b]"
                                >
                                    LinkedIn: Karyatim
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form Consultation */}
                    <div className="lg:col-span-7 bg-[#ffffff] border border-[#0c253b] rounded-lg p-6 sm:p-8 space-y-6 shadow-sm">
                        <div>
                            <h2 className="text-xl font-bold text-[#0c253b] tracking-tight">
                                Formulir Permintaan Survei & Penawaran RAB
                            </h2>
                            <p className="text-xs text-[#5c6773] mt-1">
                                Lengkapi data proyek di bawah ini, atau gunakan tombol kirim langsung ke WhatsApp.
                            </p>
                        </div>

                        {recentlySuccessful && (
                            <div className="bg-[#f7f5ef] border border-[#97ad82] text-[#081a2a] p-4 rounded text-xs flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-[#97ad82] shrink-0" />
                                <div>
                                    <div className="font-bold">Permintaan Terkirim!</div>
                                    <div>Tim teknis Karyatim akan meninjau rincian proyek Anda dan segera menghubungi melalui kontak yang diberikan.</div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-[#0c253b] mb-1">
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Nama Anda"
                                        className="w-full bg-[#fffdf8] border border-[#e5e0d3] text-[#081a2a] text-xs rounded px-3 py-2.5 focus:border-[#0c253b] focus:outline-none"
                                    />
                                    {errors.name && <div className="text-red-600 text-[11px] mt-1">{errors.name}</div>}
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-[#0c253b] mb-1">
                                        Perusahaan / Instansi (Opsional)
                                    </label>
                                    <input
                                        type="text"
                                        value={data.company}
                                        onChange={(e) => setData('company', e.target.value)}
                                        placeholder="Nama PT / CV / Perorangan"
                                        className="w-full bg-[#fffdf8] border border-[#e5e0d3] text-[#081a2a] text-xs rounded px-3 py-2.5 focus:border-[#0c253b] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-[#0c253b] mb-1">
                                        Nomor WhatsApp / Telepon *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        placeholder="08xxxxxxxxxx"
                                        className="w-full bg-[#fffdf8] border border-[#e5e0d3] text-[#081a2a] text-xs rounded px-3 py-2.5 focus:border-[#0c253b] focus:outline-none"
                                    />
                                    {errors.phone && <div className="text-red-600 text-[11px] mt-1">{errors.phone}</div>}
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-[#0c253b] mb-1">
                                        Alamat Email (Opsional)
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="email@perusahaan.com"
                                        className="w-full bg-[#fffdf8] border border-[#e5e0d3] text-[#081a2a] text-xs rounded px-3 py-2.5 focus:border-[#0c253b] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#0c253b] mb-1">
                                    Jenis Spesialisasi Layanan *
                                </label>
                                <select
                                    value={data.service_type}
                                    onChange={(e) => setData('service_type', e.target.value)}
                                    className="w-full bg-[#fffdf8] border border-[#e5e0d3] text-[#081a2a] text-xs rounded px-3 py-2.5 focus:border-[#0c253b] focus:outline-none"
                                >
                                    {serviceTypes.map((type, idx) => (
                                        <option key={idx} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-[#0c253b] mb-1">
                                        Lokasi Pekerjaan Proyek
                                    </label>
                                    <input
                                        type="text"
                                        value={data.project_location}
                                        onChange={(e) => setData('project_location', e.target.value)}
                                        placeholder="Contoh: Surabaya, Gresik, Pasuruan"
                                        className="w-full bg-[#fffdf8] border border-[#e5e0d3] text-[#081a2a] text-xs rounded px-3 py-2.5 focus:border-[#0c253b] focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-[#0c253b] mb-1">
                                        Estimasi Luas / Volume (m²)
                                    </label>
                                    <input
                                        type="text"
                                        value={data.estimated_volume}
                                        onChange={(e) => setData('estimated_volume', e.target.value)}
                                        placeholder="Contoh: 500 m2"
                                        className="w-full bg-[#fffdf8] border border-[#e5e0d3] text-[#081a2a] text-xs rounded px-3 py-2.5 focus:border-[#0c253b] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#0c253b] mb-1">
                                    Deskripsi Tambahan & Catatan Teknis
                                </label>
                                <textarea
                                    rows="3"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Jelaskan kondisi bangunan saat ini, kebutuhan spesifikasi, target waktu mulai proyek, dsb."
                                    className="w-full bg-[#fffdf8] border border-[#e5e0d3] text-[#081a2a] text-xs rounded px-3 py-2.5 focus:border-[#0c253b] focus:outline-none"
                                />
                            </div>

                            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full sm:w-auto px-6 py-3 bg-[#0c253b] hover:bg-[#163e61] text-[#fffdf8] font-bold text-xs rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                    <span>{processing ? 'Mengirim Data...' : 'Kirim Formulir Permintaan'}</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={handleSendDirectWA}
                                    className="w-full sm:w-auto px-6 py-3 bg-[#97ad82] hover:bg-[#7a8f68] text-[#081a2a] font-bold text-xs rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <MessageSquare className="w-3.5 h-3.5 text-[#081a2a]" />
                                    <span>Kirim Format Rincian via WhatsApp</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Calculator Section */}
                <div className="pt-8 border-t border-[#e5e0d3]">
                    <EstimationCalculator />
                </div>
            </div>
        </AppLayout>
    );
}
