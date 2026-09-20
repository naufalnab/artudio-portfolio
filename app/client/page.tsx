import React from "react";
import Link from "next/link";
import { Lock, FileText, CheckSquare, Clock, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal (Coming Soon)",
  description: "Secure digital workspace for ARTUDIO clients to track project milestones, approve drawings, and review site updates.",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * FUTURE CLIENT PORTAL MODULE
 * Roadmap for next development phase:
 * - Module 1: Project Timeline & Gantt Milestones
 * - Module 2: Design Approval & Sign-off Workflows
 * - Module 3: Centralized CAD / PDF Drawing Repository
 * - Module 4: Invoice & Payment Schedule Tracking
 * - Module 5: Weekly Site Inspection Documentation & 360 Photo Log
 * - Module 6: Revision History & Meeting Minutes
 */

export default function ClientPortalPlaceholderPage() {
  const futureModules = [
    { name: "Project Timeline", desc: "Live Gantt chart tracking design phases and site construction progress." },
    { name: "Design Approval", desc: "Interactive digital sign-off for concept, material board, and 3D perspectives." },
    { name: "Drawings & Files", desc: "Secure cloud vault for high-resolution DED blueprints and engineering specs." },
    { name: "Invoice & Billing", desc: "Clear milestone-based fee schedules, receipts, and payment status." },
    { name: "Site Documentation", desc: "Weekly photo updates and site inspection reports from our architects." },
    { name: "Revision History", desc: "Transparent audit log of design changes and meeting action items." },
  ];

  return (
    <div className="w-full bg-[#F4F2ED] pt-36 pb-28 px-6 sm:px-8 lg:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-xs uppercase tracking-[0.16em] text-[#8A8880] hover:text-[#181817] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          <span>Back to Main Website</span>
        </Link>

        <div className="bg-[#FAF9F6] border border-[#D8D5CC] p-8 sm:p-14 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#8B7654] font-medium">
              <Lock className="w-3.5 h-3.5" />
              <span>Restricted Client Environment</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-5xl text-[#181817]">
              ARTUDIO Client Portal
            </h1>
            <p className="text-sm text-[#50504C] leading-relaxed max-w-xl">
              Ruang kerja kolaboratif privat yang dirancang untuk klien aktif ARTUDIO dalam memantau jadwal perancangan, menyetujui gambar kerja, dan mengunduh berkas proyek.
            </p>
          </div>

          <div className="border-t border-[#D8D5CC] pt-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#8A8880] font-medium mb-6">
              Future Architecture & Modules Roadmap
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {futureModules.map((mod, idx) => (
                <div key={idx} className="p-4 bg-white border border-[#D8D5CC] space-y-1">
                  <div className="text-xs font-semibold text-[#181817] flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#8B7654] rounded-full mr-2" />
                    <span>{mod.name}</span>
                  </div>
                  <p className="text-[11px] text-[#8A8880] leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[#F4F2ED] border border-[#D8D5CC] text-xs text-[#8A8880] flex items-center justify-between">
            <span>Status: In Development (Roadmap Phase 2)</span>
            <span className="font-mono text-[10px]">AUTH_GATE_READY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
