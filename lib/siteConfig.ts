export interface SiteConfig {
  name: string;
  shortName: string;
  descriptor: string;
  tagline: string;
  subtitle: string;
  principal: { name: string; role: string };
  experience: { display: string; label: string };
  contact: { whatsappNumber: string; displayWhatsapp: string; whatsappUrl: string };
  address: { line1: string; district: string; city: string; province: string };
  navigation: { label: string; href: string }[];
}

const whatsappNumber = "6281316670757";
const defaultMessage = "Assalamu'alaikum, saya ingin berdiskusi mengenai kebutuhan proyek bersama ARTUDIO.";

export const siteConfig: SiteConfig = {
  name: "ARTUDIO",
  shortName: "ARTUDIO",
  descriptor: "Interior & Architecture",
  tagline: "Architecture shaped around the way you live.",
  subtitle: "Lebih dari dua dekade pengalaman dalam perencanaan arsitektur, interior, pengembangan properti, dan identitas visual.",
  principal: { name: "Erfan Radistya, ST", role: "Founder / Principal" },
  experience: { display: "20+", label: "Tahun Pengalaman" },
  contact: {
    whatsappNumber,
    displayWhatsapp: "0813 166 70757",
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`,
  },
  address: {
    line1: "Jl. Timbul IV H, No. 30C",
    district: "Cipedak, Jagakarsa",
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
  },
  navigation: [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Studio", href: "/studio" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],
};

export interface ProjectBriefData {
  projectType: string;
  city: string;
  address?: string;
  landArea?: string;
  buildingArea?: string;
  projectStage: string;
  budgetRange: string;
  timeline: string;
  designDirection: string;
  description: string;
  fullName: string;
  whatsapp: string;
  email?: string;
}

export function generateWhatsAppMessage(brief: ProjectBriefData): string {
  const lines = [
    "Assalamu'alaikum ARTUDIO,",
    "saya ingin berdiskusi mengenai proyek:",
    "",
    `Jenis: ${brief.projectType || "-"}`,
    `Lokasi: ${brief.city || "-"}${brief.address ? ` (${brief.address})` : ""}`,
    `Luas lahan: ${brief.landArea ? `${brief.landArea} m²` : "-"}`,
    `Luas bangunan: ${brief.buildingArea ? `${brief.buildingArea} m²` : "-"}`,
    `Tahap: ${brief.projectStage || "-"}`,
    `Timeline: ${brief.timeline || "-"}`,
    `Kebutuhan: ${brief.description || "-"}`,
  ];
  return encodeURIComponent(lines.join("\n"));
}

export function getWhatsAppLink(brief?: ProjectBriefData): string {
  return brief
    ? `https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage(brief)}`
    : siteConfig.contact.whatsappUrl;
}
