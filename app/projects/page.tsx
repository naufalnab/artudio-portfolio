"use client";

import React, { useState, useMemo } from "react";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  "All",
  "Architecture",
  "Interior",
  "Renovation",
  "Commercial",
  "Developer",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.filterCategory === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: projectsData.length,
    };
    CATEGORIES.slice(1).forEach((cat) => {
      counts[cat] = projectsData.filter((p) => p.filterCategory === cat).length;
    });
    return counts;
  }, []);

  return (
    <div className="w-full bg-[#F4F2ED] pt-36 pb-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Title & Editorial Lead */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-2">
            Selected Works
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl text-[#181817] font-normal leading-tight">
            Projects Portfolio
          </h1>
          <p className="text-sm sm:text-base text-[#50504C] mt-3 leading-relaxed">
            Studi konsep untuk memperlihatkan pendekatan ARTUDIO pada arsitektur, interior, renovasi, dan perencanaan pengembangan.
          </p>
          <p className="text-xs text-[#8A8880] mt-3">Sebagian visual dan studi proyek pada versi ini merupakan materi konsep untuk demonstrasi presentasi.</p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-14">
          <ProjectFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            counts={categoryCounts}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              layoutStyle="standard"
            />
          ))}
        </div>

        {/* Empty State fallback (if any) */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-sm text-[#8A8880]">
            Belum ada proyek dalam kategori ini saat ini.
          </div>
        )}

        {/* Bottom Editorial Callout */}
        <div className="mt-28 p-10 bg-[#FAF9F6] border border-[#D8D5CC] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-1">
              Custom Requirements
            </span>
            <h3 className="font-editorial text-2xl text-[#181817]">
              Punya spesifikasi lahan atau kebutuhan unik?
            </h3>
            <p className="text-xs sm:text-sm text-[#50504C] mt-1 max-w-xl">
              Kami siap mendiskusikan studi kelayakan tapak, regulasi bangunan setempat, dan estimasi biaya perancangan.
            </p>
          </div>
          <Link
            href="/start-project"
            className="px-6 py-3.5 bg-[#181817] text-[#FAF9F6] text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap hover:bg-[#333330] transition-colors inline-flex items-center shrink-0"
          >
            <span>Konsultasikan Proyek</span>
            <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
