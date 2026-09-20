export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  tagline: string;
  summary: string;
  idealFor: string[];
  deliverables: string[];
  scopeNote?: string;
}

export const servicesData: ServiceItem[] = [
  {
    number: "01", id: "architecture", title: "Architecture",
    tagline: "Perencanaan arsitektur yang berangkat dari fungsi, kebutuhan pengguna, dan konteks tapak.",
    summary: "Untuk hunian dan bangunan, ARTUDIO menerjemahkan kebutuhan menjadi arah ruang dan karakter bangunan yang terukur.",
    idealFor: ["Pemilik rumah yang akan membangun", "Pemilik bisnis yang membutuhkan ruang berkarakter", "Pemilik lahan di tahap perencanaan awal"],
    deliverables: ["Architectural Planning", "Site Analysis & Spatial Planning", "2D Architectural Drawings", "3D Architectural Visualization", "Design Development", "Facade Development", "Physical Scale Model / Maket bila diperlukan"],
    scopeNote: "Ruang lingkup disusun sesuai kebutuhan dan kesiapan implementasi proyek.",
  },
  {
    number: "02", id: "interior-design", title: "Interior Design",
    tagline: "Tata ruang, material, cahaya, dan proporsi yang bekerja untuk keseharian.",
    summary: "Perencanaan interior yang menyatukan aktivitas pengguna dengan arah material dan pengalaman ruang yang konsisten.",
    idealFor: ["Hunian baru atau ruang existing", "Kafe, retail, dan ruang komersial", "Pemilik yang membutuhkan arahan interior menyeluruh"],
    deliverables: ["Interior Space Planning", "Furniture Layout", "2D Interior Drawings", "3D Interior Visualization", "Material & Finish Direction", "Built-in / Cabinetry Planning", "Lighting Concept"],
    scopeNote: "Dokumentasi desain disesuaikan dengan skala dan kebutuhan ruang.",
  },
  {
    number: "03", id: "renovation", title: "Renovation",
    tagline: "Memperbarui bangunan existing dengan membaca kondisi dan kebutuhan ruang yang baru.",
    summary: "Pendekatan renovasi yang mempertimbangkan ruang yang ada, re-konfigurasi fungsi, serta arah visual baru tanpa janji hasil teknis yang tidak terukur.",
    idealFor: ["Rumah yang membutuhkan fungsi baru", "Ruang komersial yang ingin diperbarui", "Pemilik bangunan existing yang ingin memulai dari assessment"],
    deliverables: ["Existing Space Assessment", "Spatial Reconfiguration", "Interior Renovation", "Facade Refresh / Development", "Design Visualization", "Renovation Drawings", "Design Documentation"],
  },
  {
    number: "04", id: "developer-planning", title: "Developer Planning",
    tagline: "Membaca potensi tapak menjadi konsep pengembangan yang lebih terarah.",
    summary: "Pendampingan awal bagi pemilik lahan atau pengembang untuk membentuk konsep, karakter, dan materi presentasi sebelum keputusan pengembangan dibuat.",
    idealFor: ["Pemilik lahan yang sedang mengeksplorasi potensi", "Pengembang residensial", "Proyek kawasan atau unit yang membutuhkan arah awal"],
    deliverables: ["Initial Land / Site Study", "Site Planning", "Masterplan Concept", "Residential Development Concept", "Unit Typology Exploration", "2D / 3D Visualization", "Development Presentation Material"],
    scopeNote: "ARTUDIO membantu arah perencanaan; kelayakan bisnis, izin, dan hasil penjualan memerlukan pembahasan tersendiri.",
  },
  {
    number: "05", id: "brand-identity", title: "Brand Identity & Creative",
    tagline: "Identitas visual yang membantu bisnis, produk, dan ruang berbicara dalam bahasa yang sama.",
    summary: "ARTUDIO juga mengembangkan karakter visual untuk brand, produk, dan ruang komersial agar pengalaman fisik dan komunikasinya saling menguatkan.",
    idealFor: ["Bisnis atau produk baru", "Kafe, retail, dan hospitality", "Pengembangan properti yang membutuhkan karakter visual"],
    deliverables: ["Brand Identity", "Logo Design", "Product Branding", "Graphic Design", "Visual Communication", "Signage Direction", "Website Design"],
    scopeNote: "Layanan dapat dikombinasikan dengan perencanaan ruang sesuai kebutuhan.",
  },
];
