import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, Download, Phone } from 'lucide-react';
import AppLayout from '../Layouts/AppLayout';
import ProjectCard from '../Components/ProjectCard';
import ClientLogoGrid from '../Components/ClientLogoGrid';

export default function Home({ featuredProjects = [], services = [], clients = [] }) {
    const scope = services.slice(0, 4);
    return (
        <AppLayout title="General Contractor Surabaya">
            <section className="bg-white">
                <div className="grid min-h-[650px] lg:grid-cols-2">
                    <div className="flex items-center bg-brand px-5 py-16 text-white sm:px-10 lg:px-[max(3rem,calc((100vw-82rem)/2))] lg:pr-12">
                        <div className="kt-reveal max-w-3xl">
                            <p className="mb-7 text-sm font-semibold text-white/80">PT. Karyatim Mandiri Engineering · Surabaya</p>
                            <h1 className="kt-title">Kontraktor umum untuk pekerjaan bangunan, interior, dan infrastruktur.</h1>
                            <a href="https://wa.me/6281284900094?text=Halo%20Karyatim,%20saya%20ingin%20mendiskusikan%20kebutuhan%20proyek." target="_blank" rel="noreferrer" className="kt-button kt-button-light mt-10"><Phone className="h-4 w-4" /> Konsultasikan proyek</a>
                        </div>
                    </div>
                    <div className="relative min-h-[430px] overflow-hidden bg-[#cfd9dd] lg:min-h-full">
                        <img src="/images/projects/ereksi-baja-berat-mobile-crane-kato.webp" alt="Pelaksanaan ereksi struktur baja menggunakan mobile crane" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute bottom-0 left-0 bg-[#073752] px-5 py-4 text-xs text-white sm:px-6">Dokumentasi pekerjaan struktur baja · Karyatim</div>
                    </div>
                </div>
            </section>

            <section className="border-b border-line bg-white">
                <div className="kt-shell grid md:grid-cols-4">
                    {scope.map((service, index) => <Link href={`/layanan/${service.slug}`} key={service.id} className="group relative flex min-h-48 flex-col justify-between overflow-hidden border-b border-line bg-[#073752] px-5 py-6 text-white md:border-b-0 md:border-r md:first:border-l">
                        {service.image && <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-45" />}
                        <span className="kt-index relative z-10 text-sm text-[#75c9ee]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="relative z-10 flex items-end justify-between gap-3 font-semibold leading-tight">{service.title}<ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" /></span>
                    </Link>)}
                </div>
            </section>

            <section className="kt-section">
                <div className="kt-shell">
                    <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
                        <h2 className="kt-section-title lg:col-span-8">Pekerjaan nyata menjadi ukuran kemampuan kami.</h2>
                        <div className="lg:col-span-4 lg:text-right"><Link href="/proyek" className="kt-link">Lihat seluruh proyek <ArrowRight className="h-4 w-4" /></Link></div>
                    </div>
                    <div className="kt-project-grid kt-project-grid-featured">{featuredProjects.slice(0, 6).map((project) => <ProjectCard key={project.id} project={project} />)}</div>
                </div>
            </section>

            <section className="bg-[#073752] text-white">
                <div className="kt-shell grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
                    <div className="lg:col-span-5"><h2 className="kt-section-title">Ruang lingkup yang mengikuti kebutuhan lapangan.</h2></div>
                    <div className="lg:col-span-7">
                        {services.slice(0, 8).map((service, index) => <Link key={service.id} href={`/layanan/${service.slug}`} className="group grid grid-cols-[3rem_1fr_auto] items-center gap-3 border-t border-white/20 py-5 last:border-b">
                            <span className="text-xs text-[#75c9ee]">{String(index + 1).padStart(2, '0')}</span><span className="font-semibold">{service.title}</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>)}
                        <Link href="/layanan" className="kt-button kt-button-light mt-8">Semua layanan <ArrowRight className="h-4 w-4" /></Link>
                    </div>
                </div>
            </section>

            <section className="kt-section bg-white">
                <div className="kt-shell"><ClientLogoGrid clients={clients} /></div>
            </section>

            <section className="overflow-hidden bg-[#0879b8] text-white">
                <div className="kt-shell grid items-stretch lg:grid-cols-12">
                    <div className="py-16 lg:col-span-7 lg:py-24"><h2 className="kt-section-title">Bawa kebutuhan awal Anda. Kami bantu membacanya sebagai pekerjaan.</h2><div className="mt-8 flex flex-wrap gap-3"><Link href="/kontak" className="kt-button kt-button-light">Hubungi Karyatim <ArrowRight className="h-4 w-4" /></Link><a href="/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf" download className="kt-button border-white/40 bg-transparent hover:bg-white/10"><Download className="h-4 w-4" /> Unduh profil</a></div></div>
                    <div className="relative min-h-72 lg:col-span-5"><img src="/images/projects/pengawas-lapangan-site-supervisor-pabrik.webp" alt="Pengawas lapangan Karyatim di area proyek" className="absolute inset-0 h-full w-full object-cover" /></div>
                </div>
            </section>
        </AppLayout>
    );
}
