
export interface Project {
  name: string;
  url: string;
  date: string;
  desc: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  desc: string;
}

export interface ToolGroup {
  label: string;
  items: string[];
}

export const uniProjects: Project[] = [
  { name: "Zappy", url: "https://github.com/EpitechPGE2-2025/G-YEP-400-MPL-4-1-zappy-2", date: "systems · 2026",    desc: "Simulates life on a planete using clients controlled by ai host on a server." },
  { name: "Ray tracer [C++]",     url: "https://github.com/louisbgl/raytracer-mirror", date: "graphics · 2026",   desc: "Path tracing, BVH acceleration." },
  { name: "Cartrige [C]",     url: "https://github.com/EpitechPGE2-2025/G-ING-401-MPL-4-1-cartridge-1", date: "systems · 2026",   desc: "Gameboy game cartrige that runs on both official and emulated hardware." },
];

export const personalProjects: Project[] = [
  { name: "Kaiman",          url: "https://github.com/Quinceyyyy/Kaiman-Pub", date: "2025", desc: "Web scraper targeting manga scan sites." },
];

export const miscProjects: Project[] = [
  { name: "uses",         url: "#", date: "", desc: "Tools and gear I use every day." },
  { name: "reading list", url: "#", date: "", desc: "Books and papers worth your time." },
  { name: "now",          url: "#", date: "", desc: "What I'm working on at the moment." },
];

export const experiences: Experience[] = [
  {
    title: "Full-Stack Intern",
    company: "IR2 Cabinet",
    period: "Oct – Dec 2025",
    desc: "Built job market scraper that stored the resuslts in an SQLite3 data base. Deployed a dashboard to visualize trends.",
  },

  {
    title: "Full-Stack Intern",
    company: "Kilanne Investments",
    period: "Juil - Sep 2025",
    desc: "Setup a scraper in Rust. Helped maintain old company sytems.",
  },

];

export const toolGroups: ToolGroup[] = [
  { label: "languages", items: ["C", "Rust", "C++"] },
  { label: "tools" ,items: ["Neovim", "tmux", "git", "github"] },
];
