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
    keyOutputs: ["Ringkasan kebutuhan proyek", "Penyelarasan arah dan lingkup awal", "Kerangka budget dan jadwal awal"],
  },
  {
    number: "02",
    title: "Site & Project Analysis",
    subtitle: "Membaca potensi dan batasan tapak fisik.",
    description:
      "Investigasi terhadap orientasi matahari, arah angin dominan, kontur tanah, regulasi sempadan bangunan setempat (GSB/KDB), serta kondisi bangunan di sekelilingnya untuk menghasilkan desain yang adaptif.",
    keyOutputs: ["Pembacaan konteks tapak", "Catatan batasan yang perlu dibahas", "Arah analisis sesuai kebutuhan proyek"],
  },
  {
    number: "03",
    title: "Concept Design",
    subtitle: "Melahirkan arah bentuk dan tata ruang utama.",
    description:
      "Merumuskan zonasi makro, organisasi ruang (spatial layout), massa bangunan, dan visual direction awal. Klien diajak melihat gambaran besar bagaimana ruang akan terasa dan berfungsi.",
    keyOutputs: ["Eksplorasi tata ruang awal", "Studi massa atau visual awal", "Arah desain dan moodboard"],
  },
  {
    number: "04",
    title: "Design Development",
    subtitle: "Menyempurnakan detail, material, dan proporsi.",
    description:
      "Mengembangkan konsep ke tingkat presisi yang lebih tinggi: pemilihan material nyata, detail fasad, integrasi tata cahaya, hingga eksplorasi 3D interior yang realistis.",
    keyOutputs: ["Visualisasi 3D sesuai scope", "Arah material", "Pengembangan denah dan detail"],
  },
  {
    number: "05",
    title: "Technical Documentation",
    subtitle: "Mengembangkan informasi desain sesuai lingkup proyek.",
    description:
      "Pengembangan gambar dan informasi desain sesuai kebutuhan proyek, agar arah implementasi dapat dibahas dengan lebih jelas bersama pihak terkait.",
    keyOutputs: ["Gambar kerja / detail sesuai lingkup proyek", "Detail elemen arsitektur sesuai kebutuhan", "Arahan material & spesifikasi sesuai scope"],
  },
  {
    number: "06",
    title: "Project Support",
    subtitle: "Pendampingan implementasi sesuai kesepakatan scope.",
    description:
      "Review keselarasan berkala terhadap implementasi material dan detail desain di lapangan untuk memastikan kualitas ruang terbangun setia pada dokumen perancangan awal.",
    keyOutputs: ["Dukungan klarifikasi desain", "Pembahasan arah material bila diperlukan", "Review keselarasan desain sesuai kesepakatan"],
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
