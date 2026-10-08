import React from 'react';
import { Link } from '@inertiajs/react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0c253b] text-[#fffdf8] border-t border-[#163e61] pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#163e61]">
                    {/* Brand & Overview */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#fffdf8] text-[#0c253b] rounded flex items-center justify-center font-black text-lg">
                                KT
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#fffdf8] tracking-tight">
                                    PT. Karyatim Mandiri Engineering
                                </h3>
                                <p className="text-xs text-[#97ad82] font-medium">
                                    General Contractor & Civil Engineering Sejak 2012
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-[#e5e0d3] leading-relaxed">
                            Mitra konstruksi terpercaya untuk pembangunan gedung, struktur baja berat, pengaspalan, rigid pavement, ACP facade, interior korporat, dan proteksi industri di seluruh Indonesia.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-[#97ad82] pt-2">
                            <ShieldCheck className="w-4 h-4 text-[#97ad82]" />
                            <span>Kepatuhan K3 & Jaminan Mutu Struktural</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-sm font-semibold text-[#fffdf8] tracking-normal">
                            Navigasi
                        </h4>
                        <ul className="space-y-2 text-sm text-[#e5e0d3]">
                            <li>
                                <Link href="/" className="hover:text-[#97ad82] transition-colors">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/proyek" className="hover:text-[#97ad82] transition-colors">
                                    Portofolio Proyek
                                </Link>
                            </li>
                            <li>
                                <Link href="/layanan" className="hover:text-[#97ad82] transition-colors">
                                    Layanan Konstruksi
                                </Link>
                            </li>
                            <li>
                                <Link href="/tentang-kami" className="hover:text-[#97ad82] transition-colors">
                                    Tentang Perusahaan
                                </Link>
                            </li>
                            <li>
                                <Link href="/kontak" className="hover:text-[#97ad82] transition-colors">
                                    Kontak & Estimasi RAB
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Directory */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-sm font-semibold text-[#fffdf8] tracking-normal">
                            Spesialisasi Konstruksi
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#e5e0d3]">
                            <li>Konstruksi Bangunan & Sipil</li>
                            <li>Struktur Rangka Baja Berat (WF/H-Beam)</li>
                            <li>Rigid Pavement & Pengecoran Beton</li>
                            <li>Pengaspalan Jalan Hotmix AC-WC</li>
                            <li>Aluminium Composite Panel (ACP) & Facade</li>
                            <li>Lantai Epoxy Industri & Waterproofing</li>
                            <li>Interior Office Fit-Out & Partisi</li>
                            <li>MEP, Panel Listrik & CCTV Industri</li>
                        </ul>
                    </div>

                    {/* Contact & Address */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-sm font-semibold text-[#fffdf8] tracking-normal">
                            Kantor & Kontak
                        </h4>
                        <div className="space-y-2.5 text-xs text-[#e5e0d3]">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-[#97ad82] shrink-0 mt-0.5" />
                                <span>Surabaya, Jawa Timur — Melayani Proyek Seluruh Indonesia</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#97ad82] shrink-0" />
                                <a href="tel:081231716286" className="hover:text-[#97ad82]">0812-3171-6286</a> / <a href="tel:085111249501" className="hover:text-[#97ad82]">0851-1124-9501</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[#97ad82] shrink-0" />
                                <a href="mailto:infokaryatimsurabaya@gmail.com" className="hover:text-[#97ad82]">infokaryatimsurabaya@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#97ad82] shrink-0" />
                                <span>Senin – Sabtu: 08:00 – 17:00 WIB</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <a
                                href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf"
                                download
                                className="inline-flex items-center gap-2 text-xs text-[#97ad82] hover:text-[#fffdf8] font-medium"
                            >
                                <FileText className="w-3.5 h-3.5" />
                                <span>Download Portofolio Resmi (.PDF)</span>
                                <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e5e0d3]">
                    <div>
                        © {new Date().getFullYear()} PT. Karyatim Mandiri Engineering. Hak Cipta Dilindungi Undang-Undang.
                    </div>
                    <div className="flex items-center gap-6">
                        <a 
                            href="https://instagram.com/karyatimcontractor" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hover:text-[#97ad82] transition-colors"
                        >
                            Instagram
                        </a>
                        <a 
                            href="https://www.tiktok.com/@kontraktorsurabayaraya" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hover:text-[#97ad82] transition-colors"
                        >
                            TikTok
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/karyatim" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hover:text-[#97ad82] transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a 
                            href="https://facebook.com/kontraktorkaryatim" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hover:text-[#97ad82] transition-colors"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
