import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageSquare, CheckCircle2, Shield } from 'lucide-react';

const serviceOptions = [
    {
        id: 'baja',
        name: 'Konstruksi Struktur Baja Berat (WF/H-Beam)',
        unit: 'm² Luas Bangunan',
        baseMin: 950000,
        baseMax: 1650000,
        scope: 'Kolom H-Beam, Kuda-kuda WF, Gording, Sagrod & Atap Zincalume',
    },
    {
        id: 'beton',
        name: 'Rigid Pavement & Pengecoran Lantai Beton',
        unit: 'm² Luas Area',
        baseMin: 280000,
        baseMax: 480000,
        scope: 'Beton K-300/K-350 tebal 15-20cm, Wiremesh M8/M10 & Trowel Finish',
    },
    {
        id: 'aspal',
        name: 'Pengaspalan Hotmix AC-WC / AC-BC',
        unit: 'm² Luas Jalan/Parkir',
        baseMin: 95000,
        baseMax: 165000,
        scope: 'Pembersihan dasar, Tack Coat, Hotmix tebal 3-4cm & Tandem Roller',
    },
    {
        id: 'acp',
        name: 'Pemasangan Facade ACP Seven / Alucobond',
        unit: 'm² Luas Fasad',
        baseMin: 650000,
        baseMax: 950000,
        scope: 'Rangka Hollow Galvanis, Lembar ACP PVDF 4mm & Sealant Weatherproof',
    },
    {
        id: 'epoxy',
        name: 'Lantai Epoxy Flooring Self-Leveling',
        unit: 'm² Luas Lantai',
        baseMin: 120000,
        baseMax: 290000,
        scope: 'Grinding, Primer, Body Coat & Top Coat Polyurethane 1000-2000 mikron',
    },
    {
        id: 'waterproofing',
        name: 'Waterproofing Membran Bakar Dak Rooftop',
        unit: 'm² Luas Dak',
        baseMin: 145000,
        baseMax: 220000,
        scope: 'Bitumen Primer, Membran Torch-On 3mm Granule & Uji Rendam 48 Jam',
    },
    {
        id: 'interior',
        name: 'Interior Office Fit-Out & Partisi Gypsum',
        unit: 'm² Luas Ruangan',
        baseMin: 450000,
        baseMax: 1250000,
        scope: 'Partisi Kedap Suara, Plafon Akustik Drop Ceiling & Lantai Vinyl SPC',
    },
];

