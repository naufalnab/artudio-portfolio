import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

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
    default: "ARTUDIO Interior & Architecture — Indonesia",
    template: "%s | ARTUDIO Interior & Architecture",
  },
  description:
    "Studio arsitektur dan interior yang membantu merancang hunian, renovasi, interior, dan pengembangan properti melalui proses desain yang matang.",
  keywords: [
    "ARTUDIO",
    "Arsitek Surabaya",
    "Arsitek Sidoarjo",
    "Interior Design Indonesia",
    "Arsitektur Kontemporer",
    "Renovasi Rumah",
    "Developer Planning",
    "Erfan Radistya",
  ],
  authors: [{ name: "ARTUDIO" }],
  creator: "ARTUDIO",
  openGraph: {
    title: "ARTUDIO Interior & Architecture",
    description:
      "Architecture shaped around the way you live. Desain arsitektur dan interior terukur dari konsep hingga implementasi.",
    siteName: "ARTUDIO Interior & Architecture",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTUDIO Interior & Architecture",
    description:
      "Studio arsitektur dan interior yang membantu merancang hunian, renovasi, dan interior melalui proses terukur.",
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
    name: "ARTUDIO Interior & Architecture",
    alternateName: "ARTUDIO",
    description:
      "Studio arsitektur dan interior yang membantu merancang hunian, renovasi, interior, dan pengembangan properti melalui proses desain yang matang.",
    founder: {
      "@type": "Person",
      name: "Erfan Radistya, ST",
      jobTitle: "Founder / Principal",
    },
    areaServed: ["Surabaya", "Sidoarjo", "Jawa Timur", "Indonesia"],
    priceRange: "$$$$",
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
