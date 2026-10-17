// Centralized Type Definitions

// API & Data Types

export interface LinkItem {
  type: string;
  url: string;
  icon: string;
}

export type HomeLink = LinkItem;
export type ProjectLink = LinkItem;

export interface HomeStat {
  value: string;
  label: string;
}

export interface HomeHighlight {
  name: string;
  icon: string;
}

export interface HomeData {
  intro: string;
  content: string;
  pic: string;
  roles?: string[];
  stats?: HomeStat[];
  highlights?: (string | HomeHighlight)[];
  links: LinkItem[];
}

export interface ExperienceProject {
  name: string;
  details: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  badge?: string;
  color?: string;
  location?: string;
  details?: string[];
  skills?: string[];
  projects?: ExperienceProject[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  location?: string;
}

export interface AchievementItem {
  title: string;
  description?: string;
  icon?: string;
  url?: string;
  linkText?: string;
  linkIcon?: string;
}

export interface SkillItem {
  name: string;
  color: string;
  icon: string;
}

export interface SkillSection {
  title: string;
  skills: SkillItem[];
}

export interface AboutData {
  content: { title: string; text: string };
  experience?: ExperienceItem[];
  education?: EducationItem[];
  achievements?: AchievementItem[];
  sections: SkillSection[];
}

export interface ProjectTag {
  name: string;
  url: string;
}

export interface ProjectItem {
  heading: string;
  subHeading: string;
  description: string;
  image: string;
  links: LinkItem[];
  tags?: ProjectTag[];
}

export interface ProjectsData {
  content: { title: string; description: string };
  projects: ProjectItem[];
}

// Component Props Types
export interface HeadingProps {
  as?: "h1" | "h2" | "div";
  class?: string;
}

export interface HeroProps {
  data: HomeData;
}

export interface HighlightItem {
  name: string;
  icon?: string | null;
  url?: string | null;
}

export interface HighlightsProps {
  data: (string | HighlightItem)[];
  ariaLabel?: string;
  eagerLoad?: boolean;
}

export interface LinkButtonProps {
  name: string;
  link: string;
  imageUrl?: string;
  loading?: "eager" | "lazy";
}

export interface LoadingProps {
  label?: string;
}

export interface NavLinksProps {
  page: string;
  link: string;
  ID: string;
}

export interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export interface RootLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: string;
  schemaType?: string;
}

// Schema Types
export interface GraphSchemaOptions {
  siteUrl: string;
  canonicalURL: string;
  schemaType?: string;
}
