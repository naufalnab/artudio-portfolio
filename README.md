# ARTUDIO DIGITAL SALES PORTFOLIO
**Interior & Architecture — High-Fidelity Interactive Prototype**

> **Tujuan Utama:** Mengubah ARTUDIO dari bisnis yang portofolionya tersebar melalui PDF, WhatsApp, dan materi visual menjadi sebuah **Digital Sales Portfolio** yang kredibel, tenang, dan memiliki alur kualifikasi calon klien terstruktur hingga konsultasi WhatsApp.

---

## 1. Project Status Matrix

### REAL (Production-Ready Architecture)
- **Framework & Engine:** Next.js 16+ App Router dengan React 19, TypeScript, dan Tailwind CSS v4.
- **Editorial Design System:** Palet warna architectural netral (`#F4F2ED`, `#FAF9F6`, `#181817`, `#50504C`, `#8B7654`), tipografi Google Fonts (`Cormorant Garamond` serif & `Plus Jakarta Sans`), dan 12-column architectural grid.
- **Project Catalog & Real-time Filter:** Filter interaktif kategori (*Architecture*, *Interior*, *Renovation*, *Commercial*, *Developer*) dengan perhitungan count otomatis.
- **Publication-grade Case Studies:** Struktur artikel komprehensif (*The Brief*, *Design Response*, *Spatial Strategy*, *Material Board*, *Architectural Drawings CAD/SVG*, *Gallery*, *Prev/Next Project Navigation*).
- **Interactive Project Brief Builder:** 9-step multi-step qualification engine untuk calon klien (*Layanan*, *Lokasi*, *Dimensi Luas Lahan/Bangunan*, *Kesiapan Lahan*, *Kisaran Budget*, *Target Timeline*, *Karakter Visual*, *Catatan & Upload Referensi*, *Kontak*).
- **Mini Lead Qualification & WhatsApp Message Generator:** Halaman konfirmasi ringkasan brief dengan tombol *Continue to WhatsApp* yang otomatis meng-generate teks konsultasi terformat rapi ke nomor resmi.
- **Strict No-Human-Face Policy:** Seluruh visual berfokus pada arsitektur, interior, pencahayaan, material taktil, dan gambar kerja tanpa figur wajah manusia.
- **Comprehensive Technical SEO:** XML Sitemap dinamis (`/sitemap.xml`), Robots (`/robots.txt`), OpenGraph, Twitter Card, dan JSON-LD Organization schema.
- **Mobile First Experience:** Dioptimalkan untuk resolusi 390px dan 360px dengan menu drawer dan floating sticky consultation bar.

### DEMO (Safe Content Placeholders)
- **Sample Projects:** 6 prototipe karya arsitektur realistis (*Casa Sidoarjo*, *Tropical Courtyard House*, *A House in Gresik*, *Nusa Residence*, *Monochrome Workspace*, *Terrace House*) ditandai internal dengan `isDemo: true` (`DEMO_CONTENT`) agar tidak disalahartikan sebagai portofolio nyata sebelum diverifikasi.
- **Studio Founder Profile:** Profil Erfan Radistya, ST dilengkapi penanda resmi: *"Professional biography to be added after verification"*.
- **Contact Details:** Alamat fisik dan nomor telepon menggunakan konfigurasi placeholder yang dapat diubah melalui file konfigurasi atau environment variable.

### FUTURE (Roadmap Phase 2 & Beyond)
- **CMS Integration:** Headless CMS (Sanity / Strapi / Decap) untuk upload portofolio langsung oleh tim ARTUDIO.
- **Client Portal (`/client`):** Area privat klien untuk:
  - *Project Timeline & Gantt Milestones*
  - *Design Approval & Digital Sign-off*
  - *Drawing Repository (DED & 3D)*
  - *Invoice & Milestone Payments*
  - *Weekly Site Inspection Logs*
  - *Revision History & Meeting Notes*
- **Analytics & Conversion Tracking:** Integrasi Google Analytics 4 dan Meta Pixel untuk melacak conversion funnel dari *Discovery* hingga *WhatsApp Lead*.
- **Direct CRM / Lead Database:** Integrasi webhook dari Project Brief ke database (PostgreSQL / Supabase / Notion CRM).

---

## 2. Checklist Data yang Perlu Diminta ke ARTUDIO Sebelum Production

Sebelum website dipublikasikan ke domain resmi klien, mintalah checklist data berikut kepada Bapak **Erfan Radistya, ST**:

- [ ] **Official Logo & Vector Asset** (SVG / AI / EPS)
- [ ] **Brand Guidelines Resmi** (jika ada warna spesifik, standar font, atau logo lockup)
- [ ] **Nomor WhatsApp Resmi Bisnis** (format internasional tanpa `+` atau `0`, contoh: `6281234567890`)
- [ ] **Alamat Email Resmi Domain** (contoh: `halo@artudio.id` atau `consultation@artudio.id`)
- [ ] **Domain Utama** (contoh: `artudio.id` atau `artudio.co.id`)
- [ ] **Akun Media Sosial Resmi** (URL Instagram, LinkedIn, YouTube jika ada)
- [ ] **Alamat Kantor / Studio Fisik** (atau pilihan pernyataan cakupan: *Surabaya & Sidoarjo*)
- [ ] **Biografi & Kredensial Founder** (Erfan Radistya, ST: latar belakang pendidikan, lisensi STRA/IAI, visi studio)
- [ ] **Konfirmasi Layanan & Paket Scope** (verifikasi 5 layanan: Architecture, Interior, Renovation, Developer Planning, Brand Identity)
- [ ] **6–12 Portofolio Proyek Nyata Terbaik:**
  - Foto arsitektur & interior beresolusi tinggi (bebas orang/wajah)
  - Nama resmi proyek
  - Lokasi kota/kawasan
  - Tahun perancangan / terbangun
  - Luas lahan & luas bangunan
  - Lingkup pekerjaan yang dikerjakan ARTUDIO
  - Cerita singkat kebutuhan klien (*The Brief*)
  - Tanggapan desain arsitektur (*Design Response*)
  - Gambar denah / potongan sketsa arsitektur (jika diizinkan dipublikasikan)
  - Daftar material utama
- [ ] **Testimonial Klien** (jika klien mengizinkan kutipan nama dan ulasan kepuasan)

---

## 3. Tech Stack & Local Setup

```bash
# Clone atau masuk ke direktori
cd /Users/mac/Documents/ARTUDIO

# Install dependencies
npm install

# Jalankan server development
npm run dev

# Jalankan production build
npm run build

# Jalankan production server
npm run start
```

### Environment Variables
Buat file `.env.local`:
```env
# Nomor WhatsApp resmi penerima brief (contoh: 6281234567890)
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

---

## 4. Deploy ke Vercel

Aplikasi ini 100% **deploy-ready untuk Vercel**:
1. Push repository ke GitHub / GitLab.
2. Hubungkan repository di [Vercel Dashboard](https://vercel.com).
3. Masukkan Environment Variable `NEXT_PUBLIC_WHATSAPP_NUMBER`.
4. Klik **Deploy**. Vercel akan otomatis melakukan caching aset dan mengoptimalkan gambar WebP/AVIF via `next/image`.
