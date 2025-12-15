import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, Star, GitCommit } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
    };
}

// Generate Static Params for SSG
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-8 md:px-16 lg:px-24">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-zenith-text/50 hover:text-zenith-cyan mb-12 transition-colors font-mono text-sm group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                BACK TO BASE
            </Link>

            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-12 border-b border-zenith-surface pb-8">
                    <div>
                        <div className="font-mono text-zenith-cyan text-sm mb-4 border border-zenith-cyan/30 inline-block px-2 py-1">
                            {project.stats.language}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-zenith-white uppercase mb-6">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-xs font-mono text-zenith-text/60 bg-zenith-surface px-2 py-1">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-zenith-green">{project.stats.stars}</span>
                            <div className="flex items-center gap-2 text-zenith-text/50 text-xs font-mono uppercase">
                                <Star className="w-3 h-3" /> Stars
                            </div>
                        </div>
                        <div className="w-[1px] h-full bg-zenith-surface" />
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-zenith-green">{project.stats.forks}</span>
                            <div className="flex items-center gap-2 text-zenith-text/50 text-xs font-mono uppercase">
                                <GitCommit className="w-3 h-3" /> Forks
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-zenith-text/80 font-mono leading-relaxed mb-12">
                        {project.description}
                    </p>

                    {/* Placeholder for future detailed content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                        <div className="aspect-video bg-zenith-surface border border-zenith-surface/50 flex items-center justify-center group overflow-hidden">
                            <div className="text-zenith-text/30 font-mono text-xs uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">
                                System Architecture
                            </div>
                        </div>
                        <div className="aspect-video bg-zenith-surface border border-zenith-surface/50 flex items-center justify-center group overflow-hidden">
                            <div className="text-zenith-text/30 font-mono text-xs uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">
                                Interface Preview
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-zenith-white mb-4 uppercase">
                        System Modules
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm text-zenith-text/70 mb-12">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-zenith-cyan rounded-full" />
                            <span>Distributed Consensus Layer</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-zenith-cyan rounded-full" />
                            <span>Zero-Knowledge Proof Generator</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-zenith-cyan rounded-full" />
                            <span>High-Throughput Event Queue</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-zenith-cyan rounded-full" />
                            <span>Quantum-Resistant Encryption</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
