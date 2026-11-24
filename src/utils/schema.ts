import type { GraphSchemaOptions } from "../types";

export const getPersonSchema = (siteUrl: string) => ({
  "@type": "Person",
  "@id": new URL("/#person", siteUrl).href,
  "name": "Chhatresh Khatri",
  "url": siteUrl,
  "image": "https://cdn.chhatreshkhatri.com/images/ChhatreshKhatri.webp",
  "jobTitle": "Full-Stack Software Engineer & AI Product Builder",
  "worksFor": {
    "@type": "Organization",
    "name": "LTM Limited",
    "url": "https://www.ltm.com"
  },
  "description": "Full-Stack Software Engineer specializing in high-performance web applications (Next.js, React, TypeScript), resilient backend systems (.NET Core, Node.js, SQL, Cloudflare), and intelligent AI product engineering.",
  "knowsAbout": [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    ".NET Core",
    "SQL Server",
    "Astro",
    "Tailwind CSS",
    "Redux Toolkit",
    "HTML5",
    "CSS3",
    "Java",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Cloudflare",
    "Google Cloud (GCP)",
    "Azure",
    "Alibaba Cloud",
    "Agentic AI",
    "Full Stack Development",
    "Software Engineering"
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
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Microsoft Certified: Azure AI Fundamentals",
      "credentialCategory": "Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Microsoft Training and Certification"
      },
      "url": "https://learn.microsoft.com/en-us/users/chhatreshkhatri-5518/credentials/50779a82dd8cd466"
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
    "https://www.credly.com/badges/fbdb1e51-753b-4e35-ac6a-c2898e868ff8",
    "https://learn.microsoft.com/en-us/users/chhatreshkhatri-5518/credentials/50779a82dd8cd466"
  ]
});

export const getWebsiteSchema = (siteUrl: string) => ({
  "@type": "WebSite",
  "@id": new URL("/#website", siteUrl).href,
  "name": "Chhatresh Khatri",
  "url": siteUrl,
  "inLanguage": "en"
});

export const generateGraphSchema = (options: GraphSchemaOptions) => {
  const { siteUrl, canonicalURL, schemaType, title, description } = options;
  const websiteId = new URL("/#website", siteUrl).href;
  const personId = new URL("/#person", siteUrl).href;
  const isProfilePage = schemaType === "ProfilePage";
  const isHomepage = canonicalURL === new URL("/", siteUrl).href;
  const person = getPersonSchema(siteUrl);
  const website = getWebsiteSchema(siteUrl);

  const graph: Record<string, unknown>[] = [website];

  if (isProfilePage || isHomepage) {
    graph.push(person);
  }

  const page: Record<string, unknown> = {
    "@type": isProfilePage ? "ProfilePage" : "WebPage",
    "@id": `${canonicalURL}#webpage`,
    "url": canonicalURL,
    "name": title,
    "description": description,
    "isPartOf": { "@id": websiteId }
  };

  if (isProfilePage) {
    page.mainEntity = { "@id": personId };
  } else if (isHomepage) {
    page.about = { "@id": personId };
  }

  graph.push(page);

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
};
