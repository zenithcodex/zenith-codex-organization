"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { navItems } from "@/config/navigation";
import ThemeToggle from "./ThemeToggle";

export default function NavigationRail() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which section is currently in view
  useEffect(() => {
    const sectionIds = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.href.slice(1));

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = navItems.findIndex((item) => item.href === `#${id}`);
              if (index !== -1) {
                setActiveIndex(index);
              }
            }
          });
        },
        {
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveIndex(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-0 top-0 h-full w-20 border-r border-zenith-surface/50 bg-zenith-base/95 backdrop-blur-sm z-50 hidden md:flex flex-col items-center py-12"
    >
      {/* Logo */}
      <div className="mb-12">
        <Image
          src="/logo.png"
          alt="Zenith Codex Logo"
          width={40}
          height={40}
          className="drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
        />
      </div>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col gap-6">
        {navItems.map((item, index) => {
          const isActive = index === activeIndex;
          const isExternal = item.href.startsWith("http");

          return (
            <a
              key={index}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onClick={() => !isExternal && setActiveIndex(index)}
              className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-zenith-cyan/10 text-zenith-cyan"
                  : "text-zenith-text/50 hover:text-zenith-cyan hover:bg-zenith-surface/50"
              }`}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon
                className={`w-5 h-5 transition-transform ${isActive ? "scale-110" : "group-hover:scale-110"}`}
              />

              {/* Tooltip */}
              <span className="absolute left-16 bg-zenith-surface text-zenith-cyan px-3 py-1.5 text-xs font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-10 border border-zenith-cyan/20">
                {item.label}
              </span>

              {/* Active indicator line */}
              <motion.div
                className="absolute left-0 w-[3px] bg-zenith-cyan rounded-r-full"
                initial={false}
                animate={{
                  height: isActive ? "100%" : "0%",
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
            </a>
          );
        })}
      </div>

      {/* Theme Toggle */}
      <div className="mb-8">
        <ThemeToggle />
      </div>

      {/* Footer text */}
      <div className="flex flex-col items-center gap-2 text-[10px] font-mono text-zenith-text/40">
        <span>EST. 2024</span>
        <span className="text-zenith-cyan/60">V.1.0.4</span>
      </div>
    </motion.nav>
  );
}
