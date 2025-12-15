"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitCommit, Star, Eye } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-24 ml-0 md:ml-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-zenith-surface pb-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide">
            Active Protocols
          </h2>
          <span className="font-mono text-zenith-green text-sm hidden md:block">
            // INDEXING REPOSITORIES...
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={index} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative bg-zenith-surface border border-zenith-black p-8 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
              >
                {/* Hover Shadow */}
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Neon Border Glow */}
                <div className="absolute inset-0 border border-zenith-cyan/0 group-hover:border-zenith-cyan/50 transition-colors duration-300 box-glow" />

                <div className="flex justify-between items-start mb-6">
                  <div className="font-mono text-xs text-zenith-cyan border border-zenith-cyan/30 px-2 py-1">
                    {project.stats.language}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-zenith-text/50 group-hover:text-zenith-cyan transition-colors" />
                </div>

                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-zenith-white transition-colors">
                  {project.title}
                </h3>

                <p className="font-mono text-sm text-zenith-text/70 mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Stats that animate in */}
                <div className="flex items-center gap-6 font-mono text-xs text-zenith-green opacity-50 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitCommit className="w-4 h-4" />
                    <span>{project.stats.forks}</span>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zenith-text/20 group-hover:border-zenith-cyan transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zenith-text/20 group-hover:border-zenith-cyan transition-colors" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}