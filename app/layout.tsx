import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { siteConfig } from "@/lib/siteConfig";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#181817",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "ARTUDIO — Interior, Architecture & Design Studio",
    template: "%s | ARTUDIO Interior & Architecture",
  },
  description:
    "ARTUDIO adalah studio perencanaan arsitektur, interior, renovasi, pengembangan properti, dan identitas visual di Jakarta Selatan.",
  keywords: [
    "ARTUDIO",
    "Arsitek Jakarta Selatan",
    "Interior Design Jakarta Selatan",
    "Arsitektur Kontemporer",
    "Renovasi Rumah",
    "Developer Planning",
    siteConfig.principal.name,
  ],
  authors: [{ name: "ARTUDIO" }],
  creator: "ARTUDIO",
  openGraph: {
    title: "ARTUDIO Interior & Architecture",
    description:
    "Architecture, interior, renovation, developer planning, dan identitas visual oleh ARTUDIO di Jakarta Selatan.",
    siteName: "ARTUDIO Interior & Architecture",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTUDIO Interior & Architecture",
    description:
      "ARTUDIO — Interior, Architecture & Design Studio di Jakarta Selatan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    alternateName: "ARTUDIO",
    description:
      "Studio perencanaan arsitektur, interior, renovasi, pengembangan properti, dan identitas visual.",
    founder: {
      "@type": "Person",
      name: siteConfig.principal.name,
      jobTitle: siteConfig.principal.role,
    },
    telephone: siteConfig.contact.displayWhatsapp,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: `${siteConfig.address.district}, ${siteConfig.address.city}`,
      addressRegion: siteConfig.address.province,
      addressCountry: "ID",
    },
  };

  return (
    <html lang="id" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F4F2ED] text-[#181817] font-sans antialiased selection:bg-[#181817] selection:text-[#FAF9F6]">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
