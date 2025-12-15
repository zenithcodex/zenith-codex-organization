"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NewsPost } from "@/types";

export default function NewsList({ updates }: { updates: NewsPost[] }) {
    return (
        <>
            {updates.map((update, index) => (
                <Link href={`/news/${update.slug}`} key={index} className="block group">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border-l-2 border-zenith-surface pl-8 hover:border-zenith-cyan transition-colors duration-300"
                    >
                        <div className="flex items-center gap-4 mb-2 font-mono text-xs">
                            <span className="text-zenith-green">{update.frontmatter.date}</span>
                            <span className="text-zenith-text/30">|</span>
                            <span className="text-zenith-text/50">{update.frontmatter.version}</span>
                            <span className="ml-auto px-2 py-0.5 border border-zenith-surface rounded text-[10px] uppercase text-zenith-text/40 group-hover:border-zenith-cyan/30 group-hover:text-zenith-cyan transition-colors">
                                {update.frontmatter.category}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-zenith-white transition-colors">
                            {update.frontmatter.title}
                        </h3>
                        {update.frontmatter.description && (
                            <p className="font-mono text-xs text-zenith-text/50 mt-2 line-clamp-2">
                                {update.frontmatter.description}
                            </p>
                        )}
                    </motion.div>
                </Link>
            ))}
        </>
    );
}
