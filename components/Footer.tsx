import React from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppLink } from "@/lib/siteConfig";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const waUrl = getWhatsAppLink();

  return (
    <footer className="bg-[#161714] text-[#FAF9F6] border-t border-[#262723] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-2xl sm:text-3xl font-semibold tracking-[0.22em] uppercase text-white block">
                ARTUDIO
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8A8880] font-medium block mt-1">
                Interior & Architecture
              </span>
            </div>
            <p className="font-editorial text-2xl sm:text-3xl text-white/90 max-w-lg leading-snug font-light">
              Thoughtful spaces. Built around the way you live.
            </p>
            <p className="text-sm text-[#8A8880] max-w-md leading-relaxed">
              Mendampingi perencanaan arsitektur, interior, renovasi, pengembangan properti, dan identitas visual dengan pendekatan yang tenang dan terarah.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/projects" className="text-sm text-white/80 hover:text-white transition-colors">
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/80 hover:text-white transition-colors">
                  Services & Scope
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-sm text-white/80 hover:text-white transition-colors">
                  Studio & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-sm text-white/80 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/start-project" className="text-sm text-white/80 hover:text-white transition-colors inline-flex items-center">
                  Start Project Brief <ArrowUpRight className="ml-1 w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Consultation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium">
              Consultation
            </h4>
            <div className="space-y-3 text-sm text-[#8A8880]">
              <p>
                <span className="text-white block font-medium text-xs uppercase tracking-wider mb-0.5">Direct Inquiry:</span>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center text-[#FAF9F6]"
                >
                  WhatsApp Consultation <ArrowUpRight className="ml-1 w-3 h-3 text-[#8B7654]" />
                </a>
              </p>
              <p>
                <span className="text-white block font-medium text-xs uppercase tracking-wider mb-0.5">WhatsApp:</span>
                <span className="text-white/90">{siteConfig.contact.displayWhatsapp}</span>
              </p>
              <p>
                <span className="text-white block font-medium text-xs uppercase tracking-wider mb-0.5">Principal / Founder:</span>
                <span className="text-white/90">{siteConfig.principal.name}</span>
              </p>
              <p className="text-xs text-[#8A8880]">
                {siteConfig.address.district}<br />{siteConfig.address.city}, {siteConfig.address.province}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Safety Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#8A8880]">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} ARTUDIO Interior & Architecture. All rights reserved.</p>
            <p className="text-[11px] text-[#8A8880]/80">
              Sebagian visual dan studi proyek pada versi ini merupakan materi konsep untuk demonstrasi presentasi.
            </p>
          </div>
          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider">
            <Link href="/start-project" className="hover:text-white transition-colors">
              Project Brief Builder
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Direct Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
