"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function GitHubBadge() {
  return (
    <motion.a
      href="https://github.com/trahoangdev"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed bottom-8 right-8 z-50 hidden lg:flex items-center gap-4 bg-zenith-surface border border-zenith-cyan/30 p-2 pr-6 rounded-full backdrop-blur-md hover:border-zenith-cyan transition-colors group"
    >
      <div className="relative w-10 h-10 bg-zenith-base rounded-full flex items-center justify-center border border-zenith-surface">
        <Github className="w-5 h-5 text-zenith-text" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-zenith-green rounded-full animate-pulse" />
      </div>

      <div className="flex flex-col overflow-hidden">
        <motion.span
          className="text-xs font-bold text-zenith-white group-hover:text-zenith-cyan transition-colors relative"
          whileHover={{ x: [0, -2, 2, -2, 0], transition: { duration: 0.2 } }}
        >
          View on GitHub
        </motion.span>
        <span className="text-[10px] font-mono text-zenith-text/50">
          Last commit: 2m ago
        </span>
      </div>

      {/* Activity Graph Mock */}
      <div className="flex items-end gap-[2px] h-6 ml-2">
        {[40, 70, 30, 80, 50, 90, 20, 60].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
            className="w-1 bg-zenith-green/50 rounded-t-sm"
          />
        ))}
      </div>
    </motion.a>
  );
}