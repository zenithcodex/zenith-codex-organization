"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logs = [
  "Initializing connection to Zenith Mainframe...",
  "Fetching repository metadata...",
  "Analyzing commit history...",
  "Optimizing assets...",
  "Connection established. Welcome, User.",
];

export default function FooterTerminal() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < logs.length) {
        setLines((prev) => [...prev, logs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-zenith-black py-12 px-8 md:px-16 lg:px-24 ml-0 md:ml-20 border-t border-zenith-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h4 className="font-heading font-bold text-2xl mb-6">Zenith Codex</h4>
          <div className="font-mono text-sm text-zenith-text/50 space-y-2">
            <p>© {new Date().getFullYear()} Zenith Codex Organization.</p>
            <p>All systems operational.</p>
          </div>
        </div>

        <div className="bg-zenith-base border border-zenith-surface p-6 font-mono text-xs h-48 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-6 bg-zenith-surface flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-auto text-zenith-text/30">bash</span>
          </div>

          <div className="mt-6 space-y-2">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-zenith-green"
              >
                <span className="text-zenith-cyan mr-2">➜</span>
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-zenith-green inline-block align-middle ml-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}