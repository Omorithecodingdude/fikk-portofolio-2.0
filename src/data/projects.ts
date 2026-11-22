export interface Project {
  id: string;
  title: string;
  category: "all" | "programming" | "networking" | "web";
  categoryLabel: string;
  categoryColor: string;
  icon: string;
  description: string;
  tags: string[];
  type: string;
  link?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: "password-generator",
    title: "Password Generator CLI",
    category: "programming",
    categoryLabel: "Python",
    categoryColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    icon: "🐍",
    description:
      "Aplikasi CLI berbasis Python untuk generate password acak dengan panjang dan kombinasi karakter yang dapat dikustomisasi, memanfaatkan module secrets untuk keamanan kriptografis optimal.",
    tags: ["Python", "CLI", "Secrets Library", "Security"],
    type: "Personal Project",
    github: "https://github.com/omorithecodingdude"
  },
  {
    id: "animasi-bunga",
    title: "Animasi Bunga Interaktif",
    category: "web",
    categoryLabel: "HTML/CSS/JS",
    categoryColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    icon: "🌸",
    description:
      "Animasi bunga interaktif berbasis web menggunakan CSS keyframe animations dan manipulasi DOM JavaScript untuk menghasilkan gerakan mekar yang halus dan natural.",
    tags: ["HTML5", "CSS3 Animations", "JavaScript", "DOM"],
    type: "Personal Project",
    github: "https://github.com/omorithecodingdude"
  },
  {
    id: "data-siswa",
    title: "Sistem Data Siswa SMK",
    category: "web",
    categoryLabel: "PHP · MySQL",
    categoryColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    icon: "🗄️",
    description:
      "Sistem informasi manajemen data siswa SMK berbasis web dengan implementasi CRUD lengkap (Create, Read, Update, Delete) dan konektivitas database MySQL relasional.",
    tags: ["PHP", "MySQL", "CRUD", "Database Design"],
    type: "Personal Project",
    github: "https://github.com/omorithecodingdude"
  },
  {
    id: "mikrotik-config",
    title: "Konfigurasi Router MikroTik",
    category: "networking",
    categoryLabel: "Networking",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    icon: "📡",
    description:
      "Praktik konfigurasi komprehensif router MikroTik meliputi mode Bridge, setup Hotspot gateway dengan autentikasi user, DHCP server/client, serta manajemen Wireless LAN (WLAN) via Winbox.",
    tags: ["MikroTik", "Winbox", "Hotspot Gateway", "Bridge", "DHCP"],
    type: "Praktik TJKT"
  },
  {
    id: "tplink-config",
    title: "Konfigurasi Router TP-Link",
    category: "networking",
    categoryLabel: "Networking",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    icon: "🔗",
    description:
      "Implementasi kontrol akses jaringan melalui pemblokiran website spesifik via Parental Control dan konfigurasi mode WISP (Wireless Internet Service Provider) sebagai repeater penguat sinyal.",
    tags: ["TP-Link", "WISP Mode", "Parental Control", "URL Filter", "WLAN"],
    type: "Praktik TJKT"
  },
  {
    id: "portfolio-nextjs",
    title: "Portofolio 2.0 (Modern Next.js)",
    category: "web",
    categoryLabel: "Next.js · TS",
    categoryColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    icon: "⚡",
    description:
      "Re-engineering portfolio web versi 2.0 menggunakan Next.js 16 App Router, React 19, TypeScript, dan Tailwind CSS dengan integrasi Terminal CLI interaktif dan tema dark/light dinamis.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
    type: "Personal Project",
    github: "https://github.com/omorithecodingdude"
  }
];
