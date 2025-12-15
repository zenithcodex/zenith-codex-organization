import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NewsPost } from "@/types";

const contentDirectory = path.join(process.cwd(), "src/content/news");

export function getAllNews(): NewsPost[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);

    const allNewsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: data as NewsPost["frontmatter"],
            content,
        };
    });

    return allNewsData.sort((a, b) => {
        if (a.frontmatter.date < b.frontmatter.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getNewsBySlug(slug: string): NewsPost | null {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data as NewsPost["frontmatter"],
        content,
    };
}
