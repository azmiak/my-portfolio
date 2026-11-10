export interface SocialLink {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Site {
  /** Browser tab title and default Open Graph title. */
  title: string;
  /** Search result and Open Graph description. */
  description: string;
  /** Public URL of the deployed site. Leave undefined until you have one. */
  url?: string;
}

export interface Person {
  name: string;
  role: string;
  headline: string;
  availability?: string;
  photo: ImageAsset;
}

export interface About {
  paragraphs: string[];
  facts: { label: string; value: string }[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Project {
  title: string;
  summary: string;
  tech: string[];
  year?: string;
  demoUrl?: string;
  repoUrl?: string;
  image?: ImageAsset;
}

export interface RoleEntry {
  role: string;
  organization: string;
  period: string;
  points: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Contact {
  email: string;
  note: string;
  socials: SocialLink[];
}

export interface Portfolio {
  site: Site;
  person: Person;
  about: About;
  education: EducationEntry[];
  skills: SkillGroup[];
  projects: Project[];
  experience: RoleEntry[];
  certificates: Certificate[];
  contact: Contact;
}
