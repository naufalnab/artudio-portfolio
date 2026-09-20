import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { processSteps, philosophyPrinciples } from "@/data/process";
import ProjectCard from "@/components/ProjectCard";
import { ArrowUpRight, ArrowRight, ShieldCheck, Compass, Sparkles } from "lucide-react";

export default function HomePage() {
  const selectedProjects = projectsData.slice(0, 6);
  const featuredCase = projectsData[0]; // Casa Sidoarjo

  return (
    <div className="w-full flex flex-col bg-[#F4F2ED]">
      {/* 1. HERO SECTION (88-95vh, Fullscreen Architectural Statement) */}
      <section className="relative min-h-[92vh] flex items-end pb-16 sm:pb-24 pt-32 px-6 sm:px-8 lg:px-12 overflow-hidden bg-[#181817]">
        {/* Architectural Hero Image (fetchpriority="high", priority=true for LCP optimization) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="ARTUDIO Architectural Sanctuary"
            fill
            priority
            className="object-cover object-center brightness-[0.72] contrast-[1.05]"
            sizes="100vw"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full text-[#FAF9F6]">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-3 text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#D8D5CC]">
              <span className="w-6 h-[1px] bg-[#8B7654]" />
              <span>ARTUDIO • Interior & Architecture</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight">
              Architecture shaped around the way you live.
            </h1>

            {/* Subtitle in Indonesian */}
            <p className="text-base sm:text-lg text-[#D8D5CC] font-normal leading-relaxed max-w-2xl">
              ARTUDIO membantu mewujudkan hunian, interior, renovasi, dan pengembangan properti melalui proses desain yang terukur dari konsep hingga implementasi.
            </p>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="px-7 py-3.5 bg-white text-[#181817] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-[#FAF9F6] hover:shadow-lg inline-flex items-center"
              >
                <span>Explore Projects</span>
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
              <Link
                href="/start-project"
                className="px-7 py-3.5 bg-transparent text-white border border-white/60 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-white hover:text-[#181817] hover:border-white inline-flex items-center"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bottom Metadata Bar */}
          <div className="mt-14 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#D8D5CC]/80 font-mono">
            <div>01 • Architecture</div>
            <div>02 • Interior Design</div>
            <div>03 • Renovation</div>
            <div>04 • Developer Planning</div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION / STUDIO STATEMENT */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
          <div className="lg:col-span-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-4">
              Design Statement
            </span>
            <p className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#181817] font-light leading-[1.25]">
              &ldquo;Kami percaya ruang yang baik bukan hanya terlihat indah — tetapi bekerja dengan baik untuk orang yang menggunakannya.&rdquo;
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:pl-6 border-l-0 lg:border-l border-[#D8D5CC]">
            <p className="text-sm sm:text-base text-[#50504C] leading-relaxed">
              ARTUDIO bekerja melalui pendekatan yang menggabungkan fungsi, konteks iklim, kebutuhan personal klien, detail konstruksi, dan karakter visual yang tenang.
            </p>
            <Link
              href="/studio"
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] font-semibold text-[#181817] group hover:text-[#8B7654] transition-colors"
            >
              <span>About ARTUDIO</span>
              <ArrowRight className="ml-2 w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SELECTED PROJECTS (Editorial Asymmetric Layout) */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D8D5CC] gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-1">
              Portfolio
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#181817] font-normal">
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs uppercase tracking-[0.18em] font-medium text-[#181817] hover:text-[#8B7654] transition-colors inline-flex items-center"
          >
            <span>View All Works ({projectsData.length})</span>
            <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetric Project Grid */}
        <div className="space-y-20 sm:space-y-28">
          {/* Row 1: Asymmetric split (70% wide left, 30% compact right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8">
              <ProjectCard project={selectedProjects[0]} layoutStyle="wide" priority />
            </div>
            <div className="lg:col-span-4 lg:pt-16">
              <ProjectCard project={selectedProjects[1]} layoutStyle="compact" />
            </div>
          </div>

          {/* Row 2: Full width dramatic showcase */}
          <div className="w-full">
            <ProjectCard project={selectedProjects[2]} layoutStyle="wide" />
          </div>

          {/* Row 3: 50 / 50 Balanced split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            <ProjectCard project={selectedProjects[3]} layoutStyle="standard" />
            <ProjectCard project={selectedProjects[4]} layoutStyle="standard" />
          </div>

          {/* Row 4: Single featured with negative space */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="hidden lg:block lg:col-span-3 pt-12 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880]">Editorial Focus</span>
              <p className="text-xs text-[#50504C] leading-relaxed">
                Setiap karya dirancang dengan studi pencahayaan alami, material taktil, dan integrasi lanskap yang menyatu.
              </p>
            </div>
            <div className="lg:col-span-9">
              <ProjectCard project={selectedProjects[5]} layoutStyle="wide" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES ("What We Do" Numbered Editorial List) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF9F6] border-y border-[#D8D5CC]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-2">
              Capabilities
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#181817] font-normal leading-tight">
              What We Do
            </h2>
            <p className="text-sm text-[#50504C] mt-3 leading-relaxed">
              Pendekatan terpadu untuk merancang ruang yang fungsional, adaptif terhadap iklim, dan memiliki identitas kuat.
            </p>
          </div>

          {/* Numbered Editorial List */}
          <div className="divide-y divide-[#D8D5CC] border-t border-b border-[#D8D5CC]">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group hover:bg-[#F4F2ED]/60 transition-colors px-2 sm:px-6"
              >
                <div className="lg:col-span-1 font-mono text-sm text-[#8A8880] font-medium">
                  {svc.number}
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] group-hover:text-[#8B7654] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#8A8880] mt-1 font-medium tracking-wide">
                    {svc.tagline}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm text-[#50504C] leading-relaxed">
                    {svc.summary}
                  </p>
                </div>
                <div className="lg:col-span-2 text-left lg:text-right pt-2 lg:pt-0">
                  <Link
                    href={`/start-project?service=${encodeURIComponent(svc.title)}`}
                    className="inline-flex items-center text-xs uppercase tracking-[0.16em] font-medium text-[#181817] hover:text-[#8B7654] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <Link
              href="/services"
              className="text-xs uppercase tracking-[0.18em] font-medium text-[#181817] hover:text-[#8B7654] transition-colors inline-flex items-center"
            >
              <span>Explore Detailed Service Scope</span>
              <ArrowRight className="ml-2 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDY SPOTLIGHT */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-[#181817] text-[#FAF9F6] p-8 sm:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#8B7654] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Case Study</span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-5xl text-white font-light leading-tight">
              {featuredCase.title}
            </h3>

            <p className="text-sm text-[#D8D5CC] leading-relaxed">
              {featuredCase.brief.clientNeed}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono text-[#8A8880]">
              <div>
                <span className="text-white block">Location</span>
                <span>{featuredCase.location}</span>
              </div>
              <div>
                <span className="text-white block">Building Area</span>
                <span>{featuredCase.buildingArea}</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={`/projects/${featuredCase.slug}`}
                className="px-6 py-3.5 bg-white text-[#181817] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-[#FAF9F6] inline-flex items-center"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#262723]">
              <Image
                src={featuredCase.heroImage}
                alt={featuredCase.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. DESIGN PHILOSOPHY ("Design is a process, not an ornament.") */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#F4F2ED]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-2">
              Why ARTUDIO
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#181817] font-normal leading-tight">
              Design is a process, not an ornament.
            </h2>
            <p className="text-sm text-[#50504C] mt-3 leading-relaxed">
              Prinsip-prinsip yang menjaga setiap proyek tetap relevan, terukur secara anggaran, dan tenang dinikmati bertahun-tahun kemudian.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophyPrinciples.map((item) => (
              <div
                key={item.number}
                className="p-8 bg-[#FAF9F6] border border-[#D8D5CC] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#8A8880] block mb-3">
                    {item.number}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#181817] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50504C] leading-relaxed">
                    {item.statement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS ("From First Conversation to Built Space") */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF9F6] border-y border-[#D8D5CC]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-2">
              Methodology
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#181817] font-normal leading-tight">
              From First Conversation to Built Space
            </h2>
            <p className="text-sm text-[#50504C] mt-3 leading-relaxed">
              Alur kerja 6 tahap yang transparan untuk memastikan setiap keputusan ruang tervalidasi sebelum masuk ke tahap fisik.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-8 bg-[#F4F2ED] border border-[#D8D5CC] flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#D8D5CC]">
                    <span className="font-mono text-sm text-[#8B7654] font-semibold">
                      Phase {step.number}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase text-[#8A8880]">Workflow</span>
                  </div>

                  <h3 className="font-editorial text-2xl text-[#181817] mt-4 font-normal">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8A8880] font-medium mt-1">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-[#50504C] mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D8D5CC]">
                  <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block mb-2">
                    Key Outputs:
                  </span>
                  <ul className="space-y-1 text-xs text-[#50504C]">
                    {step.keyOutputs.map((out, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#8B7654] rounded-full mr-2 shrink-0" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#8A8880] italic">
            * Scope dan alur pendampingan dapat disesuaikan berdasarkan skala serta kebutuhan spesifik proyek.
          </div>
        </div>
      </section>

      {/* 8. PROJECT BRIEF CTA SECTION */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#181817] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8B7654] font-medium">
            Start Your Journey
          </span>

          <h2 className="font-editorial text-4xl sm:text-6xl text-white font-light leading-tight">
            Have a project in mind? Let&apos;s shape it thoughtfully.
          </h2>

          <p className="text-sm sm:text-base text-[#D8D5CC] max-w-2xl mx-auto leading-relaxed">
            Mulailah dengan mengisi ringkasan singkat kebutuhan Anda. Kami akan menganalisis lokasi, luas lahan, dan arah desain sebelum kita berdiskusi lebih lanjut via WhatsApp.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/start-project"
              className="px-8 py-4 bg-white text-[#181817] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-[#FAF9F6] shadow-md inline-flex items-center"
            >
              <span>Build Project Brief</span>
              <ArrowRight className="ml-2 w-3.5 h-3.5" />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 bg-transparent text-white border border-white/40 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-white hover:text-[#181817] hover:border-white inline-flex items-center"
            >
              <span>Explore Selected Works</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
