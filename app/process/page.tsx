import React from "react";
import Link from "next/link";
import { processSteps } from "@/data/process";
import { ArrowUpRight, Clock, FileCheck2, UserCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process & Methodology",
  description:
    "Alur kerja terukur ARTUDIO dari konsultasi awal hingga dokumen teknis konstruksi siap bangun.",
};

export default function ProcessPage() {
  return (
    <div className="w-full bg-[#F4F2ED] pt-36 pb-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-2">
            Methodology
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl text-[#181817] font-normal leading-tight">
            From First Conversation to Built Space
          </h1>
          <p className="text-sm sm:text-base text-[#50504C] mt-3 leading-relaxed">
            Membangun properti adalah keputusan besar. Enam tahap ini membantu menjelaskan bagaimana percakapan awal dapat berkembang menjadi arah desain dan dukungan proyek.
          </p>
        </div>

        {/* Vertical Stepper Process */}
        <div className="space-y-12">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="p-8 sm:p-12 bg-[#FAF9F6] border border-[#D8D5CC] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative"
            >
              {/* Left Column: Number & Stage */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-sm font-semibold text-[#8B7654]">
                    PHASE {step.number}
                  </span>
                  <span className="w-8 h-[1px] bg-[#D8D5CC]" />
                  <span className="font-mono text-xs text-[#8A8880] flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    Durasi menyesuaikan scope
                  </span>
                </div>

                <h2 className="font-editorial text-3xl text-[#181817] font-normal">
                  {step.title}
                </h2>
                <p className="text-xs text-[#8A8880] font-medium tracking-wide">
                  {step.subtitle}
                </p>
              </div>

              {/* Middle Column: Detailed Description */}
              <div className="lg:col-span-5 text-sm text-[#50504C] leading-relaxed space-y-4">
                <p>{step.description}</p>
                <div className="text-xs text-[#8A8880] flex items-center">
                  <UserCheck className="w-3.5 h-3.5 mr-1.5 text-[#50504C]" />
                  <span>Keterlibatan Klien: Sesi Diskusi & Validasi Milestone</span>
                </div>
              </div>

              {/* Right Column: Key Deliverables */}
              <div className="lg:col-span-3 bg-[#F4F2ED] p-5 border border-[#D8D5CC] space-y-3">
                <div className="flex items-center text-xs uppercase tracking-wider text-[#181817] font-medium">
                  <FileCheck2 className="w-3.5 h-3.5 mr-1.5 text-[#8B7654]" />
                  <span>Contoh keluaran tahap:</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#50504C]">
                  {step.keyOutputs.map((out, oIdx) => (
                    <li key={oIdx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#8B7654] rounded-full mr-2 mt-1.5 shrink-0" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 p-6 bg-[#FAF9F6] border border-[#D8D5CC] text-xs text-[#8A8880] text-center leading-relaxed">
          <p className="font-medium text-[#50504C] mb-1">Catatan Penting Lingkup Layanan:</p>
          Durasi dan keluaran setiap tahap menyesuaikan jenis, skala, dan ruang lingkup proyek. Kebutuhan perizinan maupun koordinasi dengan pihak lain dibahas sesuai konteks proyek.
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-10 sm:p-14 bg-[#181817] text-[#FAF9F6] text-center space-y-6">
          <h3 className="font-editorial text-3xl sm:text-4xl text-white font-light">
            Siap memulai percakapan tahap pertama?
          </h3>
          <p className="text-xs sm:text-sm text-[#D8D5CC] max-w-xl mx-auto leading-relaxed">
            Isi brief proyek awal Anda untuk membantu kami menyiapkan analisis konteks lahan sebelum kita bertemu atau berdiskusi online.
          </p>
          <div className="pt-2">
            <Link
              href="/start-project"
              className="px-8 py-4 bg-white text-[#181817] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#FAF9F6] transition-colors inline-flex items-center"
            >
              <span>Isi Project Brief</span>
              <ArrowUpRight className="ml-2 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
