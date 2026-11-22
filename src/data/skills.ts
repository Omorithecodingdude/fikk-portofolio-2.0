export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Networking",
    icon: "🌐",
    description: "Konfigurasi perangkat jaringan enterprise & manajemen topologi koneksi.",
    skills: [
      { name: "MikroTik RouterOS", highlight: true },
      { name: "TP-Link", highlight: true },
      { name: "VLAN" },
      { name: "Firewall & NAT" },
      { name: "DHCP Server/Client" },
      { name: "Hotspot Gateway" },
      { name: "Routing Static/Dynamic" },
      { name: "WISP Mode" }
    ]
  },
  {
    title: "Server & OS",
    icon: "🖥️",
    description: "Setup, virtualisasi, dan administrasi server berbasis Linux & Windows.",
    skills: [
      { name: "Debian Linux", highlight: true },
      { name: "Ubuntu Server", highlight: true },
      { name: "Windows Server" },
      { name: "VMware Workstation" },
      { name: "Oracle VirtualBox" },
      { name: "SSH & Remote Access" }
    ]
  },
  {
    title: "Programming & Web",
    icon: "💻",
    description: "Pengembangan aplikasi modern, arsitektur web responsif, dan scripting.",
    skills: [
      { name: "Next.js", highlight: true },
      { name: "React", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "TypeScript" },
      { name: "Python", highlight: true },
      { name: "PHP & MySQL" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 / CSS3" }
    ]
  },
  {
    title: "Developer Tools",
    icon: "🔧",
    description: "Alat produktivitas, simulator jaringan, dan version control.",
    skills: [
      { name: "VS Code", highlight: true },
      { name: "Winbox MikroTik", highlight: true },
      { name: "Cisco Packet Tracer", highlight: true },
      { name: "Git & GitHub" },
      { name: "PowerShell & Bash" },
      { name: "Postman / API Test" }
    ]
  }
];
