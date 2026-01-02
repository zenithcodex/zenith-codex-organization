"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Globe, Shield, Zap, Code } from "lucide-react";

const stackItems = [
  {
    category: "Core Infrastructure",
    icon: Cpu,
    items: ["Rust", "Go", "C++", "WebAssembly"],
    color: "text-zenith-cyan",
  },
  {
    category: "Interface Layer",
    icon: Globe,
    items: ["Next.js", "React", "WebGL", "Tailwind"],
    color: "text-zenith-green",
  },
  {
    category: "Data Systems",
    icon: Database,
    items: ["PostgreSQL", "Redis", "ClickHouse", "Vector DB"],
    color: "text-zenith-purple",
  },
  {
    category: "Security & Ops",
    icon: Shield,
    items: ["Docker", "Kubernetes", "Vault", "eBPF"],
    color: "text-red-400",
  },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      className="py-24 px-8 md:px-16 lg:px-24 ml-0 md:ml-20 border-t border-zenith-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide text-zenith-text">
            System Architecture
          </h2>
          <div className="flex items-center gap-2 text-zenith-text/50 font-mono text-sm">
            <Zap className="w-4 h-4 text-zenith-cyan" />
            <span>OPTIMIZED FOR PERFORMANCE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackItems.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group bg-zenith-base border border-zenith-surface p-8 overflow-hidden rounded-lg"
            >
              {/* Background Grid Effect */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "2rem 2rem",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 bg-zenith-surface border border-zenith-surface rounded-lg ${group.color}`}
                  >
                    <group.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-mono font-bold uppercase tracking-wider text-zenith-text">
                    {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 font-mono text-sm text-zenith-text/70 hover:text-zenith-text transition-colors cursor-default"
                    >
                      <Code className="w-3 h-3 opacity-30" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Corner Effect */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-zenith-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-zenith-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
