import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllCategories, getNewsByCategory } from "@/lib/mdx";
import NewsList from "@/components/zenith/NewsList";
import { notFound } from "next/navigation";

export interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const decodedCategory = decodeURIComponent(params.slug).replace(/-/g, " ");
  // Basic capitalization
  const titleCategory = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);

  return {
    title: `${titleCategory} Archive`,
    description: `Browse all updates and announcements in the ${titleCategory} category.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // We need to handle the slug mapping back to the actual category string if possible,
  // or update our getNewsByCategory to be slug-aware.
  // For now, let's assume the slug matches the lowercase category.

  const categories = getAllCategories();
  // Simple loose matching for now
  const categoryMatch = categories.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === params.slug.toLowerCase()
  );

  if (!categoryMatch) {
    notFound();
  }

  const updates = getNewsByCategory(categoryMatch);

  return (
    <div className="min-h-screen pt-24 pb-12 px-8 md:px-16 lg:px-24">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-zenith-text/50 hover:text-zenith-cyan mb-12 transition-colors font-mono text-sm group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        ALL LOGS
      </Link>

      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-zenith-surface pb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/news"
              className="text-zenith-text/40 hover:text-zenith-cyan text-sm font-mono transition-colors"
            >
              ARCHIVE
            </Link>
            <span className="text-zenith-text/40">/</span>
            <span className="text-zenith-cyan text-sm font-mono uppercase">{categoryMatch}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-zenith-text mb-6 uppercase">
            {categoryMatch}
          </h1>
          <p className="font-mono text-zenith-text/60 text-lg">updates and announcements.</p>
        </header>

        <div className="space-y-8">
          <NewsList updates={updates} />
        </div>
      </div>
    </div>
  );
}
