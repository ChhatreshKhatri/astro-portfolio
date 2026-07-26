// API Service Layer - Centralized API calls

const API_BASE_URL = import.meta.env.PUBLIC_API_URL;

// Fetch data from API
async function fetchData<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

export interface HomeLink {
  type: string;
  url: string;
  icon: string;
}

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
  links: HomeLink[];
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
  award?: string;
  issuer?: string;
  description: string;
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

export interface ProjectLink {
  type: string;
  url: string;
  icon: string;
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
  links: ProjectLink[];
  tags?: ProjectTag[];
}

export interface ProjectsData {
  content: { title: string; description: string };
  projects: ProjectItem[];
}

// Fetch home page data
export async function getHomeData(): Promise<HomeData | null> {
  return await fetchData<HomeData>("/home");
}

// Fetch about page data
export async function getAboutData(): Promise<AboutData | null> {
  return await fetchData<AboutData>("/about");
}

// Fetch projects page data
export async function getProjectsData(): Promise<ProjectsData | null> {
  return await fetchData<ProjectsData>("/projects");
}
