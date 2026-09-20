import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  layoutStyle?: "wide" | "standard" | "compact";
  priority?: boolean;
}

export default function ProjectCard({
  project,
  layoutStyle = "standard",
  priority = false,
}: ProjectCardProps) {
  const isWide = layoutStyle === "wide";

  return (
    <article className="group relative flex flex-col">
      <Link href={`/projects/${project.slug}`} className="block overflow-hidden relative">
        {/* Image Container */}
        <div
          className={`relative overflow-hidden bg-[#E5E2D9] ${
            isWide
              ? "aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10]"
              : layoutStyle === "compact"
              ? "aspect-[4/3]"
              : "aspect-[4/3] sm:aspect-[16/11]"
          }`}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority={priority}
            sizes={
              isWide
                ? "(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            }
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {/* Subtle architectural overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          
          {/* Project Number badge on image */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 font-mono text-[11px] tracking-widest text-[#FAF9F6] bg-[#181817]/60 backdrop-blur-sm px-2.5 py-1">
            {project.number}
          </div>

          {/* Hover View Action */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center text-xs tracking-wider uppercase font-medium bg-[#FAF9F6] text-[#181817] px-3.5 py-2 shadow-sm">
            <span>View Case Study</span>
            <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
          </div>
        </div>
      </Link>

      {/* Metadata & Title */}
      <div className="pt-5 pb-2 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#8A8880] pb-2">
          <span>{project.category}</span>
          <span>{project.location}</span>
        </div>

        <div className="flex items-baseline justify-between gap-4">
          <Link href={`/projects/${project.slug}`} className="group-hover:text-[#50504C] transition-colors">
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] font-normal leading-tight">
              {project.title}
            </h3>
          </Link>
          <span className="font-mono text-xs text-[#8A8880] tracking-wider shrink-0">
            {project.year}
          </span>
        </div>

        {project.tagline && (
          <p className="text-sm text-[#50504C] mt-2 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        )}

        {/* Spatial specs */}
        <div className="mt-4 pt-3 border-t border-[#D8D5CC] flex items-center justify-between text-xs text-[#8A8880] font-mono">
          <span>Lahan: {project.landArea}</span>
          <span>Bangunan: {project.buildingArea}</span>
        </div>
      </div>
    </article>
  );
}
