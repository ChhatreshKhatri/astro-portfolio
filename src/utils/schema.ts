export const getPersonSchema = (siteUrl: string) => ({
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  "name": "Chhatresh Khatri",
  "givenName": "Chhatresh",
  "familyName": "Khatri",
  "url": siteUrl,
  "image": "https://cdn.chhatreshkhatri.com/images/ChhatreshKhatri.webp",
  "email": "ck@chhatreshkhatri.com",
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
    "Full Stack Development", "Web Development", "Software Engineering"
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
  ]
});

export const getWebsiteSchema = (siteUrl: string) => ({
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  "url": siteUrl,
  "name": "Chhatresh Khatri Portfolio",
  "description": "Portfolio website of Chhatresh Khatri — Software Engineer and Full Stack Developer.",
  "publisher": {
    "@id": `${siteUrl}/#person`
  },
  "inLanguage": "en"
});

export const getPageSchema = (options: {
  schemaType: string;
  canonicalURL: string;
  siteUrl: string;
  title: string;
  description: string;
}) => {
  const { schemaType, canonicalURL, siteUrl, title, description } = options;
  
  return {
    "@type": schemaType,
    "@id": `${canonicalURL}#webpage`,
    "url": canonicalURL,
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": `${siteUrl}/#website`
    },
    "about": schemaType === "ProfilePage" ? {
      "@id": `${siteUrl}/#person`
    } : undefined,
    "mainEntity": schemaType === "CollectionPage" ? {
      "@id": `${canonicalURL}#itemlist`
    } : schemaType === "ProfilePage" ? getPersonSchema(siteUrl) : undefined
  };
};

export const generateGraphSchema = (options: {
  schemaType: string;
  canonicalURL: string;
  siteUrl: string;
  title: string;
  description: string;
  additionalSchema?: any;
}) => {
  const personSchema = getPersonSchema(options.siteUrl);
  const websiteSchema = getWebsiteSchema(options.siteUrl);
  const pageSchema = getPageSchema(options);

  const graph: any[] = [websiteSchema, pageSchema];
  
  if (options.schemaType !== "ProfilePage") {
    graph.unshift(personSchema);
  }

  if (options.additionalSchema) {
    graph.push(options.additionalSchema);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
};
