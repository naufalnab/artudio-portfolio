/**
 * ARTUDIO DIGITAL SALES PORTFOLIO
 * Project Data Architecture
 * 
 * DEMO_CONTENT NOTICE:
 * All projects in this dataset are realistic architectural case-study prototypes
 * crafted for presentation and UX workflow demonstration.
 * They are explicitly marked with `isDemo: true` to avoid misrepresenting portfolio work.
 */

export interface ProjectMaterial {
  name: string;
  category: string;
  description: string;
}

export interface ProjectDrawing {
  title: string;
  subtitle: string;
  aspect: string;
  type: "ground-plan" | "section" | "zoning-diagram" | "isometric";
}

export interface ProjectItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  location: string;
  year: string;
  category: string;
  filterCategory: "Architecture" | "Interior" | "Renovation" | "Commercial" | "Developer";
  scope: string[];
  landArea: string;
  buildingArea: string;
  status: "Completed Prototype" | "Concept Development" | "Built Work (Demo)";
  isDemo: boolean;
  thumbnail: string;
  heroImage: string;
  gallery: {
    url: string;
    caption: string;
    aspect?: "landscape" | "portrait" | "wide";
  }[];
  brief: {
    clientNeed: string;
    siteConstraints: string;
    keyChallenge: string;
  };
  designResponse: {
    concept: string;
    spatialLogic: string;
    lightAndAir: string;
  };
  spatialStrategy: {
    summary: string;
    levels: {
      levelName: string;
      functions: string[];
    }[];
  };
  materials: ProjectMaterial[];
  drawings: ProjectDrawing[];
  outcome: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-01",
    number: "01",
    slug: "casa-sidoarjo",
    title: "Casa Sidoarjo",
    tagline: "A private residential sanctuary calibrated for tropical climate, light shafts, and tactile calm.",
    location: "Sidoarjo, East Java",
    year: "2024",
    category: "Residential Architecture",
    filterCategory: "Architecture",
    scope: ["Concept Design", "Zoning Strategy", "Architectural Drawings", "Facade Development"],
    landArea: "210 m²",
    buildingArea: "275 m²",
    status: "Completed Prototype",
    isDemo: true, // DEMO_CONTENT
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
        caption: "Main living pavillion with double-height ceiling and seamless terrace connection",
        aspect: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        caption: "Dining area adjacent to the internal light well and stone gravel courtyard",
        aspect: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        caption: "Tactile kitchen island in honed travertine with concealed architectural joinery",
        aspect: "landscape",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        caption: "Monolithic staircase formed with board-marked concrete and brass handrail recessed detail",
        aspect: "landscape",
      },
    ],
    brief: {
      clientNeed:
        "Klien menginginkan hunian keluarga 4 orang yang tenang dan tidak terasa sempit di lahan perkotaan Sidoarjo. Prioritas utama adalah sirkulasi udara alami dan privasi maksimal dari jalan raya tanpa mengorbankan masuknya cahaya matahari.",
      siteConstraints:
        "Lahan menghadap ke arah barat dengan intensitas panas sore yang signifikan, serta kepadatan bangunan sekitar yang membatasi bukaan samping konvensional.",
      keyChallenge:
        "Bagaimana mereduksi radiasi panas barat sekaligus menciptakan ruang tengah yang lapang dan sejuk secara pasif sepanjang hari.",
    },
    designResponse: {
      concept:
        "ARTUDIO menerapkan prinsip Inward-Facing Courtyard — membalikkan orientasi bukaan dari jalan luar ke arah taman dalam dan light-well tengah. Fasad luar difungsikan sebagai buffer termal monolitik.",
      spatialLogic:
        "Lantai dasar didedikasikan untuk ruang berkumpul keluarga tanpa sekat kaku (open-plan) yang langsung mengalir ke inner courtyard. Lantai atas merupakan zona privat kamar tidur yang dinaungi kantilever peneduh.",
      lightAndAir:
        "Skylight tersembunyi dan kisi-kisi ventilasi silang (cross-ventilation louvers) di bagian atap menarik udara panas naik (stack effect), mempertahankan kesejukan ruangan secara konstan.",
    },
    spatialStrategy: {
      summary:
        "Zoning 3 lapis: Zona Publik (Carport & Foyer Luar), Zona Semi-Publik Terbuka (Ruang Keluarga & Dapur Courtyard), dan Zona Privat di lantai atas.",
      levels: [
        {
          levelName: "Ground Level (140 m²)",
          functions: ["Double Carport Buffer", "Entrance Gallery", "Living & Dining Pavillion", "Internal Courtyard", "Service & Wet Kitchen"],
        },
        {
          levelName: "Upper Level (135 m²)",
          functions: ["Master Bedroom Suite with Ensuite", "Two Children Bedrooms", "Study Alcove", "Laundry Terrace"],
        },
      ],
    },
    materials: [
      { name: "Honed Roman Travertine", category: "Floor & Wall", description: "Batu alam bernuansa hangat dengan tekstur pori halus yang tidak memantulkan silau." },
      { name: "Cast-in-Place Concrete", category: "Structure & Accent", description: "Beton ekspos dengan guratan kayu bekisting alami pada dinding aksen tangga." },
      { name: "Smoked Solid White Oak", category: "Joinery & Doors", description: "Kayu oak berserat lurus dengan finishing doff matte untuk pintu dan kisi arsitektural." },
      { name: "Anodized Dark Bronze Metal", category: "Fenestration", description: "Profil kusen aluminium berprofil slimline dengan ketahanan cuaca tropis maksimal." },
    ],
    drawings: [
      { title: "Ground Floor Architectural Plan", subtitle: "Zoning distribution, inner courtyard transition, and structural grid", aspect: "16:9", type: "ground-plan" },
      { title: "Longitudinal Cross-Section", subtitle: "Stack effect ventilation chimney and solar altitude angle analysis", aspect: "16:9", type: "section" },
    ],
    outcome:
      "Casa Sidoarjo mendefinisikan hunian tropis kontemporer yang hening, efisien energi, dan memiliki identitas arsitektur yang kuat tanpa elemen dekoratif berlebihan.",
  },
  {
    id: "proj-02",
    number: "02",
    slug: "tropical-courtyard-house",
    title: "Tropical Courtyard House",
    tagline: "Bridging lush natural landscape with minimalist interior architecture in West Surabaya.",
    location: "Surabaya, East Java",
    year: "2024",
    category: "Architecture + Interior",
    filterCategory: "Architecture",
    scope: ["Masterplan", "Architecture Design", "Custom Interior Built-ins", "Lighting Specification"],
    landArea: "320 m²",
    buildingArea: "360 m²",
    status: "Completed Prototype",
    isDemo: true, // DEMO_CONTENT
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80",
        caption: "Courtyard reflection pool serving as an evaporative cooling element",
        aspect: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
        caption: "Library lounge flanked by continuous floor-to-ceiling glass fenestration",
        aspect: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
        caption: "Minimalist master bedroom overlooking the private bamboo perimeter",
        aspect: "landscape",
      },
    ],
    brief: {
      clientNeed:
        "Sebuah kediaman untuk pasangan yang menginginkan koneksi visual langsung ke pepohonan dan air di setiap sudut rumah, dengan interior yang rapi dan bebas dari kekacauan visual.",
      siteConstraints:
        "Bentuk tapak memanjang (hook) di kawasan perumahan modern Surabaya Barat dengan kebutuhan proteksi angin kencang saat musim hujan.",
      keyChallenge:
        "Menyandingkan keterbukaan kaca luas dengan kenyamanan termal iklim tropis pesisir Surabaya.",
    },
    designResponse: {
      concept:
        "Pemberian overhanging eave (teritisan lebar 2.4 meter) yang membungkus volume bangunan, melindungi dinding kaca dari terpaan air hujan dan radiasi terik.",
      spatialLogic:
        "Massa bangunan dibagi menjadi dua paviliun yang dihubungkan oleh jembatan kaca di atas reflection pool seluas 45 m².",
      lightAndAir:
        "Air kolam berfungsi sebagai pendingin evaporatif alami saat angin berhembus menembus ruang keluarga menuju courtyard belakang.",
    },
    spatialStrategy: {
      summary:
        "Dual-Pavilion Layout: Paviliun Publik (Living, Dining, Entertaining Terrace) dan Paviliun Privat (Master Bedroom, Wellness Studio, Suite Anak).",
      levels: [
        {
          levelName: "Level 1 (200 m²)",
          functions: ["Water Court Entryway", "Grand Living Hall", "Pantry Lounge", "Guest Bedroom Suite", "Garden Terrace"],
        },
        {
          levelName: "Level 2 (160 m²)",
          functions: ["Master Wing with Private Balcony", "Walk-in Wardrobe", "Upper Family Room", "Kids Sanctuary"],
        },
      ],
    },
    materials: [
      { name: "Batu Candi Hitam Honed", category: "Exterior Base", description: "Batu alam lokal Jawa Timur dengan ketahanan lumut dan warna pekat bertekstur." },
      { name: "Ulin Solid Hardwood Decking", category: "Landscape", description: "Kayu ulin Kalimantan tahan air dan rayap untuk dek kolam renang dan teras terbuka." },
      { name: "Microcement Seamless Flooring", category: "Interior", description: "Lantai tanpa nat (seamless) bergradasi warm grey untuk kontinuitas visual ruang." },
      { name: "Low-E Insulated Double Glazing", category: "Glass", description: "Kaca ganda penahan panas inframerah untuk bukaan kaca format besar." },
    ],
    drawings: [
      { title: "Master Spatial Plan & Reflection Pool", subtitle: "Dual-pavilion circulation and cross-ventilation axes", aspect: "16:9", type: "ground-plan" },
    ],
    outcome:
      "Kombinasi air, kayu, dan bayangan kanopi menciptakan atmosfer peristirahatan yang damai di tengah iklim Surabaya yang dinamis.",
  },
  {
    id: "proj-03",
    number: "03",
    slug: "a-house-in-gresik",
    title: "A House in Gresik",
    tagline: "Adaptive architectural renovation restructuring structural efficiency and daylight penetration.",
    location: "Gresik, East Java",
    year: "2023",
    category: "Residential Renovation",
    filterCategory: "Renovation",
    scope: ["Structural Retrofitting", "Spatial Reorganization", "Facade Modernization", "Interior Refinement"],
    landArea: "180 m²",
    buildingArea: "220 m²",
    status: "Completed Prototype",
    isDemo: true, // DEMO_CONTENT
    thumbnail: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
    heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80",
        caption: "Restructured open dining area previously blocked by load-bearing interior partition",
        aspect: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80",
        caption: "New vertical steel staircase allowing natural light to cascade to the lower floor",
        aspect: "portrait",
      },
    ],
    brief: {
      clientNeed:
        "Rumah tinggal 2 lantai warisan keluarga yang gelap, lembap, dan memiliki pembagian ruangan bersekat-sekat yang sudah tidak relevan dengan kebutuhan gaya hidup masa kini.",
      siteConstraints:
        "Struktur kolom utama existing harus dipertahankan secara selektif demi efisiensi budget konstruksi dan legalitas batas dinding tetangga.",
      keyChallenge:
        "Mengubah interior yang semula gelap menjadi terang benderang tanpa harus merobohkan 100% bangunan lama.",
    },
    designResponse: {
      concept:
        "Surgical Renovation — ARTUDIO membuka inti bangunan di bagian tengah untuk membentuk light chimney vertikal dan mengganti dinding bata masif dengan balok baja struktural.",
      spatialLogic:
        "Menghubungkan ruang tamu, ruang makan, dan taman belakang menjadi satu poros pandang linier (visual axis) yang lapang.",
      lightAndAir:
        "Pemberian skylight kaca berinsulasi di atas void tangga membanjiri ruang keluarga tengah dengan cahaya alami 8 jam sehari tanpa lampu menyala.",
    },
    spatialStrategy: {
      summary:
        "Spatial Simplification: Memangkas 4 sekat non-struktural menjadi open-living terintegrasi dan memperbaharui fasad dengan kisi aluminium ventilatif.",
      levels: [
        {
          levelName: "Renovated Ground Floor (110 m²)",
          functions: ["Open Porch & Carport", "Linear Living & Dining", "Integrated Island Kitchen", "Inner Green Pocket", "Powder Room"],
        },
        {
          levelName: "Renovated Upper Floor (110 m²)",
          functions: ["Light-well Void Bridge", "Master Suite with Walk-in Closet", "Study & Library Room", "Secondary Bedroom"],
        },
      ],
    },
    materials: [
      { name: "Structural Steel I-Beam", category: "Structure", description: "Baja profil struktural yang dibiarkan terekspos dengan coating anti-karat doff." },
      { name: "Recycled Teak Wood Planks", category: "Ceiling & Paneling", description: "Kayu jati daur ulang dari kusen lama yang dihaluskan kembali untuk aksen plafon." },
      { name: "Perforated Aluminum Screen", category: "Facade", description: "Secondary skin penangkal panas sekaligus pengaman jendela lantai dua." },
    ],
    drawings: [
      { title: "Before vs After Demolition & New Structural Grid", subtitle: "Structural retention mapping and light chimney insertion", aspect: "16:9", type: "ground-plan" },
    ],
    outcome:
      "Transformasi bangunan berusia 25 tahun menjadi hunian kontemporer bernilai estetika dan fungsional tinggi dengan efisiensi biaya hingga 40% dibanding bangun baru.",
  },
  {
    id: "proj-04",
    number: "04",
    slug: "nusa-residence",
    title: "Nusa Residence Masterplan",
    tagline: "High-density residential enclave masterplanning prioritizing green microclimate and architectural coherence.",
    location: "Sidoarjo Outer Ring, East Java",
    year: "2024",
    category: "Developer Planning",
    filterCategory: "Developer",
    scope: ["Masterplanning", "Prototype Unit Typology", "Landscape Strategy", "Gate & Identity Architecture"],
    landArea: "12,500 m²",
    buildingArea: "Typology 90 m² – 160 m²",
    status: "Concept Development",
    isDemo: true, // DEMO_CONTENT
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        caption: "Modular prototype facade with standardized structural bays and natural timber louvers",
        aspect: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
        caption: "Pedestrian-first central green spine connecting all residential cul-de-sacs",
        aspect: "portrait",
      },
    ],
    brief: {
      clientNeed:
        "Developer properti membutuhkan perencanaan masterplan kawasan 45 unit hunian klaster berkonsep tropis modern yang memiliki daya saing tinggi bagi segmen pembeli profesional muda.",
      siteConstraints:
        "Bentuk tanah memanjang dengan satu akses masuk utama dari jalan arteri dan kontur tanah rawa yang membutuhkan perhitungan drainase presisi.",
      keyChallenge:
        "Mencapai densitas unit yang menguntungkan bagi developer tanpa menurunkan kualitas ruang terbuka hijau dan sirkulasi kendaraan.",
    },
    designResponse: {
      concept:
        "Green Spine Pedestrian Axis — Menempatkan ruang hijau terpusat di tengah klaster sebagai paru-paru lingkungan dan sarana interaksi komunitas warga.",
      spatialLogic:
        "Dua tipologi unit (Compact 90 m² dan Premier 160 m²) yang menggunakan modul struktur 3.5 meter terstandarisasi untuk menekan biaya konstruksi massal.",
      lightAndAir:
        "Setiap unit dirancang memiliki courtyard belakang selebar 2 meter yang terhubung secara visual ke ruang keluarga.",
    },
    spatialStrategy: {
      summary:
        "Zoning Kawasan: Gerbang Ikonik & Security Checkpoint, Central Linear Park, 4 Blok Klaster Cul-de-sac, dan Club Pavilion Komunal.",
      levels: [
        {
          levelName: "Prototype Unit Type A (160 m²)",
          functions: ["Carport 2 Mobil", "Living & Dining Courtyard", "3 Bedrooms + 1 Service", "Rooftop Drying Area"],
        },
        {
          levelName: "Prototype Unit Type B (90 m²)",
          functions: ["Carport 1 Mobil", "Compact Open Plan", "2 Bedrooms", "Flexible Inner Garden"],
        },
      ],
    },
    materials: [
      { name: "Terracotta Facing Bricks", category: "Facade", description: "Bata ekspos lokal bermutu tinggi dengan pola susun bayang-bayang geometris." },
      { name: "Porous Concrete Pavement", category: "Infrastructure", description: "Paving blok berpori untuk resapan air hujan maksimal ke dalam tanah kawasan." },
      { name: "Precast Concrete Louvers", category: "Sun Shade", description: "Sirip beton pracetak modular yang tahan cuaca dan minim perawatan jangka panjang." },
    ],
    drawings: [
      { title: "Masterplan Zoning & Circulation Grid", subtitle: "Cul-de-sac traffic calming and pedestrian priority network", aspect: "16:9", type: "zoning-diagram" },
    ],
    outcome:
      "Perencanaan kawasan yang mengoptimalkan ROI developer hingga 18% lebih tinggi berkat diferensiasi arsitektur yang kuat dan ramah lingkungan.",
  },
  {
    id: "proj-05",
    number: "05",
    slug: "monochrome-workspace",
    title: "Monochrome Workspace",
    tagline: "Restrained acoustic and spatial design for an architectural technology firm in Surabaya.",
    location: "Surabaya Center, East Java",
    year: "2024",
    category: "Commercial & Office",
    filterCategory: "Commercial",
    scope: ["Interior Architecture", "Acoustic Engineering", "Custom Workstations", "Lighting Automation"],
    landArea: "280 m²",
    buildingArea: "280 m²",
    status: "Completed Prototype",
    isDemo: true, // DEMO_CONTENT
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
        caption: "Formal conference room with integrated fluted wall acoustic treatment",
        aspect: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
        caption: "Individual focus alcoves providing deep-work privacy in an open-office environment",
        aspect: "portrait",
      },
    ],
    brief: {
      clientNeed:
        "Perusahaan konsultan membutuhkan kantor representatif berkarakter tenang, berdisiplin visual tinggi, dan mendukung kolaborasi intensif sekaligus peredaman suara meeting.",
      siteConstraints:
        "Unit lantai gedung perkantoran dengan ketinggian plafon terbatas (2.8 meter slab-to-slab) dan jalur ducting AC eksisting yang rumit.",
      keyChallenge:
        "Mencegah kesan sempit dan gelap sembari menerapkan palet warna monokromatik arsitektural.",
    },
    designResponse: {
      concept:
        "Acoustic Clarity & Architectural Rhythm — Menggabungkan panel akustik wool tersembunyi dengan garis-garis kisi hitam matte yang mengarahkan pandangan ke pemandangan kota.",
      spatialLogic:
        "Zonasi terbagi menjadi Front Lounge & Boardroom untuk tamu eksternal, dan Creative Open Lab untuk tim internal dengan akses kartu terpisah.",
      lightAndAir:
        "Sistem pencahayaan 3000K–4000K tuneable white yang menyesuaikan ritme sirkadian kerja dari pagi hingga malam hari.",
    },
    spatialStrategy: {
      summary:
        "Zoning: Reception Gallery, 12-Person Boardroom, 2 Focus Pods, 24 Hot-desking Stations, Material Sample Library, dan Breakout Pantry.",
      levels: [
        {
          levelName: "Single Floor Layout (280 m²)",
          functions: ["Greeting Gallery", "Executive Boardroom", "Collaborative Workbenches", "Sample Archive", "Coffee Bar Barista Counter"],
        },
      ],
    },
    materials: [
      { name: "Sound-Absorbing Recycled PET Felt", category: "Acoustic", description: "Panel peredam gema berserat mikro arang dengan performa NRC 0.85." },
      { name: "Matte Black Powder-Coated Aluminum", category: "Partitions", description: "Kusen sekat kaca minimalis dengan gasket kedap suara ganda." },
      { name: "Mineral Cast Solid Surfaces", category: "Furniture", description: "Meja kerja kolaboratif monolitik tahan gores dengan port perkabelan tersembunyi." },
    ],
    drawings: [
      { title: "Floor Zoning & Acoustic Attenuation Mapping", subtitle: "Noise decibel gradient and collaborative spatial clusters", aspect: "16:9", type: "ground-plan" },
    ],
    outcome:
      "Ruang kerja kontemporer yang mencerminkan ketepatan profesional dan produktivitas tinggi bagi 30 staf tanpa kelelahan visual.",
  },
  {
    id: "proj-06",
    number: "06",
    slug: "terrace-house",
    title: "Terrace House",
    tagline: "Interlocking staggered terraces capturing cool mountain breezes in highland Malang.",
    location: "Malang, East Java",
    year: "2023",
    category: "Architecture + Interior",
    filterCategory: "Interior",
    scope: ["Topographical Design", "Architecture Planning", "Custom Joinery", "Terrace Landscaping"],
    landArea: "260 m²",
    buildingArea: "290 m²",
    status: "Completed Prototype",
    isDemo: true, // DEMO_CONTENT
    thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
        caption: "Stepped living volume responding directly to the natural hillside topography",
        aspect: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        caption: "Open fireside reading room framed by textured grey plaster and endemic flora",
        aspect: "portrait",
      },
    ],
    brief: {
      clientNeed:
        "Hunian istirahat akhir pekan yang memaksimalkan pemandangan lembah dan iklim sejuk kota Malang, dengan ruang luar yang mengundang untuk berkumpul santai.",
      siteConstraints:
        "Kemiringan tanah lereng mencapai 22 derajat dengan risiko pergerakan tanah permukaan saat musim hujan lebat.",
      keyChallenge:
        "Membangun struktur penahan tanah yang efisien dan aman tanpa membuat rumah terasa seperti benteng beton tertutup.",
    },
    designResponse: {
      concept:
        "Staggered Terracing — Membagi massa bangunan mengikuti kemiringan lereng berundak sehingga setiap lantai memiliki atap hijau atau teras terbuka sendiri.",
      spatialLogic:
        "Pintu masuk berada di lantai teratas (level jalan), sedangkan ruang keluarga dan teras lanskap berada di lantai bawah yang bersentuhan langsung dengan tanah kebun.",
      lightAndAir:
        "Orientasi teras ke arah utara menangkap panorama lembah gunung tanpa silau panas matahari langsung.",
    },
    spatialStrategy: {
      summary:
        "Split-level 3 Tingkat yang menyatu dengan kontur tanah: Entry Pavilion (Atas), Living & Hearth Lounge (Tengah), Guest Suites & Garden Courtyard (Bawah).",
      levels: [
        {
          levelName: "Road Level Entrance (90 m²)",
          functions: ["Hillside Carport", "Viewing Deck Foyer", "Study & Powder Room"],
        },
        {
          levelName: "Mid Level Hearth (110 m²)",
          functions: ["Staggered Living Room", "Open Hearth Fireplace", "Terrace Dining & Kitchen"],
        },
        {
          levelName: "Garden Level (90 m²)",
          functions: ["2 Garden Facing Suites", "Reflecting Basin", "Direct Slope Access"],
        },
      ],
    },
    materials: [
      { name: "Volcanic Andesite Basalt", category: "Retaining Wall", description: "Batu andesit vulkanik dari lereng Semeru untuk dinding terasering penahan tanah." },
      { name: "Thermo-treated Ash Wood", category: "External Decks", description: "Kayu ash modifikasi panas tahan lembap pegunungan tanpa pembusukan jamur." },
      { name: "Tactile Lime Plaster Finish", category: "Wall Finish", description: "Plester kapur alami bernapas yang tahan terhadap kelembapan udara pegunungan." },
    ],
    drawings: [
      { title: "Topographical Slope Cross-Section", subtitle: "Hillside anchor footings and terraced water runoff management", aspect: "16:9", type: "section" },
    ],
    outcome:
      "Hunian berundak yang seolah tumbuh secara organik dari lereng bukit, memberikan ketenangan dan ikatan mendalam dengan alam sekitarnya.",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
