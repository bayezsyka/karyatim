import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, Download, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#073752] text-white">
            <div className="kt-shell py-16 sm:py-20">
                <div className="grid gap-12 border-b border-white/20 pb-14 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                        <img src="/images/brand/karyatim-lockup-blue-transparent.png" alt="PT. Karyatim Mandiri Engineering" className="mb-8 h-16 w-auto brightness-0 invert" />
                        <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">Bangun rencana proyek bersama tim Karyatim.</h2>
                        <a href="https://wa.me/6281284900094?text=Halo%20Karyatim,%20saya%20ingin%20mendiskusikan%20kebutuhan%20proyek." target="_blank" rel="noreferrer" className="kt-button kt-button-light mt-7"><Phone className="h-4 w-4" /> Mulai konsultasi</a>
                    </div>
                    <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6">
                        <div><h3 className="mb-4 text-sm font-semibold">Navigasi</h3><div className="grid gap-3 text-sm text-white/70"><Link href="/proyek" className="hover:text-white">Proyek</Link><Link href="/layanan" className="hover:text-white">Layanan</Link><Link href="/tentang-kami" className="hover:text-white">Tentang perusahaan</Link><Link href="/kontak" className="hover:text-white">Kontak</Link></div></div>
                        <div><h3 className="mb-4 text-sm font-semibold">Korespondensi</h3><div className="grid gap-3 text-sm text-white/70">
                            <a href="tel:+6281231716286" className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" /> 0812 3171 6286</a>
                            <a href="tel:+6281284900094" className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" /> 0812 8490 0094</a>
                            <a href="mailto:infokaryatimsurabaya@gmail.com" className="flex items-start gap-2 break-all hover:text-white"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> infokaryatimsurabaya@gmail.com</a>
                            <a href="https://instagram.com/karyatimcontractor" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">Instagram @karyatimcontractor <ArrowUpRight className="h-4 w-4" /></a>
                            <a href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf" download className="flex items-center gap-2 hover:text-white"><Download className="h-4 w-4" /> Unduh profil perusahaan</a>
                        </div></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 pt-7 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} PT. Karyatim Mandiri Engineering</span><span>General contractor · Surabaya · Sejak 2014</span></div>
            </div>
        </footer>
    );
}
