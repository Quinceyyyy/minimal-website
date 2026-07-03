
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

export interface Education {
  title: string;
  detail: string;
}

export interface Social {
  label: string;
  url: string;
}

export interface Section {
  label: string;
  id: string;
  dataKey: string;
}

export interface SidebarLinks {
  linkedin: string;
  cvFileEn: string;
  cvFileFr: string;
  email: string;
}

export interface SidebarContent {
  name: string;
  role: string;
  badge: string;
  about: string;
  education: Education[];
  misc: string[];
  links: SidebarLinks;
  footer: string;
}

export interface MainContent {
  name: string;
  subtitle: string;
  socials: Social[];
}

export interface SiteContent {
  meta: { title: string; description: string };
  sidebar: SidebarContent;
  main: MainContent;
  sections: Section[];
  uniProjects: Project[];
  personalProjects: Project[];
  experiences: Experience[];
  toolGroups: ToolGroup[];
  [key: string]: unknown;
}
