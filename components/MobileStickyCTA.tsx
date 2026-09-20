"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/siteConfig";

export default function MobileStickyCTA() {
  const pathname = usePathname();
  const [footerVisible, setFooterVisible] = useState(false);
  const waUrl = getWhatsAppLink();
  const isDisabledPage = pathname === "/start-project" || pathname === "/contact";

  useEffect(() => {
    if (isDisabledPage) return;

    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px 88px 0px", threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [isDisabledPage]);

  if (isDisabledPage) return null;

  return (
    <div
      aria-hidden={footerVisible}
      className={`md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-[#D8D5CC] shadow-[0_-4px_20px_rgba(24,24,23,0.08)] p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-[opacity,transform] duration-200 motion-reduce:transition-none ${footerVisible ? "pointer-events-none translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <Link href="/start-project" className="flex-1 min-h-[46px] bg-[#181817] text-[#FAF9F6] text-[12px] uppercase tracking-[0.14em] font-medium flex items-center justify-center px-4 transition-colors hover:bg-[#333330]">
          <span>Konsultasikan Proyek</span>
          <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
        </Link>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" aria-label="Konsultasi WhatsApp ARTUDIO" className="min-h-[46px] min-w-[46px] border border-[#D8D5CC] bg-white text-[#181817] flex items-center justify-center hover:bg-[#F4F2ED] transition-colors">
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
