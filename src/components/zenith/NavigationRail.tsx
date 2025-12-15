"use client";

import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";

export default function NavigationRail() {
  return (
    <motion.nav
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-0 top-0 h-full w-20 border-r border-zenith-surface bg-zenith-base/90 backdrop-blur-sm z-50 hidden md:flex flex-col items-center py-12"
    >
      <div className="mb-12">
        <div className="w-8 h-8 bg-zenith-cyan rotate-45 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
      </div>

      <div className="flex-1 flex flex-col gap-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group relative flex items-center justify-center w-12 h-12 text-zenith-text/50 hover:text-zenith-cyan transition-colors"
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6" />
            <span className="absolute left-14 bg-zenith-surface border border-zenith-cyan/30 px-2 py-1 text-xs font-mono text-zenith-cyan opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
            <div className="absolute left-0 w-[2px] h-0 bg-zenith-cyan group-hover:h-full transition-all duration-300" />
          </a>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-4 text-[10px] font-mono text-zenith-text/30 writing-vertical-rl rotate-180">
        <span>EST. 2024</span>
        <span>V.1.0.4</span>
      </div>
    </motion.nav>
  );
}