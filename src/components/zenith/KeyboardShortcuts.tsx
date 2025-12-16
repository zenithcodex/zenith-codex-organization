"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const shortcuts = [
  { key: "/", description: "Focus search" },
  { key: "Esc", description: "Close modal / Clear focus" },
  { key: "↑", description: "Previous item" },
  { key: "↓", description: "Next item" },
  { key: "Enter", description: "Select item" },
  { key: "?", description: "Show shortcuts" },
  { key: "G H", description: "Go to Home" },
  { key: "G P", description: "Go to Projects" },
  { key: "G N", description: "Go to News" },
];

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "?" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setIsOpen(false);
      }

      if (e.key === "g" && !e.ctrlKey && !e.metaKey) {
        const handleSecondKey = (e2: KeyboardEvent) => {
          if (e2.key === "h") window.location.href = "/";
          if (e2.key === "p") window.location.href = "/#projects";
          if (e2.key === "n") window.location.href = "/news";
          window.removeEventListener("keydown", handleSecondKey);
        };
        window.addEventListener("keydown", handleSecondKey, { once: true });
        setTimeout(() => {
          window.removeEventListener("keydown", handleSecondKey);
        }, 1000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-zenith-base/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-zenith-surface border border-zenith-cyan/20 p-6 max-w-md w-full mx-4 rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-bold text-zenith-text">
                Keyboard Shortcuts
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zenith-text/50 hover:text-zenith-text"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {shortcuts.map((shortcut) => (
                <div key={shortcut.key} className="flex items-center justify-between">
                  <span className="text-zenith-text/70 text-sm">{shortcut.description}</span>
                  <kbd className="px-2 py-1 bg-zenith-base border border-zenith-cyan/20 text-zenith-cyan font-mono text-xs rounded">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>

            <p className="mt-6 text-zenith-text/40 text-xs font-mono">
              Press ? to toggle this menu
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
