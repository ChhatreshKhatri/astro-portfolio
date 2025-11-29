/**
 * API Service Layer
 * Centralized API calls with timeout handling
 */

const API_BASE_URL = import.meta.env.PUBLIC_API_URL;
const DEFAULT_TIMEOUT = 2000; // 2 seconds

/**
 * Fetch with timeout support
 */
async function fetchWithTimeout<T>(endpoint: string, timeout: number = DEFAULT_TIMEOUT): Promise<T | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      signal: controller.signal,
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

/**
 * Fetch home page data
 */
export async function getHomeData() {
  const data = await fetchWithTimeout<{
    intro: string;
    content: string;
    pic: string;
    links: Array<{ type: string; url: string; icon: string }>;
  }>("/home");

  return (
    data || {
      intro: "Hi, I'm Chhatresh Khatri",
      content: "Full stack developer building modern web applications.",
      pic: "/icon.svg",
      links: [],
    }
  );
}

/**
 * Fetch about page data
 */
export async function getAboutData() {
  const data = await fetchWithTimeout<{
    content: { title: string; text: string };
    sections: Array<{
      title: string;
      skills: Array<{ name: string; color: string; icon: string }>;
    }>;
  }>("/about");

  return (
    data || {
      content: {
        title: "About Me",
        text: "Full stack developer passionate about building modern web applications.",
      },
      sections: [],
    }
  );
}

/**
 * Fetch projects page data
 */
export async function getProjectsData() {
  const data = await fetchWithTimeout<{
    content: { title: string; description: string };
    projects: Array<{
      heading: string;
      subHeading: string;
      description: string;
      image: string;
      links: Array<{ type: string; url: string; icon: string }>;
      tags: Array<{ name: string; url: string }>;
    }>;
  }>("/projects");

  return (
    data || {
      content: { title: "Projects", description: "My portfolio projects" },
      projects: [],
    }
  );
}
