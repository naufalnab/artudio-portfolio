"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/siteConfig";

export default function MobileStickyCTA() {
  const pathname = usePathname();
  const waUrl = getWhatsAppLink();

  // Hide on the start-project page itself to avoid distracting from form inputs
  if (pathname === "/start-project") {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-[#D8D5CC] shadow-[0_-4px_20px_rgba(24,24,23,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <Link
          href="/start-project"
          className="flex-1 min-h-[46px] bg-[#181817] text-[#FAF9F6] text-[12px] uppercase tracking-[0.14em] font-medium flex items-center justify-center px-4 transition-colors hover:bg-[#333330]"
        >
          <span>Konsultasikan Proyek</span>
          <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
        </Link>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp consultation"
          className="min-h-[46px] min-w-[46px] border border-[#D8D5CC] bg-white text-[#181817] flex items-center justify-center hover:bg-[#F4F2ED] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
