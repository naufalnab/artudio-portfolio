export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  subtitle: string;
  founder: {
    name: string;
    title: string;
    status: string;
  };
  contact: {
    whatsappNumber: string;
    displayWhatsapp: string;
    email: string;
    locationNote: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "ARTUDIO Interior & Architecture",
  shortName: "ARTUDIO",
  tagline: "Architecture shaped around the way you live.",
  subtitle:
    "ARTUDIO membantu mewujudkan hunian, interior, renovasi, dan pengembangan properti melalui proses desain yang terukur dari konsep hingga implementasi.",
  founder: {
    name: "Erfan Radistya, ST",
    title: "Founder / Principal",
    status: "Professional biography to be added after verification.",
  },
  contact: {
    // Configurable via env variable NEXT_PUBLIC_WHATSAPP_NUMBER
    // Indonesian format without '+' or '0' prefix (e.g. 62812...)
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
    displayWhatsapp: "+62 812-3456-7890 (Placeholder)",
    email: "consultation@artudio.id",
    locationNote: "Surabaya & Sidoarjo, Jawa Timur (Service coverage throughout Indonesia)",
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
    `Halo ARTUDIO, saya ingin berkonsultasi mengenai proyek saya.`,
    ``,
    `*RINGKASAN PROJECT BRIEF*`,
    `• *Nama:* ${brief.fullName || "-"}`,
    `• *Jenis Proyek:* ${brief.projectType || "-"}`,
    `• *Lokasi:* ${brief.city || "-"}${brief.address ? ` (${brief.address})` : ""}`,
    `• *Luas Lahan:* ${brief.landArea ? `${brief.landArea} m²` : "-"}`,
    `• *Luas Bangunan:* ${brief.buildingArea ? `${brief.buildingArea} m²` : "-"}`,
    `• *Tahap Proyek:* ${brief.projectStage || "-"}`,
    `• *Estimasi Budget:* ${brief.budgetRange || "-"}`,
    `• *Rencana Timeline:* ${brief.timeline || "-"}`,
    `• *Preferensi Karakter/Style:* ${brief.designDirection || "-"}`,
    ``,
    `*Catatan Tambahan:*`,
    `${brief.description ? brief.description : "Saya ingin mendiskusikan konsep dan alur kerja lebih lanjut bersama tim ARTUDIO."}`,
    ``,
    `Saya mendapatkan kontak ini melalui website resmi ARTUDIO. Terima kasih.`,
  ];

  return encodeURIComponent(lines.join("\n"));
}

export function getWhatsAppLink(brief?: ProjectBriefData): string {
  const number = siteConfig.contact.whatsappNumber;
  if (!brief) {
    const defaultText = encodeURIComponent(
      "Halo ARTUDIO, saya ingin berdiskusi mengenai rencana proyek arsitektur/interior bersama tim Anda."
    );
    return `https://wa.me/${number}?text=${defaultText}`;
  }
  const text = generateWhatsAppMessage(brief);
  return `https://wa.me/${number}?text=${text}`;
}
