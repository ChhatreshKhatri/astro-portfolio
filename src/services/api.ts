import type { HomeData, AboutData, ProjectsData } from "../types";

const API_BASE_URL = import.meta.env.PUBLIC_API_URL;

async function fetchData<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        Accept: "application/json",
      },
      ...({ cf: { cacheTtl: 3600, cacheEverything: true } } as any),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

export async function getHomeData(): Promise<HomeData | null> {
  return await fetchData<HomeData>("/home");
}

export async function getAboutData(): Promise<AboutData | null> {
  return await fetchData<AboutData>("/about");
}

export async function getProjectsData(): Promise<ProjectsData | null> {
  return await fetchData<ProjectsData>("/projects");
}
