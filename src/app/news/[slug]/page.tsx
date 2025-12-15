import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getNewsBySlug, getAllNews } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

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
    };
}

export default function NewsDetailPage({ params }: NewsPageProps) {
    const post = getNewsBySlug(params.slug);

    if (!post) {
        notFound();
    }

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
                    <div className="flex items-center gap-4 mb-4 font-mono text-sm">
                        <span className="text-zenith-green">{post.frontmatter.date}</span>
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
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-zenith-white mb-6 leading-tight">
                        {post.frontmatter.title}
                    </h1>
                </header>

                <div className="prose prose-invert prose-p:font-mono prose-p:text-zenith-text/80 prose-headings:font-heading prose-headings:text-zenith-white prose-a:text-zenith-cyan hover:prose-a:text-zenith-white prose-code:text-zenith-green prose-pre:bg-zenith-surface prose-pre:border prose-pre:border-zenith-surface/50 max-w-none">
                    <MDXRemote source={post.content} />
                </div>
            </article>
        </div>
    );
}
