// API Service Layer - Centralized API calls

const API_BASE_URL = import.meta.env.PUBLIC_API_URL;

// In-memory cache store for server rendering with TTL and Stale-While-Revalidate (SWR)
interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const memoryCache = new Map<string, CacheEntry<any>>();
const CACHE_FRESH_TTL_MS = 60 * 60 * 1000; // 1 hour fresh
const CACHE_STALE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours stale-while-revalidate

// Helper to clear or invalidate cache
export function clearApiCache(endpoint?: string): void {
  if (endpoint) {
    memoryCache.delete(endpoint);
  } else {
    memoryCache.clear();
  }
}

// Background revalidation helper
async function revalidateCache<T>(endpoint: string): Promise<T | null> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        "Accept": "application/json",
      },
      // Instruct Cloudflare Workers edge cache to store response for 3600 seconds
      ...({ cf: { cacheTtl: 3600, cacheEverything: true } } as any),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json() as T;
    memoryCache.set(endpoint, { data, timestamp: Date.now() });
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    // Fallback to stale cache if network request fails
    const cached = memoryCache.get(endpoint);
    if (cached) {
      console.warn(`Serving stale cache for ${endpoint} due to fetch error.`);
      return cached.data as T;
    }
    return null;
  }
}

// Fetch data from API with Stale-While-Revalidate caching
async function fetchData<T>(endpoint: string): Promise<T | null> {
  const now = Date.now();
  const cached = memoryCache.get(endpoint);

  if (cached) {
    const age = now - cached.timestamp;
    // Serve immediately if fresh (< 1 hour old)
    if (age < CACHE_FRESH_TTL_MS) {
      return cached.data as T;
    }
    // Serve stale immediately and revalidate asynchronously in background (< 24 hours old)
    if (age < CACHE_STALE_TTL_MS) {
      revalidateCache<T>(endpoint).catch((err) => console.error(`Background revalidation failed for ${endpoint}:`, err));
      return cached.data as T;
    }
  }

  // If missing or expired beyond stale window, await fresh fetch
  return await revalidateCache<T>(endpoint);
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
