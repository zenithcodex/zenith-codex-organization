"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Monitor } from "lucide-react";

const themes = [
  { name: "light", icon: Sun, label: "Light mode" },
  { name: "dark", icon: Moon, label: "Dark mode" },
  { name: "system", icon: Monitor, label: "System preference" },
] as const;

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-zenith-surface/50 animate-pulse" />;
  }

  const currentTheme = themes.find((t) => t.name === theme) || themes[1];
  const CurrentIcon = currentTheme.icon;

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.name === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].name);
  };

  return (
    <motion.button
      onClick={cycleTheme}
      className="relative w-10 h-10 rounded-full bg-zenith-surface/50 border border-zenith-surface hover:border-zenith-cyan/50 flex items-center justify-center overflow-hidden group transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Current theme: ${currentTheme.label}. Click to change.`}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-zenith-cyan/20 to-zenith-purple/20 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />

      {/* Icon with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <CurrentIcon className="w-5 h-5 text-zenith-text/70 group-hover:text-zenith-cyan transition-colors" />
        </motion.div>
      </AnimatePresence>

      {/* Ripple effect on click */}
      <span className="absolute inset-0 rounded-full bg-zenith-cyan/10 scale-0 group-active:scale-100 transition-transform duration-300" />
    </motion.button>
  );
}
