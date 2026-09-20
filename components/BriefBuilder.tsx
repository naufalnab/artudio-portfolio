"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { siteConfig, getWhatsAppLink, ProjectBriefData } from "@/lib/siteConfig";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Building2,
  Home,
  Hammer,
  Layers,
  Sparkles,
  UploadCloud,
  FileText,
  MessageCircle,
  Edit3,
} from "lucide-react";

interface BriefBuilderProps {
  initialProjectType?: string;
}

const PROJECT_TYPES = [
  { id: "Architecture", label: "Architecture", desc: "Perencanaan bangunan dan ruang dari kebutuhan awal", icon: Home },
  { id: "Interior Design", label: "Interior Design", desc: "Perancangan interior, material & custom furniture", icon: Sparkles },
  { id: "Renovation", label: "Renovation", desc: "Transformasi & peremajaan bangunan eksisting", icon: Hammer },
  { id: "Developer Planning", label: "Developer Planning", desc: "Masterplan kawasan, klaster & prototipe unit", icon: Building2 },
  { id: "Brand Identity & Creative", label: "Brand Identity & Creative", desc: "Logo, visual identity, graphic design, dan website", icon: Layers },
];

const PROJECT_STAGES = [
  "I already own the land / building",
  "Currently looking for property",
  "Existing building to renovate",
  "Project already under construction",
  "Still in preliminary planning",
  "Other",
];

const BUDGET_RANGES = [
  { id: "< Rp500 juta", label: "< Rp500 juta", note: "Cocok untuk interior parsial / renovasi ringan" },
  { id: "Rp500 juta – Rp1 miliar", label: "Rp500 juta – Rp1 miliar", note: "Renovasi menyeluruh / hunian compact" },
  { id: "Rp1 – 2 miliar", label: "Rp1 – 2 miliar", note: "Hunian keluarga menengah / interior komprehensif" },
  { id: "> Rp2 miliar", label: "> Rp2 miliar", note: "Hunian premium / masterplan komersial" },
  { id: "Need consultation", label: "Butuh Konsultasi Estimasi", note: "Ingin mendiskusikan kelayakan budget bersama arsitek" },
];

const TIMELINES = [
  "As soon as possible",
  "< 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "> 12 months",
  "Still exploring",
];

const DESIGN_DIRECTIONS = [
  {
    id: "Contemporary",
    title: "Contemporary",
    desc: "Garis bersih, geometri terukur, pencahayaan dramatis",
    image: "/images/artudio/photo-1600585154340-be6161a56a0c.webp",
  },
  {
    id: "Modern Tropical",
    title: "Modern Tropical",
    desc: "Teritisan lebar, inner courtyard, ventilasi silang alami",
    image: "/images/artudio/photo-1600596542815-ffad4c1539a9.webp",
  },
  {
    id: "Minimal",
    title: "Minimal",
    desc: "Reduksi elemen berlebih, ketenangan monolitik, kemurnian ruang",
    image: "/images/artudio/photo-1600585152220-90363fe7e115.webp",
  },
  {
    id: "Warm Modern",
    title: "Warm Modern",
    desc: "Sentuhan kayu hangat, plester kapur bertekstur, pencahayaan lembut",
    image: "/images/artudio/photo-1618221195710-dd6b41faaea6.webp",
  },
  {
    id: "Industrial Subtle",
    title: "Industrial Subtle",
    desc: "Baja ekspos, semen poles, bukaan kaca berprofil hitam arsitektural",
    image: "/images/artudio/photo-1497366216548-37526070297c.webp",
  },
  {
    id: "Open to Recommendation",
    title: "Rekomendasi Arsitek",
    desc: "Biarkan tim ARTUDIO menganalisis karakter yang paling sesuai untuk tapak Anda",
    image: "/images/artudio/photo-1600607687939-ce8a6c25118c.webp",
  },
];

