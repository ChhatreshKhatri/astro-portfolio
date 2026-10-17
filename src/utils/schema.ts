import type { GraphSchemaOptions } from "../types";

export const getPersonSchema = (siteUrl: string) => ({
  "@type": "Person",
  "name": "Chhatresh Khatri",
  "url": siteUrl,
  "image": "https://cdn.chhatreshkhatri.com/images/ChhatreshKhatri.webp",
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "LTM",
    "url": "https://www.ltm.com"
  },
  "description": "Software Engineer with a passion for building modern, user-friendly websites and applications.",
  "knowsAbout": [
    "JavaScript", "TypeScript", "React", "Next.js", "Astro", "Node.js",
    "Express.js", "HTML", "CSS", "Tailwind CSS", "MongoDB", "MySQL",
    "Firebase", "Git", "C", "C++", "Java", "Linux",
    "Full Stack Development", "Web Development", "Software Engineering",
    "AWS", "Artificial Intelligence", "Machine Learning", "Generative AI"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "AWS Certified AI Practitioner",
      "credentialCategory": "Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Amazon Web Services Training and Certification"
      },
      "url": "https://www.credly.com/badges/fbdb1e51-753b-4e35-ac6a-c2898e868ff8"
    }
  ],
  "sameAs": [
    "https://github.com/ChhatreshKhatri",
    "https://www.linkedin.com/in/chhatreshkhatri",
    "https://x.com/chhatreshkhatri",
    "https://www.instagram.com/chhatreshkhatri/",
    "https://www.facebook.com/chhatreshkhatri/",
    "https://www.youtube.com/@chhatreshkhatri",
    "https://leetcode.com/u/chhatreshkhatri/",
    "https://www.geeksforgeeks.org/profile/chhatreshkhatri",
    "https://www.credly.com/badges/fbdb1e51-753b-4e35-ac6a-c2898e868ff8"
  ]
});

export const getWebsiteSchema = (siteUrl: string) => ({
  "@type": "WebSite",
  "name": "Chhatresh Khatri",
  "url": siteUrl,
  "inLanguage": "en"
});

export const generateGraphSchema = (options: GraphSchemaOptions) => {
  const { siteUrl, canonicalURL, schemaType } = options;
  const person = getPersonSchema(siteUrl);
  const website = getWebsiteSchema(siteUrl);

  const graph: Record<string, unknown>[] = [website];

  if (schemaType === "ProfilePage") {
    graph.push({
      "@type": "ProfilePage",
      "name": "Chhatresh Khatri | About",
      "url": canonicalURL,
      "mainEntity": person
    });
  } else {
    graph.push(person);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
};
