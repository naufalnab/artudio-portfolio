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
    number: "01",
    id: "architecture",
    title: "Architecture",
    tagline: "Perencanaan menyeluruh dari pemahaman lahan hingga dokumen konstruksi presisi.",
    summary:
      "Perencanaan hunian dan bangunan komersial mulai dari konsep awal, zonasi spasial, studi orientasi matahari dan angin, eksplorasi fasad, hingga paket drawing development yang siap untuk dibangun.",
    idealFor: [
      "Pemilik tanah yang ingin membangun rumah tinggal baru",
      "Keluarga yang menginginkan hunian dirancang khusus sesuai gaya hidup",
      "Pemilik bisnis yang memerlukan bangunan fungsional & berkarakter",
    ],
    deliverables: [
      "Site & Solar-Wind Contextual Analysis",
      "Spatial Layout & Zoning Plan",
      "3D Architectural Concept & Massing Study",
      "Facade & Material Detailing",
      "Comprehensive Architectural Working Drawings (DED)",
      "Outline Specification of Materials (RKS)",
    ],
    scopeNote: "Fokus pada perancangan arsitektur terukur. Dapat dikombinasikan dengan perencanaan interior.",
  },
  {
    number: "02",
    id: "interior-design",
    title: "Interior Design",
    tagline: "Harmoni fungsi, material alami, tata cahaya, dan furnitur kustom.",
    summary:
      "Perancangan interior yang mengintegrasikan alur gerak penghuni, pemilihan material berkualitas, pencahayaan arsitektural (ambient & task lighting), serta furnitur kustom yang menyatu dengan proporsi ruang.",
    idealFor: [
      "Pemilik rumah baru yang ingin mengisi ruang secara proporsional",
      "Apartemen & penthouse yang membutuhkan efisiensi penyimpanan maksimal",
      "Showroom, cafe, restoran, dan kantor modern",
    ],
    deliverables: [
      "Spatial Moodboard & Material Sample Board",
      "Interior Layout & Furniture Placement Plan",
      "3D Photorealistic Interior Visualizations",
      "Custom Built-in Joinery & Cabinetry Detail Drawings",
      "Architectural Lighting & Ceiling Plan",
      "Sanitary & Finish Schedule Documentation",
    ],
    scopeNote: "Desain mengutamakan ketenangan visual dan kemudahan perawatan dalam jangka panjang.",
  },
  {
    number: "03",
    id: "renovation",
    title: "Renovation",
    tagline: "Meremajakan bangunan lama dengan efisiensi struktural dan nilai ruang baru.",
    summary:
      "Transformasi bangunan existing melalui evaluasi kondisi fisik, restrukturisasi bukaan cahaya, pembenahan sirkulasi udara, dan penyegaran estetika fasad tanpa pemborosan pembongkaran yang tidak perlu.",
    idealFor: [
      "Pemilik rumah lama yang ingin suasana lebih terang, lapang, dan modern",
      "Keluarga yang membutuhkan penambahan kamar atau fungsi ruang baru",
      "Bangunan komersial yang membutuhkan repositioning brand & fungsi",
    ],
    deliverables: [
      "Existing Structure & Utility Assessment",
      "Demolition vs Retention Strategy Plan",
      "Spatial Re-allocation & Light Well Strategy",
      "Facade Modernization Design",
      "Renovation Phasing & Technical Drawing Sets",
    ],
    scopeNote: "Membantu menekan biaya hingga 30-40% dibandingkan membongkar total dari nol.",
  },
  {
    number: "04",
    id: "developer-planning",
    title: "Developer Planning",
    tagline: "Masterplanning kawasan dan tipologi unit bernilai investasi tinggi.",
    summary:
      "Perencanaan konsep hunian komersial, masterplan klaster perumahan, desain prototipe unit modular yang efisien dibangun, gerbang kawasan ikonik, serta strategi lanskap yang meningkatkan daya jual properti.",
    idealFor: [
      "Developer properti perumahan skala menengah hingga klaster privat",
      "Pemilik lahan yang ingin memaksimalkan potensi nilai lahan",
      "Property investors & pengembang kawasan wisata/hospitality",
    ],
    deliverables: [
      "Cluster Masterplan & Road Hierarchy Network",
      "Unit Typology Prototypes (Compact & Premier Models)",
      "Green Spine & Landscape Guidelines",
      "Iconic Gate, Clubhouse, & Amenity Architecture",
      "Sales Marketing Architectural Renderings Pack",
    ],
    scopeNote: "Berorientasi pada ROI pengembang dan kenyamanan hidup penghuni secara seimbang.",
  },
  {
    number: "05",
    id: "brand-identity",
    title: "Brand Identity",
    tagline: "Kesinambungan utuh antara karakter bisnis dan pengalaman ruang fisik.",
    summary:
      "Pengembangan identitas visual untuk bisnis atau proyek properti yang memerlukan keselarasan antara desain grafis (logo, tipografi, signage gedung, wayfinding) dan karakter ruang arsitekturalnya.",
    idealFor: [
      "Kawasan perumahan baru yang membutuhkan nama dan identitas branding klaster",
      "Kafe, butik, restoran, dan hospitality yang mengandalkan keunikan konsep",
      "Perusahaan profesional yang ingin kantornya mencerminkan DNA brand",
    ],
    deliverables: [
      "Brand Positioning & Naming Direction",
      "Logo System & Typography Guidelines",
      "Environmental Signage & Architectural Wayfinding",
      "Brand Color Palette aligned with Physical Materials",
      "Brand Application Guide (Stationery & Digital)",
    ],
    scopeNote: "Dirancang secara terpadu dengan tim perancang arsitektur & interior ARTUDIO.",
  },
];
