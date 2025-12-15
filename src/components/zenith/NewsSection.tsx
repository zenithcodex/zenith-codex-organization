"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const updates = [
  {
    date: "2024.05.12",
    version: "v2.4.0",
    title: "Quantum Encryption Module Released",
    category: "Release"
  },
  {
    date: "2024.04.28",
    version: "v2.3.9",
    title: "Latency Reduced by 40% in Core Grid",
    category: "Performance"
  },
  {
    date: "2024.04.15",
    version: "v2.3.8",
    title: "New Partnership with CyberDyne Systems",
    category: "Announcement"
  }
];

export default function NewsSection() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 ml-0 md:ml-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-heading font-bold uppercase mb-6">System Logs</h2>
          <p className="font-mono text-zenith-text/60 text-sm leading-relaxed mb-8">
            Tracking the evolution of the Zenith Codex. All updates are cryptographically signed and immutable.
          </p>
          <button className="flex items-center gap-2 font-mono text-sm text-zenith-cyan hover:text-zenith-white transition-colors group">
            <span>VIEW FULL ARCHIVE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-l-2 border-zenith-surface pl-8 hover:border-zenith-cyan transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-2 font-mono text-xs">
                <span className="text-zenith-green">{update.date}</span>
                <span className="text-zenith-text/30">|</span>
                <span className="text-zenith-text/50">{update.version}</span>
                <span className="ml-auto px-2 py-0.5 border border-zenith-surface rounded text-[10px] uppercase text-zenith-text/40 group-hover:border-zenith-cyan/30 group-hover:text-zenith-cyan transition-colors">
                  {update.category}
                </span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-zenith-white transition-colors">
                {update.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
