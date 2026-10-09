import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Download, Menu, Phone, X } from 'lucide-react';

export default function Navbar({ currentUrl = '' }) {
    const [open, setOpen] = useState(false);
    const links = [['Beranda', '/'], ['Proyek', '/proyek'], ['Layanan', '/layanan'], ['Tentang', '/tentang-kami'], ['Kontak', '/kontak']];
    const active = (href) => href === '/' ? currentUrl === '/' : currentUrl.startsWith(href);

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
            <div className="kt-shell flex h-[76px] items-center justify-between gap-6">
                <Link href="/" className="flex min-w-0 items-center" aria-label="Karyatim, beranda">
                    <img src="/images/brand/karyatim-lockup-blue.webp" alt="PT. Karyatim Mandiri Engineering" className="h-12 w-auto max-w-[220px] object-contain object-left" />
                </Link>
                <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
                    {links.map(([label, href]) => <Link key={href} href={href} className={`flex min-h-11 items-center border-b-2 px-3 text-sm font-semibold transition-colors ${active(href) ? 'border-brand text-brand-ink' : 'border-transparent text-muted hover:text-brand-ink'}`}>{label}</Link>)}
                </nav>
                <div className="hidden items-center gap-3 lg:flex">
                    <a href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf" download className="kt-button kt-button-ghost"><Download className="h-4 w-4" /> Profil PDF</a>
                    <a href="https://wa.me/6281284900094?text=Halo%20Karyatim,%20saya%20ingin%20mendiskusikan%20kebutuhan%20proyek." target="_blank" rel="noreferrer" className="kt-button"><Phone className="h-4 w-4" /> Konsultasi</a>
                </div>
                <button type="button" className="flex h-11 w-11 items-center justify-center border border-line text-brand-ink lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
            </div>
            {open && <div id="mobile-nav" className="border-t border-line bg-white lg:hidden"><nav className="kt-shell grid py-3" aria-label="Navigasi seluler">
                {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex min-h-12 items-center border-b border-line text-base font-semibold ${active(href) ? 'text-brand' : 'text-brand-ink'}`}>{label}</Link>)}
                <a href="https://wa.me/6281284900094?text=Halo%20Karyatim,%20saya%20ingin%20mendiskusikan%20kebutuhan%20proyek." target="_blank" rel="noreferrer" className="kt-button mt-4"><Phone className="h-4 w-4" /> Konsultasikan proyek</a>
            </nav></div>}
        </header>
    );
}
