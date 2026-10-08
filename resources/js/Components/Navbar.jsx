import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Phone, FileDown, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';

export default function Navbar({ currentUrl = '' }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Portofolio Proyek', href: '/proyek' },
        { name: 'Layanan Konstruksi', href: '/layanan' },
        { name: 'Tentang Perusahaan', href: '/tentang-kami' },
        { name: 'Kontak & Estimasi', href: '/kontak' },
    ];

    const isActive = (href) => {
        if (href === '/' && currentUrl === '/') return true;
        if (href !== '/' && currentUrl?.startsWith(href)) return true;
        return false;
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-[#fffdf8]/95 backdrop-blur-md border-b border-[#e5e0d3]">
            {/* Top Bar Info */}
            <div className="bg-[#0c253b] text-[#fffdf8] text-xs py-2 px-4 sm:px-8 border-b border-[#163e61]">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1.5 text-[#e5e0d3]">
                            <MapPin className="w-3.5 h-3.5 text-[#97ad82]" />
                            <span>Surabaya, Jawa Timur</span>
                        </div>
                        <div className="hidden md:flex items-center gap-1.5 text-[#e5e0d3]">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#97ad82]" />
                            <span>Standar K3 & Manajemen Mutu Konstruksi Sejak 2012</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <span className="text-[#97ad82] font-medium hidden sm:inline">Hotline Proyek:</span>
                        <a 
                            href="https://wa.me/6281231716286?text=Halo%20PT.%20Karyatim%20Mandiri%20Engineering,%20saya%20ingin%20konsultasi%20proyek."
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-[#fffdf8] hover:text-[#97ad82] transition-colors"
                        >
                            0812-3171-6286
                        </a>
                        <span className="text-[#5c6773]">|</span>
                        <a 
                            href="https://wa.me/6285111249501?text=Halo%20PT.%20Karyatim%20Mandiri%20Engineering,%20saya%20ingin%20konsultasi%20proyek."
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-[#fffdf8] hover:text-[#97ad82] transition-colors"
                        >
                            0851-1124-9501
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-3.5 group">
                    <div className="w-11 h-11 bg-[#0c253b] rounded flex items-center justify-center text-[#fffdf8] font-black text-xl tracking-tight shadow-sm group-hover:bg-[#163e61] transition-colors">
                        KT
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg text-[#0c253b] leading-tight tracking-tight">
                            KARYATIM
                        </span>
                        <span className="text-xs text-[#5c6773] tracking-normal font-medium">
                            Mandiri Engineering Contractors
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-3.5 py-2 text-sm font-medium transition-colors rounded ${
                                isActive(link.href)
                                    ? 'text-[#0c253b] font-semibold bg-[#f1ede3]'
                                    : 'text-[#5c6773] hover:text-[#0c253b] hover:bg-[#f7f5ef]'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf"
                        download
                        className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0c253b] bg-[#f1ede3] hover:bg-[#e5e0d3] rounded border border-[#e5e0d3] transition-colors"
                    >
                        <FileDown className="w-4 h-4 text-[#0c253b]" />
                        <span>Unduh Profil PDF</span>
                    </a>
                    <a
                        href="https://wa.me/6281231716286?text=Halo%20Tim%20Teknis%20Karyatim,%20saya%20ingin%20konsultasi%20kebutuhan%20proyek%20konstruksi."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#fffdf8] bg-[#0c253b] hover:bg-[#163e61] rounded transition-colors shadow-sm"
                    >
                        <Phone className="w-3.5 h-3.5 text-[#97ad82]" />
                        <span>Konsultasi Proyek</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#97ad82]" />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2 text-[#0c253b] hover:bg-[#f1ede3] rounded"
                    aria-label="Toggle Navigation"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-[#e5e0d3] bg-[#fffdf8] px-4 py-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-3 py-2 text-sm font-medium rounded ${
                                isActive(link.href)
                                    ? 'text-[#0c253b] font-semibold bg-[#f1ede3]'
                                    : 'text-[#5c6773] hover:text-[#0c253b]'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-3 border-t border-[#e5e0d3] space-y-2">
                        <a
                            href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf"
                            download
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#0c253b] bg-[#f1ede3] rounded border border-[#e5e0d3]"
                        >
                            <FileDown className="w-4 h-4 text-[#0c253b]" />
                            <span>Unduh Profil PDF Portofolio</span>
                        </a>
                        <a
                            href="https://wa.me/6281231716286?text=Halo%20Tim%20Teknis%20Karyatim,%20saya%20ingin%20konsultasi%20kebutuhan%20proyek%20konstruksi."
                            target="_blank"
                            rel="noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#fffdf8] bg-[#0c253b] rounded"
                        >
                            <Phone className="w-4 h-4 text-[#97ad82]" />
                            <span>Hubungi Tim Teknis via WhatsApp</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
