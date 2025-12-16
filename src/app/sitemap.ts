import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getAllNews } from "@/lib/mdx";

const BASE_URL = "https://zenith-codex.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const news = getAllNews();

    const projectUrls = projects.map((project) => ({
        url: `${BASE_URL}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    const newsUrls = news.map((post) => ({
        url: `${BASE_URL}/news/${post.slug}`,
        lastModified: new Date(post.frontmatter.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${BASE_URL}/news`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        ...projectUrls,
        ...newsUrls,
    ];
}
