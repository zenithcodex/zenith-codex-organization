import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllNews } from "@/lib/mdx";
import NewsList from "@/components/zenith/NewsList";

export const metadata = {
    title: "System Logs Archive",
    description: "Complete chronological archives of Zenith Codex updates and announcements.",
};

export default function NewsArchivePage() {
    const allNews = getAllNews();

    return (
        <div className="min-h-screen pt-24 pb-12 px-8 md:px-16 lg:px-24">
            <Link
                href="/#news"
                className="inline-flex items-center gap-2 text-zenith-text/50 hover:text-zenith-cyan mb-12 transition-colors font-mono text-sm group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                BACK TO BASE
            </Link>

            <div className="max-w-4xl mx-auto">
                <header className="mb-16 border-b border-zenith-surface pb-8">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-zenith-white mb-6 uppercase">
                        System Log Archive
                    </h1>
                    <p className="font-mono text-zenith-text/60 text-lg">
                        Full chronological record of all system updates, releases, and announcements.
                    </p>
                </header>

                <div className="space-y-8">
                    <NewsList updates={allNews} />
                </div>
            </div>
        </div>
    );
}
