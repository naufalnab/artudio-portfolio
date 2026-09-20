import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData, getProjectBySlug } from "@/data/projects";
import ArchitecturalDrawing from "@/components/ArchitecturalDrawing";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} — ${project.category}`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  // Find next project
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];

  return (
    <article className="w-full bg-[#F4F2ED] pt-32 pb-24">
      {/* 1. TOP BREADCRUMB & IDENTIFIER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#D8D5CC]">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs uppercase tracking-[0.16em] text-[#8A8880] hover:text-[#181817] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            <span>Back to Projects</span>
          </Link>
          <span className="font-mono text-xs text-[#8A8880]">
            CONCEPT STUDY #{project.number}
          </span>
        </div>
      </div>

      {/* 2. PROJECT HERO HEADER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="max-w-4xl space-y-4">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#8B7654] font-medium">
            {project.category} • {project.location}
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-[#181817] leading-[1.08]">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-[#50504C] leading-relaxed max-w-2xl font-light">
            {project.tagline}
          </p>
        </div>

        {/* Key Architectural Metadata Bar */}
        <div className="mt-10 pt-6 border-t border-[#D8D5CC] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 text-xs text-[#50504C] font-mono">
          <div>
            <span className="text-[#8A8880] block text-[10px] uppercase font-sans tracking-wider mb-1">Location</span>
            <span className="text-[#181817] font-medium">{project.location}</span>
          </div>
          <div>
            <span className="text-[#8A8880] block text-[10px] uppercase font-sans tracking-wider mb-1">Year</span>
            <span className="text-[#181817] font-medium">{project.year}</span>
          </div>
          <div>
            <span className="text-[#8A8880] block text-[10px] uppercase font-sans tracking-wider mb-1">Land / Building Area</span>
            <span className="text-[#181817] font-medium">{project.landArea} / {project.buildingArea}</span>
          </div>
          <div>
            <span className="text-[#8A8880] block text-[10px] uppercase font-sans tracking-wider mb-1">Scope</span>
            <span className="text-[#181817] font-medium">{project.scope.slice(0, 2).join(", ")}</span>
          </div>
          <div>
            <span className="text-[#8A8880] block text-[10px] uppercase font-sans tracking-wider mb-1">Status</span>
            <span className="text-[#8B7654] font-medium">{project.status}</span>
          </div>
        </div>
      </div>

      {/* 3. FULLSCREEN HERO IMAGE */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full overflow-hidden bg-[#E5E2D9] shadow-sm">
          <Image
            src={project.heroImage}
            alt={`${project.title} — visual konsep ${project.category.toLowerCase()}`}
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 4. THE BRIEF & DESIGN RESPONSE (Editorial Split) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: The Brief */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pb-3 border-b border-[#D8D5CC]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium">01 • Context</span>
              <h2 className="font-editorial text-3xl text-[#181817] mt-1">The Brief</h2>
            </div>
            <div className="space-y-4 text-sm text-[#50504C] leading-relaxed">
              <p>{project.brief.clientNeed}</p>
              <div className="p-4 bg-[#FAF9F6] border border-[#D8D5CC] space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block font-mono">Site Constraints</span>
                <p className="text-xs text-[#181817]">{project.brief.siteConstraints}</p>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#D8D5CC] space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block font-mono">Key Architectural Challenge</span>
                <p className="text-xs text-[#181817]">{project.brief.keyChallenge}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Design Response */}
          <div className="lg:col-span-7 space-y-6">
            <div className="pb-3 border-b border-[#D8D5CC]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium">02 • Architectural Strategy</span>
              <h2 className="font-editorial text-3xl text-[#181817] mt-1">Design Response</h2>
            </div>
            <div className="space-y-6 text-sm text-[#50504C] leading-relaxed">
              <div>
                <h4 className="font-editorial text-xl text-[#181817] mb-1 font-normal">Spatial Concept</h4>
                <p>{project.designResponse.concept}</p>
              </div>
              <div>
                <h4 className="font-editorial text-xl text-[#181817] mb-1 font-normal">Circulation & Logic</h4>
                <p>{project.designResponse.spatialLogic}</p>
              </div>
              <div>
                <h4 className="font-editorial text-xl text-[#181817] mb-1 font-normal">Light, Wind & Microclimate</h4>
                <p>{project.designResponse.lightAndAir}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURAL DRAWINGS & BLUEPRINTS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="pb-6 mb-8 border-b border-[#D8D5CC]">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
            03 • Technical Documentation
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#181817] mt-1">
            Drawings & Zoning Diagrams
          </h2>
          <p className="text-xs sm:text-sm text-[#50504C] mt-1">
            Visualisasi terukur pembagian zona publik, sirkulasi angin, dan penataan void vertikal.
          </p>
        </div>

        <ArchitecturalDrawing
          title={project.drawings[0]?.title || "Ground Level Architectural Plan"}
          projectNumber={project.number}
          projectName={project.title}
        />
      </section>

      {/* 6. SPATIAL STRATEGY & ZONING LEVELS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="bg-[#FAF9F6] border border-[#D8D5CC] p-8 sm:p-12">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
              04 • Zoning Distribution
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817]">
              Spatial Strategy
            </h3>
            <p className="text-sm text-[#50504C] leading-relaxed">
              {project.spatialStrategy.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#D8D5CC]">
            {project.spatialStrategy.levels.map((lvl, idx) => (
              <div key={idx} className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8B7654] block font-semibold">
                  {lvl.levelName}
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#50504C]">
                  {lvl.functions.map((fn, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#8A8880] rounded-full mr-2.5 mt-1.5 shrink-0" />
                      <span>{fn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MATERIAL & ATMOSPHERE (Tactile Board) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="pb-6 mb-8 border-b border-[#D8D5CC]">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
            05 • Materiality
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#181817] mt-1">
            Material & Atmosphere
          </h2>
          <p className="text-xs sm:text-sm text-[#50504C] mt-1">
            Palet material yang dipilih berdasarkan ketahanan cuaca tropis, tekstur taktil, dan penuaan alami yang anggun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.materials.map((mat, idx) => (
            <div key={idx} className="p-6 bg-[#FAF9F6] border border-[#D8D5CC] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#8A8880] block mb-2">
                  {mat.category}
                </span>
                <h4 className="font-editorial text-xl text-[#181817] mb-2 font-normal">
                  {mat.name}
                </h4>
                <p className="text-xs text-[#50504C] leading-relaxed">
                  {mat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. EDITORIAL IMAGE GALLERY */}
      {project.gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="pb-6 mb-12 border-b border-[#D8D5CC]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
              06 • Visual Exploration
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#181817] mt-1">
              Image Gallery
            </h2>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="space-y-3">
                <div
                  className={`relative w-full overflow-hidden bg-[#E5E2D9] ${
                    img.aspect === "portrait"
                      ? "aspect-[4/5] max-w-2xl mx-auto"
                      : img.aspect === "wide"
                      ? "aspect-[16/9] sm:aspect-[21/10]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 1280px"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-[#8A8880] max-w-2xl">
                  <span>Fig. 0{idx + 1}</span>
                  <span className="italic">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. PROJECT OUTCOME */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="p-8 sm:p-12 bg-[#181817] text-[#FAF9F6] max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B7654] font-medium block mb-2">
            07 • Synthesis
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-light text-white mb-3">
            Project Outcome
          </h3>
          <p className="text-sm sm:text-base text-[#D8D5CC] leading-relaxed">
            {project.outcome}
          </p>
        </div>
      </section>

      {/* 10. PREV / NEXT PROJECT NAVIGATION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-[#D8D5CC]">
        <div className="flex items-center justify-between">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col text-left space-y-1"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8880] flex items-center">
              <ArrowLeft className="w-3 h-3 mr-1 transform group-hover:-translate-x-1 transition-transform" />
              Previous Project
            </span>
            <span className="font-editorial text-lg sm:text-xl text-[#181817] group-hover:text-[#8B7654] transition-colors">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col text-right space-y-1"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8880] flex items-center justify-end">
              Next Project
              <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-editorial text-lg sm:text-xl text-[#181817] group-hover:text-[#8B7654] transition-colors">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </section>

      {/* 11. INQUIRY CTA CARD */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        <div className="bg-[#FAF9F6] border border-[#D8D5CC] p-10 sm:p-14 text-center space-y-6">
          <h3 className="font-editorial text-3xl sm:text-4xl text-[#181817]">
            Have a project in mind similar to {project.title}?
          </h3>
          <p className="text-xs sm:text-sm text-[#50504C] max-w-xl mx-auto leading-relaxed">
            Konsultasikan rencana hunian atau ruang komersial Anda bersama tim arsitek ARTUDIO.
          </p>
          <div className="pt-2">
            <Link
              href={`/start-project?projectType=${encodeURIComponent(project.category)}`}
              className="px-8 py-4 bg-[#181817] text-[#FAF9F6] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#333330] transition-colors inline-flex items-center"
            >
              <span>Start Your Project Brief</span>
              <ArrowUpRight className="ml-2 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
