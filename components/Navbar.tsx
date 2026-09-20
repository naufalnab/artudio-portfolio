"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const isDarkHero = pathname === "/"; // On homepage hero, we have architectural imagery

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF9F6]/92 backdrop-blur-md border-b border-[#D8D5CC] shadow-[0_4px_24px_-12px_rgba(24,24,23,0.06)] py-4"
            : isDarkHero
            ? "bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-6"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="/" className="group flex flex-col focus:outline-none">
            <span
              className={`text-xl sm:text-2xl font-semibold tracking-[0.22em] uppercase transition-colors ${
                scrolled
                  ? "text-[#181817]"
                  : isDarkHero
                  ? "text-white group-hover:text-white/90"
                  : "text-[#181817]"
              }`}
            >
              ARTUDIO
            </span>
            <span
              className={`text-[9px] tracking-[0.3em] uppercase -mt-0.5 font-medium transition-colors ${
                scrolled
                  ? "text-[#8A8880]"
                  : isDarkHero
                  ? "text-white/70"
                  : "text-[#8A8880]"
              }`}
            >
              Interior & Architecture
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[13px] tracking-[0.14em] uppercase font-medium transition-colors duration-200 relative py-1 ${
                    scrolled
                      ? isActive
                        ? "text-[#181817] font-semibold"
                        : "text-[#50504C] hover:text-[#181817]"
                      : isDarkHero
                      ? isActive
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-white"
                      : isActive
                      ? "text-[#181817] font-semibold"
                      : "text-[#50504C] hover:text-[#181817]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                        scrolled || !isDarkHero ? "bg-[#181817]" : "bg-white"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              href="/start-project"
              className={`inline-flex items-center text-[12px] uppercase tracking-[0.16em] font-medium px-5 py-2.5 transition-all duration-300 border ${
                scrolled
                  ? "bg-[#181817] text-[#FAF9F6] border-[#181817] hover:bg-[#333330] hover:border-[#333330]"
                  : isDarkHero
                  ? "bg-white text-[#181817] border-white hover:bg-[#FAF9F6] hover:text-[#181817]"
                  : "bg-[#181817] text-[#FAF9F6] border-[#181817] hover:bg-[#333330]"
              }`}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className={`p-2 focus:outline-none transition-colors ${
                scrolled || !isDarkHero ? "text-[#181817]" : "text-white"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF9F6] pt-24 px-6 pb-8 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] pb-2 border-b border-[#D8D5CC]">
              Navigation
            </span>
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-editorial tracking-wide transition-colors ${
                    isActive ? "text-[#181817] font-semibold" : "text-[#50504C] hover:text-[#181817]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[#D8D5CC] flex flex-col space-y-4">
            <Link
              href="/start-project"
              className="w-full text-center py-4 bg-[#181817] text-[#FAF9F6] text-sm uppercase tracking-[0.18em] font-medium"
            >
              Start a Project Brief
            </Link>
            <p className="text-center text-xs text-[#8A8880] tracking-wider">
              {siteConfig.address.district} • {siteConfig.address.city}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
