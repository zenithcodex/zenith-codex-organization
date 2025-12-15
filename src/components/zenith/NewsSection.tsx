import { getAllNews } from "@/lib/mdx";
import NewsList from "@/components/zenith/NewsList";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function NewsSection() {
  const updates = getAllNews().slice(0, 3);

  return (
    <section id="news" className="py-24 px-8 md:px-16 lg:px-24 ml-0 md:ml-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-heading font-bold uppercase mb-6">System Logs</h2>
          <p className="font-mono text-zenith-text/60 text-sm leading-relaxed mb-8">
            Tracking the evolution of the Zenith Codex. All updates are cryptographically signed and immutable.
          </p>
          <Link href="/news" className="flex items-center gap-2 font-mono text-sm text-zenith-cyan hover:text-zenith-white transition-colors group">
            <span>VIEW FULL ARCHIVE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <NewsList updates={updates} />
        </div>
      </div>
    </section>
  );
}