export default function EstimationCalculator() {
    const [selectedServiceId, setSelectedServiceId] = useState('baja');
    const [volume, setVolume] = useState(300);
    const [location, setLocation] = useState('Surabaya & Sekitarnya');

    const selectedService = serviceOptions.find((s) => s.id === selectedServiceId) || serviceOptions[0];

    const estMin = Math.round(selectedService.baseMin * volume);
    const estMax = Math.round(selectedService.baseMax * volume);

    const formatRupiah = (val) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(val);
    };

    const waText = `Halo Tim Estimator PT. Karyatim Mandiri Engineering,%0A%0ASaya ingin konsultasi estimasi anggaran untuk kebutuhan proyek:%0A• Jenis Pekerjaan: ${selectedService.name}%0A• Estimasi Volume/Luas: ${volume} ${selectedService.unit}%0A• Lokasi Proyek: ${location}%0A• Estimasi Range Budget Awal: ${formatRupiah(estMin)} - ${formatRupiah(estMax)}%0A%0AMohon info jadwal survei lokasi dan penawaran RAB resminya. Terima kasih.`;

    const waLink = `https://wa.me/6281231716286?text=${waText}`;

    return (
        <div className="bg-[#fffdf8] border border-[#0c253b] rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e5e0d3]">
                <div className="w-10 h-10 bg-[#0c253b] text-[#97ad82] rounded flex items-center justify-center font-bold">
                    <Calculator className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#0c253b] tracking-tight">
                        Kalkulator Estimasi Anggaran Biaya Proyek (RAB Awal)
                    </h3>
                    <p className="text-xs text-[#5c6773]">
                        Simulasikan perkiraan anggaran proyek konstruksi Anda secara langsung dan akurat
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Form Input */}
                <div className="lg:col-span-7 space-y-5">
                    <div>
                        <label className="block text-xs font-bold text-[#0c253b] mb-2 uppercase tracking-wide">
                            Pilih Spesialisasi Pekerjaan
                        </label>
                        <select
                            value={selectedServiceId}
                            onChange={(e) => setSelectedServiceId(e.target.value)}
                            className="w-full bg-[#fffdf8] border border-[#0c253b] text-[#081a2a] text-sm rounded px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#97ad82]"
                        >
                            {serviceOptions.map((opt) => (
                                <option key={opt.id} value={opt.id}>
                                    {opt.name}
                                </option>
                            ))}
                        </select>
                        <p className="text-xs text-[#5c6773] mt-1.5 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#97ad82] shrink-0" />
                            <span>Spesifikasi standar: {selectedService.scope}</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-[#0c253b] mb-2 uppercase tracking-wide">
                                Estimasi Volume ({selectedService.unit})
                            </label>
                            <input
                                type="number"
                                min="10"
                                max="100000"
                                value={volume}
                                onChange={(e) => setVolume(Math.max(1, Number(e.target.value)))}
                                className="w-full bg-[#fffdf8] border border-[#0c253b] text-[#081a2a] text-sm rounded px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#97ad82]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[#0c253b] mb-2 uppercase tracking-wide">
                                Wilayah / Lokasi Proyek
                            </label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Contoh: Surabaya, Gresik, Sidoarjo, dsb"
                                className="w-full bg-[#fffdf8] border border-[#0c253b] text-[#081a2a] text-sm rounded px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#97ad82]"
                            />
                        </div>
                    </div>

                    <div className="bg-[#f7f5ef] p-4 rounded border border-[#e5e0d3] text-xs text-[#5c6773] space-y-1.5">
                        <div className="flex items-center gap-2 text-[#0c253b] font-semibold">
                            <Shield className="w-4 h-4 text-[#97ad82]" />
                            <span>Jaminan Transparansi & Kepatuhan Anggaran Karyatim</span>
                        </div>
                        <p>
                            Nilai estimasi mencakup material standar SNI, tenaga kerja ahli bersertifikat, alat berat, dan pengawasan K3. Anggaran final akan disesuaikan setelah survei lapangan gratis.
                        </p>
                    </div>
                </div>

                {/* Calculation Output */}
                <div className="lg:col-span-5 bg-[#0c253b] text-[#fffdf8] rounded-lg p-6 flex flex-col justify-between border border-[#163e61]">
                    <div>
                        <span className="text-xs text-[#97ad82] font-semibold uppercase tracking-wider block mb-1">
                            Estimasi Anggaran Awal
                        </span>
                        <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#fffdf8] mb-2">
                            {formatRupiah(estMin)}
                        </div>
                        <div className="text-xs text-[#e5e0d3] mb-4 pb-4 border-b border-[#163e61]">
                            hingga <span className="font-semibold text-[#fffdf8]">{formatRupiah(estMax)}</span>
                            <span className="block text-[#97ad82] mt-1 font-mono text-[11px]">
                                *Tarif referensi: {formatRupiah(selectedService.baseMin)} - {formatRupiah(selectedService.baseMax)} / {selectedService.unit}
                            </span>
                        </div>

                        <div className="space-y-2 text-xs text-[#e5e0d3] mb-6">
                            <div className="flex justify-between">
                                <span>Pekerjaan:</span>
                                <span className="font-semibold text-right text-[#fffdf8] max-w-[180px] truncate">{selectedService.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Volume:</span>
                                <span className="font-semibold text-[#fffdf8]">{volume} {selectedService.unit}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Lokasi:</span>
                                <span className="font-semibold text-[#fffdf8]">{location}</span>
                            </div>
                        </div>
                    </div>

                    <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#97ad82] hover:bg-[#7a8f68] text-[#081a2a] font-bold text-xs rounded transition-colors text-center shadow-md"
                    >
                        <MessageSquare className="w-4 h-4 text-[#081a2a]" />
                        <span>Kirim Rincian ke Tim Estimator via WA</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
