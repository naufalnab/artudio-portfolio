export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Mendengarkan dan memetakan ekspektasi mendasar.",
    description:
      "Tahap dialog mendalam untuk memahami rutinitas keluarga/bisnis, preferensi estetika, batas anggaran (budget constraints), serta target waktu proyek. Tahap ini meletakkan fondasi yang tepat sebelum garis pertama digambar.",
    keyOutputs: ["Project Brief Document", "Scope of Work Alignment", "Initial Budget & Schedule Framework"],
  },
  {
    number: "02",
    title: "Site & Project Analysis",
    subtitle: "Membaca potensi dan batasan tapak fisik.",
    description:
      "Investigasi terhadap orientasi matahari, arah angin dominan, kontur tanah, regulasi sempadan bangunan setempat (GSB/KDB), serta kondisi bangunan di sekelilingnya untuk menghasilkan desain yang adaptif.",
    keyOutputs: ["Solar Path & Wind Diagram", "Zoning Regulation Check", "Site Constraint Matrix"],
  },
  {
    number: "03",
    title: "Concept Design",
    subtitle: "Melahirkan arah bentuk dan tata ruang utama.",
    description:
      "Merumuskan zonasi makro, organisasi ruang (spatial layout), massa bangunan, dan visual direction awal. Klien diajak melihat gambaran besar bagaimana ruang akan terasa dan berfungsi.",
    keyOutputs: ["Preliminary Spatial Layout", "Massing Study Visuals", "Design Direction & Mood Board"],
  },
  {
    number: "04",
    title: "Design Development",
    subtitle: "Menyempurnakan detail, material, dan proporsi.",
    description:
      "Mengembangkan konsep ke tingkat presisi yang lebih tinggi: pemilihan material nyata, detail fasad, integrasi tata cahaya, hingga eksplorasi 3D interior yang realistis.",
    keyOutputs: ["Photorealistic 3D Visualizations", "Material Palette Selection", "Dimensioned Architectural Plans"],
  },
  {
    number: "05",
    title: "Technical Documentation",
    subtitle: "Panduan presisi bagi kontraktor di lapangan.",
    description:
      "Penyusunan gambar kerja detail (Detailed Engineering Design/DED) yang lengkap dan terukur sehingga pelaksana di lapangan memiliki instruksi yang tidak menimbulkan salah interpretasi.",
    keyOutputs: ["Architectural Working Drawings (DED)", "Door & Window Schedules", "Material Specifications (RKS)"],
  },
  {
    number: "06",
    title: "Project Support",
    subtitle: "Pendampingan implementasi sesuai kesepakatan scope.",
    description:
      "Review keselarasan berkala terhadap implementasi material dan detail desain di lapangan untuk memastikan kualitas ruang terbangun setia pada dokumen perancangan awal.",
    keyOutputs: ["Design Clarification Support", "Material Sample Approval", "Periodic Design Alignment Review"],
  },
];

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  statement: string;
}

export const philosophyPrinciples: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "Context First",
    statement:
      "Desain tidak pernah berdiri sendiri. Setiap garis yang kami tarik merespons iklim tropis, arah cahaya, angin, dan karakter lingkungan sekitar tapak.",
  },
  {
    number: "02",
    title: "Function Before Decoration",
    statement:
      "Keindahan sejati lahir dari ruang yang bekerja secara anggun. Kami mengutamakan kenyamanan sirkulasi, proporsi ergonomis, dan kemudahan hidup penghuni di atas ornamen instan.",
  },
  {
    number: "03",
    title: "Clear Design Process",
    statement:
      "Membangun adalah keputusan besar. Kami menghadirkan alur kerja terstruktur dan transparan pada setiap fase agar klien selalu memahami keputusan yang diambil tanpa rasa cemas.",
  },
  {
    number: "04",
    title: "Detail Matters",
    statement:
      "Dari pertemuan antara dua material, celah bayangan (shadow gaps), hingga jatuhnya cahaya alami di dinding — detail halus inilah yang menciptakan ketenangan dan kedewasaan ruang.",
  },
  {
    number: "05",
    title: "Designed to Be Built",
    statement:
      "Karya yang bermakna adalah karya yang dapat direalisasikan dengan baik. Kami merancang dengan kesadaran penuh terhadap logika konstruksi, efisiensi material, dan anggaran yang rasional.",
  },
];
