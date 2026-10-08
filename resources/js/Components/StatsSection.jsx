import React from 'react';
import { Award, Briefcase, Users, ShieldAlert } from 'lucide-react';

export default function StatsSection({ stats }) {
    const items = [
        {
            icon: Award,
            value: stats?.years_experience || '12+',
            label: 'Tahun Pengalaman',
            desc: 'Melayani konstruksi profesional sejak 2012 di Jawa Timur & nasional',
        },
        {
            icon: Briefcase,
            value: stats?.projects_completed || '150+',
            label: 'Proyek Terselesaikan',
            desc: 'Gedung sipil, baja bentang lebar, pengaspalan, dan interior komersial',
        },
        {
            icon: Users,
            value: stats?.corporate_clients || '35+',
            label: 'Klien Korporat & BUMN',
            desc: 'Kepercayaan berkelanjutan dari industri multinasional & ritel',
        },
        {
            icon: ShieldAlert,
            value: stats?.safety_record || 'Zero Accident',
            label: 'Standar K3 & Mutu',
            desc: 'Komitmen keselamatan kerja dan ketepatan spesifikasi teknis SNI',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                    <div
                        key={idx}
                        className="bg-[#ffffff] border border-[#e5e0d3] p-5 sm:p-6 rounded-lg flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-10 h-10 rounded bg-[#0c253b] text-[#97ad82] flex items-center justify-center mb-3">
                                <IconComponent className="w-5 h-5" />
                            </div>
                            <div className="text-3xl font-black text-[#0c253b] tracking-tight mb-1">
                                {item.value}
                            </div>
                            <div className="text-sm font-bold text-[#081a2a] mb-1">
                                {item.label}
                            </div>
                        </div>
                        <p className="text-xs text-[#5c6773] mt-2 pt-2 border-t border-[#f1ede3] leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
