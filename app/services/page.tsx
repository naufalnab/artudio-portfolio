import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Scope",
  description:
    "Layanan arsitektur, interior design, renovasi bangunan, developer planning, dan brand identity oleh ARTUDIO.",
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#F4F2ED] pt-36 pb-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-2">
            Practice Disciplines
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl text-[#181817] font-normal leading-tight">
            Services & Deliverables
          </h1>
          <p className="text-sm sm:text-base text-[#50504C] mt-3 leading-relaxed">
            Setiap layanan dirancang dengan kejelasan alur kerja, dokumentasi gambar kerja presisi, dan koordinasi terstruktur untuk menghindari ambiguitas saat pelaksanaan fisik.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-16">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              className="p-8 sm:p-12 lg:p-14 bg-[#FAF9F6] border border-[#D8D5CC] scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Column: Number, Title & Summary */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-sm text-[#8B7654] font-semibold">
                      {svc.number}
                    </span>
                    <span className="w-8 h-[1px] bg-[#D8D5CC]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8880]">
                      Service Discipline
                    </span>
                  </div>

                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#181817] font-normal">
                    {svc.title}
                  </h2>

                  <p className="text-sm font-medium text-[#181817] leading-relaxed">
                    {svc.tagline}
                  </p>

                  <p className="text-sm text-[#50504C] leading-relaxed">
                    {svc.summary}
                  </p>

                  {svc.scopeNote && (
                    <div className="p-4 bg-[#F4F2ED] border border-[#D8D5CC] text-xs text-[#8A8880] italic">
                      * {svc.scopeNote}
                    </div>
                  )}

                  <div className="pt-2">
                    <Link
                      href={`/start-project?projectType=${encodeURIComponent(svc.title)}`}
                      className="px-6 py-3.5 bg-[#181817] text-[#FAF9F6] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#333330] transition-colors inline-flex items-center"
                    >
                      <span>Inquire {svc.title}</span>
                      <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Ideal For & Key Deliverables */}
                <div className="lg:col-span-6 space-y-8 lg:pl-6 border-t lg:border-t-0 lg:border-l border-[#D8D5CC] pt-8 lg:pt-0">
                  {/* Ideal For */}
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-[#8A8880] font-medium mb-3">
                      Ideal For
                    </h3>
                    <ul className="space-y-2">
                      {svc.idealFor.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-[#50504C]">
                          <CheckCircle2 className="w-4 h-4 text-[#8B7654] mr-2.5 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-[#8A8880] font-medium mb-3">
                      Key Deliverables & Documentation
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {svc.deliverables.map((del, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-white border border-[#D8D5CC] text-xs text-[#181817] flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-[#181817] rounded-full mr-2 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-24 p-10 bg-[#181817] text-[#FAF9F6] text-center space-y-6">
          <h3 className="font-editorial text-3xl sm:text-4xl text-white font-light">
            Membutuhkan kombinasi arsitektur dan interior terpadu?
          </h3>
          <p className="text-xs sm:text-sm text-[#D8D5CC] max-w-xl mx-auto leading-relaxed">
            Sebagian besar proyek klien kami menggabungkan perancangan arsitektur dan interior secara simultan untuk menjaga keselarasan material dan efisiensi budget.
          </p>
          <div className="pt-2">
            <Link
              href="/start-project"
              className="px-8 py-4 bg-white text-[#181817] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#FAF9F6] transition-colors inline-flex items-center"
            >
              <span>Mulai Konsultasi Proyek</span>
              <ArrowUpRight className="ml-2 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
