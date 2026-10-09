import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function ProjectCard({ project }) {
    const useFallback = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = '/images/projects/hero-proyek-tower-crane-konstruksi-gedung.webp';
    };

    return (
        <article className="group bg-white">
            <Link href={`/proyek/${project.slug}`} className="block">
                <div className="aspect-[4/3] overflow-hidden bg-[#dfe5e7]">
                    <img src={project.primary_image} alt={project.title} onError={useFallback} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" loading="lazy" />
                </div>
                <div className="min-h-[190px] p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between gap-3 text-xs"><span className="font-semibold text-brand">{project.category}</span>{project.year && <span className="text-muted">{project.year}</span>}</div>
                    <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] text-brand-ink">{project.title}</h3>
                    {project.location && <p className="mt-4 flex items-center gap-1.5 text-xs text-muted"><MapPin className="h-3.5 w-3.5" /> {project.location}</p>}
                    <span className="kt-link mt-6">Buka catatan proyek <ArrowUpRight className="h-4 w-4" /></span>
                </div>
            </Link>
        </article>
    );
}
