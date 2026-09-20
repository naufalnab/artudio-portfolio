import React from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppLink } from "@/lib/siteConfig";
import { ArrowUpRight, MessageCircle, Mail, MapPin, ShieldAlert, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description:
    "Hubungi ARTUDIO Interior & Architecture untuk konsultasi proyek hunian, renovasi, dan perancangan kawasan properti.",
};

export default function ContactPage() {
  const waUrl = getWhatsAppLink();

  const faqs = [
    {
      q: "Apakah saya harus sudah memiliki denah sebelum konsultasi?",
      a: "Tidak perlu. Sebagian besar klien datang hanya membawa batas ukuran tanah atau keinginan suasana hunian. ARTUDIO akan membantu memetakan kebutuhan ruang dari nol.",
    },
    {
      q: "Bagaimana jika proyek saya berada di luar Surabaya / Sidoarjo?",
      a: "ARTUDIO melayani proyek arsitektur dan interior di seluruh Indonesia. Tahap awal dan asistensi desain dapat dilakukan secara berkala melalui online meeting terstruktur, dengan kunjungan tapak terjadwal.",
    },
    {
      q: "Apakah renovasi rumah dengan budget terbatas bisa dikerjakan?",
      a: "Bisa. Pada tahap awal, kami akan mendiskusikan skala prioritas ruang yang paling mendesak untuk diperbaiki agar budget renovasi Anda efisien dan tepat sasaran.",
    },
  ];

  return (
    <div className="w-full bg-[#F4F2ED] pt-36 pb-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-2">
            Consultation Channels
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl text-[#181817] font-normal leading-tight">
            Let&apos;s discuss your project.
          </h1>
          <p className="text-sm sm:text-base text-[#50504C] mt-3 leading-relaxed">
            Kami siap mendengar visi ruang Anda. Pilih cara komunikasi yang paling nyaman bagi Anda di bawah ini.
          </p>
        </div>

        {/* 3 Main Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Project Brief Builder */}
          <div className="p-8 bg-[#FAF9F6] border border-[#D8D5CC] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B7654] font-medium block">
                Recommended Step
              </span>
              <h2 className="font-editorial text-2xl text-[#181817]">
                Start Project Brief
              </h2>
              <p className="text-xs sm:text-sm text-[#50504C] leading-relaxed">
                Panduan interaktif 2 menit untuk merangkum jenis ruang, estimasi ukuran lahan, budget, dan karakter visual Anda.
              </p>
            </div>

            <Link
              href="/start-project"
              className="w-full text-center py-3.5 bg-[#181817] text-[#FAF9F6] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#333330] transition-colors inline-flex items-center justify-center"
            >
              <span>Isi Form Brief</span>
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Direct WhatsApp */}
          <div className="p-8 bg-[#FAF9F6] border border-[#D8D5CC] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8880] font-medium block">
                Instant Chat
              </span>
              <h2 className="font-editorial text-2xl text-[#181817]">
                WhatsApp Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#50504C] leading-relaxed">
                Hubungi nomor konsultasi resmi tim arsitek ARTUDIO untuk mengajukan pertanyaan langsung atau jadwal temu diskusi.
              </p>
              <div className="pt-2 font-mono text-xs text-[#181817] font-medium">
                {siteConfig.contact.displayWhatsapp}
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 border border-[#181817] bg-white text-[#181817] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#F4F2ED] transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-[#8B7654]" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Email Inquiry */}
          <div className="p-8 bg-[#FAF9F6] border border-[#D8D5CC] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8880] font-medium block">
                Official Correspondence
              </span>
              <h2 className="font-editorial text-2xl text-[#181817]">
                Email Correspondence
              </h2>
              <p className="text-xs sm:text-sm text-[#50504C] leading-relaxed">
                Kirimkan berkas proposal kawasan, dokumen masterplan, atau undangan tender desain komersial melalui surat elektronik.
              </p>
              <div className="pt-2 font-mono text-xs text-[#181817] font-medium">
                {siteConfig.contact.email}
              </div>
            </div>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="w-full text-center py-3.5 border border-[#D8D5CC] bg-white text-[#50504C] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#F4F2ED] transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-[#8A8880]" />
              <span>Kirim Email</span>
            </a>
          </div>
        </div>

        {/* Location & Safety Transparency Note */}
        <div className="p-8 bg-[#FAF9F6] border border-[#D8D5CC] mb-20">
          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 text-[#8B7654] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-editorial text-xl text-[#181817]">
                Cakupan Wilayah Layanan Studio
              </h3>
              <p className="text-xs sm:text-sm text-[#50504C] leading-relaxed">
                {siteConfig.contact.locationNote}
              </p>
              <p className="text-[11px] text-[#8A8880] pt-1">
                * Kunjungan fisik studio diatur melalui janji temu konsultasi terlebih dahulu. Alamat fisik detail akan dikonfirmasi secara resmi setelah verifikasi jadwal meeting.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section answering client hesitation */}
        <section className="border-t border-[#D8D5CC] pt-16">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8880] font-medium block mb-2">
              Common Questions
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#181817]">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-[#FAF9F6] border border-[#D8D5CC] space-y-3">
                <div className="flex items-center text-xs font-mono text-[#8B7654] font-semibold">
                  <span>0{idx + 1}</span>
                </div>
                <h4 className="font-editorial text-lg text-[#181817] leading-snug">
                  {faq.q}
                </h4>
                <p className="text-xs text-[#50504C] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
