"use client";

import React from "react";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  counts?: Record<string, number>;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  counts = {},
}: ProjectFilterProps) {
  return (
    <div className="relative border-b border-[#D8D5CC]">
      <div className="w-full overflow-x-auto py-2 pr-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center space-x-2 sm:space-x-4 min-w-max whitespace-nowrap">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = counts[cat];

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2.5 text-xs sm:text-[13px] uppercase tracking-[0.16em] font-medium transition-all duration-200 relative whitespace-nowrap ${
                isActive
                  ? "text-[#181817] font-semibold"
                  : "text-[#8A8880] hover:text-[#181817]"
              }`}
            >
              <span>{cat}</span>
              {typeof count === "number" && (
                <span className="ml-1.5 font-mono text-[11px] opacity-70">
                  ({count})
                </span>
              )}
              {isActive && (
                <span className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-[#181817]" />
              )}
            </button>
          );
        })}
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-[#F4F2ED] sm:hidden" />
    </div>
  );
}
