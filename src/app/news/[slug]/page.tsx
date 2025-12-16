import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { getNewsBySlug, getAllNews } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { calculateReadingTime } from "@/lib/reading-time";
import ShareButtons from "@/components/zenith/ShareButtons";
import TableOfContents from "@/components/zenith/TableOfContents";

interface NewsPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllNews();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: NewsPageProps) {
  const post = getNewsBySlug(params.slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
    },
  };
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  const post = getNewsBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="min-h-screen pt-24 pb-12 px-8 md:px-16 lg:px-24">
      <Link
        href="/#news"
        className="inline-flex items-center gap-2 text-zenith-text/50 hover:text-zenith-cyan mb-12 transition-colors font-mono text-sm group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        BACK TO LOGS
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-zenith-surface pb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4 font-mono text-sm">
            <span className="text-zenith-green">{post.frontmatter.date}</span>
            <span className="flex items-center gap-1 text-zenith-text/50">
              <Clock className="w-3 h-3" />
              {readingTime}
            </span>
            {post.frontmatter.version && (
              <span className="px-2 py-0.5 border border-zenith-surface rounded text-xs text-zenith-text/60">
                {post.frontmatter.version}
              </span>
            )}
            {post.frontmatter.category && (
              <span className="text-zenith-cyan text-xs uppercase tracking-widest">
                {post.frontmatter.category}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-zenith-text mb-6 leading-tight">
            {post.frontmatter.title}
          </h1>
          <ShareButtons
            title={post.frontmatter.title}
            url={`https://zenith-codex.com/news/${params.slug}`}
          />
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-zenith-text prose-headings:font-heading prose-p:text-zenith-text/80 prose-p:font-mono prose-a:text-zenith-cyan prose-strong:text-zenith-text prose-code:text-zenith-green prose-pre:bg-zenith-surface prose-pre:border prose-pre:border-zenith-surface prose-li:text-zenith-text/80 prose-blockquote:text-zenith-text/70 prose-blockquote:border-zenith-cyan">
          <MDXRemote source={post.content} />
        </div>

        <TableOfContents />

        {/* Bottom share */}
        <div className="mt-12 pt-8 border-t border-zenith-surface">
          <ShareButtons
            title={post.frontmatter.title}
            url={`https://zenith-codex.com/news/${params.slug}`}
          />
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.frontmatter.title,
            datePublished: post.frontmatter.date,
            description: post.frontmatter.description,
            author: {
              "@type": "Organization",
              name: "Zenith Codex",
            },
            publisher: {
              "@type": "Organization",
              name: "Zenith Codex",
              logo: {
                "@type": "ImageObject",
                url: "https://zenith-codex.com/og-image.jpg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://zenith-codex.com/news/${params.slug}`,
            },
          }),
        }}
      />
    </div>
  );
}
