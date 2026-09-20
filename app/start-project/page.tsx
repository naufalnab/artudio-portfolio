import React, { Suspense } from "react";
import BriefBuilder from "@/components/BriefBuilder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project Brief",
  description:
    "Isi ringkasan kebutuhan proyek arsitektur, interior, atau renovasi Anda untuk konsultasi terarah bersama tim ARTUDIO.",
};

export default function StartProjectPage() {
  return (
    <div className="w-full bg-[#F4F2ED] pt-36 pb-28 px-6 sm:px-8 lg:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto w-full">
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
            Project Initiation
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#181817] font-normal leading-tight">
            Tell us about your project.
          </h1>
          <p className="text-sm sm:text-base text-[#50504C] leading-relaxed">
            Beberapa informasi awal akan membantu ARTUDIO memahami kebutuhan Anda sebelum kita memulai sesi konsultasi desain terarah.
          </p>
        </div>

        {/* Multi-step Interactive Form Engine */}
        <Suspense
          fallback={
            <div className="p-16 text-center text-sm font-mono text-[#8A8880] bg-[#FAF9F6] border border-[#D8D5CC]">
              Loading Project Brief Builder...
            </div>
          }
        >
          <BriefBuilder />
        </Suspense>
      </div>
    </div>
  );
}
