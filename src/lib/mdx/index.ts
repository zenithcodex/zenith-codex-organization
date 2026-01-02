import { allNews, News } from "contentlayer/generated";
import { NewsPost } from "@/types";

// Helper to convert Contentlayer doc to our existing NewsPost type if needed,
// or we can update the app to use the inferred type.
// For minimal friction, we'll map it to NewsPost style where possible.

function mapToNewsPost(doc: News): NewsPost {
  return {
    slug: doc.slug,
    frontmatter: {
      title: doc.title,
      date: doc.date,
      version: doc.version,
      category: doc.category,
      description: doc.description,
    },
    content: doc.body.raw, // Or doc.body.code if we switched to useMDXComponent
  };
}

export function getAllNews(): NewsPost[] {
  return allNews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(mapToNewsPost);
}

export function getNewsBySlug(slug: string): NewsPost | null {
  const doc = allNews.find((post) => post.slug === slug);
  if (!doc) return null;
  return mapToNewsPost(doc);
}

export function getNewsByCategory(category: string): NewsPost[] {
  const normalizedCategory = category.toLowerCase();

  return allNews
    .filter((post) => post.category?.toLowerCase() === normalizedCategory)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(mapToNewsPost);
}

export function getAllCategories(): string[] {
  const categories = new Set(allNews.map((post) => post.category).filter(Boolean));
  return Array.from(categories) as string[];
}
