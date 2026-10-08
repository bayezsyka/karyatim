import React from 'react';
import { Building, CheckCircle2 } from 'lucide-react';

export default function ClientLogoGrid({ clients = [] }) {
    return (
        <div className="bg-[#ffffff] border border-[#e5e0d3] rounded-lg p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 pb-4 border-b border-[#e5e0d3]">
                <div>
                    <h3 className="text-lg font-bold text-[#0c253b] tracking-tight">
                        Mitra & Klien Korporat Terpercaya
                    </h3>
                    <p className="text-xs text-[#5c6773]">
                        Telah dipercaya oleh berbagai perusahaan multinasional, BUMN, manufaktur, dan pengembang properti terkemuka
                    </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#97ad82] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#97ad82]" />
                    <span>Rekam Jejak Terverifikasi</span>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                {clients.map((client, idx) => (
                    <div
                        key={idx}
                        className="bg-[#f7f5ef] hover:bg-[#fffdf8] border border-[#e5e0d3] hover:border-[#0c253b] rounded p-3.5 flex items-center gap-3 transition-colors duration-200"
                    >
                        <div className="w-8 h-8 rounded bg-[#0c253b] text-[#97ad82] flex items-center justify-center shrink-0 font-bold text-xs">
                            <Building className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                            <div className="text-xs font-bold text-[#0c253b] truncate">
                                {client.name}
                            </div>
                            {client.sector && (
                                <div className="text-[11px] text-[#5c6773] truncate">
                                    {client.sector}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