export default function BriefBuilder({ initialProjectType }: BriefBuilderProps) {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service");
  const [currentStep, setCurrentStep] = useState(1);
  const [isSummaryView, setIsSummaryView] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  // Form State
  const [formData, setFormData] = useState<ProjectBriefData>({
    projectType: requestedService || initialProjectType || "Architecture",
    city: "",
    address: "",
    landArea: "",
    buildingArea: "",
    projectStage: "I already own the land / building",
    budgetRange: "Rp1 – 2 miliar",
    timeline: "3 – 6 months",
    designDirection: "Modern Tropical",
    description: "",
    fullName: "",
    whatsapp: "",
    email: "",
  });

  const totalSteps = 9;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else {
      setIsSummaryView(true);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (isSummaryView) {
      setIsSummaryView(false);
      return;
    }
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handleFileDropMock = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...names]);
    }
  };

  const handleLaunchWhatsApp = () => {
    window.open(getWhatsAppLink(formData), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-[#FAF9F6] border border-[#D8D5CC] p-6 sm:p-10 lg:p-12 shadow-sm">
      {/* Top Step Progress Bar */}
      {!isSummaryView && (
        <div className="mb-10">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#8A8880] mb-3">
            <span>
              Langkah {currentStep} dari {totalSteps}
            </span>
            <span className="font-mono">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full h-1 bg-[#E5E2D9] overflow-hidden">
            <div
              className="h-full bg-[#181817] transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* SUMMARY REVIEW SCREEN (Mini Lead Qualification) */}
      {isSummaryView ? (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="border-b border-[#D8D5CC] pb-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
              Konfirmasi & Kualifikasi Proyek
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#181817] mt-1 font-normal">
              Your Project Brief
            </h2>
            <p className="text-sm text-[#50504C] mt-2 leading-relaxed">
              Berikut adalah ringkasan kebutuhan proyek yang telah Anda susun. Tim ARTUDIO akan membaca brief ini untuk memahami konteks sebelum kita memulai konsultasi via WhatsApp.
            </p>
          </div>

          {/* Qualification Summary Card */}
          <div className="bg-[#F4F2ED] border border-[#D8D5CC] p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-[#D8D5CC]">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block">Nama Calon Klien</span>
                <span className="text-base font-medium text-[#181817]">{formData.fullName || "(Belum diisi)"}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block">Kontak WhatsApp</span>
                <span className="text-base font-medium text-[#181817]">{formData.whatsapp || "(Belum diisi)"}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block">Jenis Proyek</span>
                <span className="font-medium text-[#181817]">{formData.projectType}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block">Lokasi Tapak</span>
                <span className="font-medium text-[#181817]">{formData.city} {formData.address ? `• ${formData.address}` : ""}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block">Estimasi Luas</span>
                <span className="font-mono text-[#181817]">
                  Lahan: {formData.landArea ? `${formData.landArea} m²` : "-"} / Bangunan: {formData.buildingArea ? `${formData.buildingArea} m²` : "-"}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block">Tahap Proyek Saat Ini</span>
                <span className="text-xs text-[#50504C]">{formData.projectStage}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block">Kisaran Budget</span>
                <span className="font-medium text-[#181817]">{formData.budgetRange}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block">Target Timeline</span>
                <span className="font-medium text-[#181817]">{formData.timeline}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8D5CC]">
              <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block mb-1">Arah Karakter & Desain</span>
              <span className="inline-block px-3 py-1 bg-white border border-[#D8D5CC] text-xs font-medium text-[#181817]">
                {formData.designDirection}
              </span>
            </div>

            {formData.description && (
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block mb-1">Catatan Kebutuhan</span>
                <p className="text-xs text-[#50504C] italic leading-relaxed bg-white/70 p-3 border border-[#D8D5CC]">
                  &ldquo;{formData.description}&rdquo;
                </p>
              </div>
            )}

            {uploadedFiles.length > 0 && (
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-wider text-[#8A8880] block mb-1">Dokumen Lampiran (Mock)</span>
                <div className="flex flex-wrap gap-2">
                  {uploadedFiles.map((fn, idx) => (
                    <span key={idx} className="inline-flex items-center text-[11px] bg-white px-2.5 py-1 border border-[#D8D5CC] text-[#50504C]">
                      <FileText className="w-3 h-3 mr-1 text-[#8A8880]" /> {fn}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              onClick={() => setIsSummaryView(false)}
              className="w-full sm:w-auto px-6 py-4 border border-[#D8D5CC] bg-white text-[#50504C] text-xs uppercase tracking-[0.16em] font-medium flex items-center justify-center hover:bg-[#F4F2ED] transition-colors"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              <span>Edit Brief</span>
            </button>

            <button
              onClick={handleLaunchWhatsApp}
              className="w-full sm:flex-1 py-4 bg-[#181817] text-[#FAF9F6] text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center hover:bg-[#333330] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-[#8B7654]" />
              <span>Continue to WhatsApp Consultation</span>
            </button>
          </div>

          <p className="text-center text-[11px] text-[#8A8880] leading-relaxed">
            WhatsApp akan terbuka secara otomatis dengan format brief terstruktur di atas ke nomor resmi ARTUDIO:{" "}
            <span className="font-mono text-[#50504C]">{siteConfig.contact.displayWhatsapp}</span>.
          </p>
        </div>
      ) : (
        /* STEP-BY-STEP FORM SCREENS */
        <div className="space-y-8">
          {/* STEP 1: PROJECT TYPE */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
                  Step 01 • Layanan
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] mt-1 font-normal">
                  Jenis proyek apa yang Anda rencanakan?
                </h3>
                <p className="text-xs sm:text-sm text-[#50504C] mt-1">
                  Pilih kategori utama yang paling mendekati kebutuhan Anda saat ini.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = formData.projectType === type.id;
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type.id })}
                      className={`text-left p-4 border transition-all duration-200 flex items-start space-x-3.5 ${
                        isSelected
                          ? "border-[#181817] bg-[#181817] text-[#FAF9F6]"
                          : "border-[#D8D5CC] bg-white hover:border-[#8A8880] text-[#181817]"
                      }`}
                    >
                      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? "text-[#8B7654]" : "text-[#8A8880]"}`} />
                      <div>
                        <div className="text-sm font-medium tracking-wide">{type.label}</div>
                        <div className={`text-xs mt-1 ${isSelected ? "text-white/70" : "text-[#8A8880]"}`}>
                          {type.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: LOCATION */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
                  Step 02 • Lokasi
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] mt-1 font-normal">
                  Di mana lokasi proyek akan dibangun?
                </h3>
                <p className="text-xs sm:text-sm text-[#50504C] mt-1">
                  Konteks kota dan lingkungan membantu kami mengantisipasi iklim, regulasi perizinan, dan orientasi tapak.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#50504C] mb-1.5 font-medium">
                    Kota / Wilayah Proyek *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Contoh: Jakarta Selatan, Bandung, atau kota proyek"
                    className="w-full px-4 py-3 bg-white border border-[#D8D5CC] text-sm text-[#181817] focus:outline-none focus:border-[#181817]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#50504C] mb-1.5 font-medium">
                    Alamat / Kawasan (Opsional)
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Contoh: Perumahan CitraLand, Jl. Ahmad Yani, atau nama area"
                    className="w-full px-4 py-3 bg-white border border-[#D8D5CC] text-sm text-[#181817] focus:outline-none focus:border-[#181817]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PROJECT SIZE */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
                  Step 03 • Dimensi Ruang
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] mt-1 font-normal">
                  Perkiraan luas lahan dan bangunan
                </h3>
                <p className="text-xs sm:text-sm text-[#50504C] mt-1">
                  Jika belum memiliki ukuran pasti, masukkan estimasi angka terdekat.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#50504C] mb-1.5 font-medium">
                    Luas Lahan (m²)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formData.landArea}
                      onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
                      placeholder="Contoh: 180"
                      className="w-full px-4 py-3 bg-white border border-[#D8D5CC] text-sm text-[#181817] font-mono focus:outline-none focus:border-[#181817]"
                    />
                    <span className="absolute right-4 top-3.5 text-xs text-[#8A8880] font-mono">m²</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#50504C] mb-1.5 font-medium">
                    Perkiraan Luas Bangunan (m²)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formData.buildingArea}
                      onChange={(e) => setFormData({ ...formData, buildingArea: e.target.value })}
                      placeholder="Contoh: 220"
                      className="w-full px-4 py-3 bg-white border border-[#D8D5CC] text-sm text-[#181817] font-mono focus:outline-none focus:border-[#181817]"
                    />
                    <span className="absolute right-4 top-3.5 text-xs text-[#8A8880] font-mono">m²</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: PROJECT STAGE */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
                  Step 04 • Kesiapan Lahan
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] mt-1 font-normal">
                  Sejauh mana status kepemilikan atau kondisi tapak saat ini?
                </h3>
              </div>

              <div className="space-y-2.5 pt-2">
                {PROJECT_STAGES.map((stage) => {
                  const isSelected = formData.projectStage === stage;
                  return (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectStage: stage })}
                      className={`w-full text-left p-4 border transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? "border-[#181817] bg-[#181817] text-[#FAF9F6]"
                          : "border-[#D8D5CC] bg-white hover:border-[#8A8880] text-[#181817]"
                      }`}
                    >
                      <span className="text-sm font-medium">{stage}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#8B7654]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5: BUDGET RANGE */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
                  Step 05 • Anggaran
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] mt-1 font-normal">
                  Kisaran alokasi budget yang Anda siapkan
                </h3>
                <p className="text-xs sm:text-sm text-[#50504C] mt-1">
                  Angka ini membantu kami memilih strategi material dan kompleksitas struktur yang realistis.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {BUDGET_RANGES.map((b) => {
                  const isSelected = formData.budgetRange === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, budgetRange: b.id })}
                      className={`w-full text-left p-4 border transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? "border-[#181817] bg-[#181817] text-[#FAF9F6]"
                          : "border-[#D8D5CC] bg-white hover:border-[#8A8880] text-[#181817]"
                      }`}
                    >
                      <div>
                        <span className="text-sm font-medium tracking-wide block">{b.label}</span>
                        <span className={`text-xs mt-0.5 block ${isSelected ? "text-white/70" : "text-[#8A8880]"}`}>
                          {b.note}
                        </span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#8B7654]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 6: TIMELINE */}
          {currentStep === 6 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
                  Step 06 • Waktu
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] mt-1 font-normal">
                  Kapan rencana konstruksi atau renovasi dimulai?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {TIMELINES.map((time) => {
                  const isSelected = formData.timeline === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: time })}
                      className={`p-4 border text-left transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? "border-[#181817] bg-[#181817] text-[#FAF9F6]"
                          : "border-[#D8D5CC] bg-white hover:border-[#8A8880] text-[#181817]"
                      }`}
                    >
                      <span className="text-sm font-medium">{time}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#8B7654]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 7: DESIGN DIRECTION */}
          {currentStep === 7 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
                  Step 07 • Karakter Visual
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] mt-1 font-normal">
                  Arah karakter visual yang Anda sukai
                </h3>
                <p className="text-xs sm:text-sm text-[#50504C] mt-1">
                  Pilihan ini bersifat inspiratif dan tidak mengunci desain akhir Anda.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {DESIGN_DIRECTIONS.map((dir) => {
                  const isSelected = formData.designDirection === dir.id;
                  return (
                    <button
                      key={dir.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, designDirection: dir.id })}
                      className={`text-left border transition-all duration-200 overflow-hidden flex flex-col group ${
                        isSelected
                          ? "border-[#181817] ring-2 ring-[#181817] bg-[#FAF9F6]"
                          : "border-[#D8D5CC] bg-white hover:border-[#8A8880]"
                      }`}
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E5E2D9]">
                        <Image
                          src={dir.image}
                          alt={dir.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-[#181817] text-white p-1 rounded-full">
                            <Check className="w-3 h-3 text-[#8B7654]" />
                          </div>
                        )}
                      </div>
                      <div className="p-3.5">
                        <div className="text-sm font-semibold text-[#181817]">{dir.title}</div>
                        <div className="text-[11px] text-[#8A8880] mt-1 leading-snug line-clamp-2">
                          {dir.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 8: TELL US MORE & UPLOAD */}
          {currentStep === 8 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
                  Step 08 • Ceritakan Proyek
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] mt-1 font-normal">
                  Ceritakan secara singkat proyek yang Anda bayangkan
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Contoh: Kami ingin rumah dengan banyak bukaan taman dalam, ruang keluarga luas tanpa sekat, pencahayaan alami melimpah, dan ruang kerja privat di lantai 2..."
                    className="w-full p-4 bg-white border border-[#D8D5CC] text-sm text-[#181817] focus:outline-none focus:border-[#181817] leading-relaxed"
                  />
                </div>

                {/* Optional Upload UI for plans, photos, sketches */}
                <div className="border border-dashed border-[#D8D5CC] p-6 bg-[#F4F2ED]/50 text-center">
                  <UploadCloud className="w-8 h-8 text-[#8A8880] mx-auto mb-2" />
                  <p className="text-xs text-[#50504C] font-medium">
                    Unggah denah eksisting, foto tapak, atau referensi (Opsional)
                  </p>
                  <p className="text-[11px] text-[#8A8880] mt-0.5">
                    Mendukung JPG, PNG, PDF (Maks. 25MB)
                  </p>
                  <label className="inline-block mt-3 px-4 py-2 bg-white border border-[#D8D5CC] text-xs text-[#181817] cursor-pointer hover:bg-[#FAF9F6]">
                    <span>Pilih Berkas</span>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileDropMock}
                      className="hidden"
                    />
                  </label>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2 justify-center">
                      {uploadedFiles.map((fn, idx) => (
                        <span key={idx} className="inline-flex items-center text-[10px] bg-white px-2 py-1 border border-[#D8D5CC] text-[#50504C]">
                          <FileText className="w-3 h-3 mr-1 text-[#8A8880]" /> {fn}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 9: CONTACT DETAILS */}
          {currentStep === 9 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block">
                  Step 09 • Informasi Kontak
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#181817] mt-1 font-normal">
                  Ke mana kami dapat menghubungi Anda?
                </h3>
                <p className="text-xs sm:text-sm text-[#50504C] mt-1">
                  Kontak Anda aman dan hanya digunakan untuk konsultasi desain bersama ARTUDIO.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#50504C] mb-1.5 font-medium">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Contoh: Bpk. Andika Pratama"
                    className="w-full px-4 py-3 bg-white border border-[#D8D5CC] text-sm text-[#181817] focus:outline-none focus:border-[#181817]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#50504C] mb-1.5 font-medium">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 bg-white border border-[#D8D5CC] text-sm text-[#181817] font-mono focus:outline-none focus:border-[#181817]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#50504C] mb-1.5 font-medium">
                    Alamat Email (Opsional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full px-4 py-3 bg-white border border-[#D8D5CC] text-sm text-[#181817] focus:outline-none focus:border-[#181817]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-[#D8D5CC]">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-3 border border-[#D8D5CC] bg-white text-[#50504C] text-xs uppercase tracking-[0.16em] font-medium flex items-center hover:bg-[#F4F2ED] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-2" />
                <span>Sebelumnya</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3 bg-[#181817] text-[#FAF9F6] text-xs uppercase tracking-[0.18em] font-medium flex items-center hover:bg-[#333330] transition-colors"
            >
              <span>{currentStep === totalSteps ? "Review Project Brief" : "Selanjutnya"}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
