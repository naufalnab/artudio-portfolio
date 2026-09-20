import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { philosophyPrinciples } from "@/data/process";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio & Philosophy",
  description:
    "Mengenal pendekatan arsitektural ARTUDIO, filosofi desain ruang, dan profil principal ARTUDIO.",
};

export default function StudioPage() {
  const expertise = [
    { title: "Residential Architecture", desc: "Perancangan hunian tropis kontemporer, villa privat & townhouse." },
    { title: "Interior Architecture", desc: "Integrasi tata ruang, lighting, tekstur material & custom furniture." },
    { title: "Renovation", desc: "Membaca kondisi existing lalu menyusun arah fungsi, ruang, dan visual baru." },
    { title: "Developer Planning", desc: "Studi awal tapak, konsep pengembangan, tipologi, dan visualisasi." },
    { title: "Brand Identity & Creative", desc: "Logo, identitas visual, komunikasi grafis, signage, dan website design." },
  ];

  return (
    <div className="w-full bg-[#F4F2ED] pt-36 pb-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* 1. HERO STATEMENT */}
        <div className="max-w-4xl mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-3">
            Studio Identity
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#181817] font-light leading-[1.12]">
            ARTUDIO is a design studio focused on thoughtful spaces and meaningful environments.
          </h1>
          <p className="text-base sm:text-lg text-[#50504C] mt-6 leading-relaxed max-w-2xl font-light">
            Kami memandang arsitektur bukan sekadar komposisi bentuk fisik, melainkan wadah kehidupan yang mempengaruhi ketenangan batin, ritme keseharian, dan kenyamanan jangka panjang.
          </p>
        </div>

        {/* 2. EDITORIAL STUDIO IMAGE (STRICTLY NO HUMAN FACES: Architectural drafting, materials, concrete textures) */}
        <div className="mb-24">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#E5E2D9]">
            <Image
              src="/images/artudio/photo-1600585154526-990dced4db0d.webp"
              alt="ARTUDIO Architectural Material & Spatial Atmosphere"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-[#8A8880]">
            <span>Materiality & Spatial Calm</span>
            <span className="italic">Workspace and Material Exploration Board</span>
          </div>
        </div>

        {/* 3. FOUNDER & LEADERSHIP SECTION */}
        <section className="mb-28 p-8 sm:p-14 bg-[#FAF9F6] border border-[#D8D5CC]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B7654] font-medium block">
                Studio Leadership
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#181817] font-normal">
                {siteConfig.principal.name}
              </h2>
              <div className="font-mono text-xs uppercase tracking-wider text-[#50504C]">
                {siteConfig.principal.role}
              </div>
              <p className="mt-3 pt-4 border-t border-[#D8D5CC] font-editorial text-2xl text-[#181817] leading-snug">
                {siteConfig.experience.display} <span className="text-lg text-[#50504C]">{siteConfig.experience.label}</span>
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm text-[#50504C] leading-relaxed">
              <p>
                {siteConfig.principal.name} memimpin ARTUDIO dengan pengalaman lebih dari dua dekade dalam perencanaan bangunan, interior, dan desain visual.
              </p>
              <p>
                ARTUDIO berkembang dari pengalaman panjang dalam perencanaan bangunan, interior, dan komunikasi visual — dengan kebutuhan pengguna sebagai dasar keputusan desain.
              </p>
            </div>
          </div>
        </section>

        {/* 4. EXPERTISE LIST */}
        <section className="mb-28">
          <div className="pb-6 mb-12 border-b border-[#D8D5CC]">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-2">
              Capabilities
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#181817]">
              Scope of Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#FAF9F6] border border-[#D8D5CC] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#8A8880] block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-editorial text-xl text-[#181817] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50504C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PHILOSOPHY PRINCIPLES */}
        <section className="mb-24">
          <div className="pb-6 mb-12 border-b border-[#D8D5CC]">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-2">
              Values
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#181817]">
              Design Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPrinciples.map((item) => (
              <div key={item.number} className="p-8 bg-[#FAF9F6] border border-[#D8D5CC] space-y-3">
                <span className="font-mono text-xs text-[#8B7654] font-semibold">
                  Principle {item.number}
                </span>
                <h3 className="font-editorial text-2xl text-[#181817]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#50504C] leading-relaxed">
                  {item.statement}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CALL TO ACTION */}
        <div className="p-10 sm:p-14 bg-[#181817] text-[#FAF9F6] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-editorial text-3xl text-white font-light">
              Ingin berkolaborasi bersama ARTUDIO?
            </h3>
            <p className="text-xs sm:text-sm text-[#D8D5CC] max-w-xl">
              Kami menyambut diskusi mengenai ide hunian baru, renovasi, maupun perencanaan kawasan komersial Anda.
            </p>
          </div>
          <Link
            href="/start-project"
            className="px-7 py-4 bg-white text-[#181817] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#FAF9F6] transition-colors inline-flex items-center shrink-0"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
