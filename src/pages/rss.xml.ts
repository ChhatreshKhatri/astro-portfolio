import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  return rss({
    title: "Chhatresh Khatri | Full-Stack Software Engineer & AI Product Builder",
    description: "Chhatresh Khatri Portfolio. Full-Stack Software Engineer specializing in modern web applications (Next.js, React, TypeScript), resilient backend systems (.NET Core, Node.js), and intelligent AI product engineering.",
    site: context.site!,
    customData: `
			<language>en</language>
			<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
			<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom" />
		`,
    items: [
      {
        title: "Chhatresh Khatri | About",
        link: "/about",
        description: "Chhatresh Khatri About. Professional software engineering experience, AWS Certified AI Practitioner credentials, education, and technical stack.",
        pubDate: new Date("2024-06-17T12:00:00+05:30"),
      },
      {
        title: "Chhatresh Khatri | Projects",
        link: "/projects",
        description: "Chhatresh Khatri Projects. Curated engineering showcase of full-stack platforms, Cloudflare R2 storage systems, and award-winning deployments.",
        pubDate: new Date("2024-06-17T12:05:00+05:30"),
      },
      {
        title: "Chhatresh Khatri | Privacy Policy",
        link: "/privacy-policy",
        description: "Privacy Policy and data practices for chhatreshkhatri.com and its official subdomains.",
        pubDate: new Date("2024-06-17T12:10:00+05:30"),
      },
    ],
  });
}
