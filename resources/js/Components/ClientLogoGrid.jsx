import React from 'react';

export default function ClientLogoGrid({ clients = [] }) {
    return (
        <section className="kt-grid-mark border border-line bg-white p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12">
                <h2 className="kt-section-title lg:col-span-5">Perusahaan yang tercatat dalam portofolio Karyatim.</h2>
                <div className="lg:col-span-7">
                    <img src="/images/projects/daftar-klien-mitra-perusahaan-karyatim.webp" alt="Daftar klien dan mitra PT. Karyatim Mandiri Engineering" className="h-auto w-full" loading="lazy" />
                    {clients.length > 0 && <p className="mt-4 text-xs leading-relaxed text-muted">Data mitra pada website mengikuti daftar yang tersimpan pada profil perusahaan.</p>}
                </div>
            </div>
        </section>
    );
}
