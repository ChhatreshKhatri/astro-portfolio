/**
 * API Service Layer
 * Centralized API calls
 */

const API_BASE_URL = import.meta.env.PUBLIC_API_URL;

/**
 * Fetch data from API
 */
async function fetchData<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    });

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
  return await fetchData<{
    intro: string;
    content: string;
    pic: string;
    links: Array<{ type: string; url: string; icon: string }>;
  }>("/home");
}

/**
 * Fetch about page data
 */
export async function getAboutData() {
  return await fetchData<{
    content: { title: string; text: string };
    sections: Array<{
      title: string;
      skills: Array<{ name: string; color: string; icon: string }>;
    }>;
  }>("/about");
}

/**
 * Fetch projects page data
 */
export async function getProjectsData() {
  return await fetchData<{
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
}
