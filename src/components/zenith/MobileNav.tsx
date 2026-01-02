"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/config/navigation";

const navVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
};

export default function MobileNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

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

  const handleTap = (index: number) => {
    setTappedIndex(index);
    setActiveIndex(index);
    setTimeout(() => setTappedIndex(null), 300);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Bottom gradient fade */}
      <div className="absolute bottom-full left-0 right-0 h-8 bg-gradient-to-t from-zenith-base to-transparent pointer-events-none" />

      {/* Navigation bar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="mx-2 mb-4 bg-zenith-surface/95 backdrop-blur-xl border border-zenith-surface rounded-2xl shadow-lg"
      >
        <div className="relative flex items-center justify-between px-0 py-2">
          {/* Active indicator background */}
          <motion.div
            layoutId="navIndicator"
            className="absolute top-2 bottom-2 bg-zenith-cyan/15 border border-zenith-cyan/30 rounded-xl"
            style={{
              width: `calc(${100 / navItems.length}% - 4px)`,
            }}
            animate={{
              left: `calc(${(activeIndex * 100) / navItems.length}% + 2px)`,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
          />

          {navItems.map((item, index) => {
            const isActive = index === activeIndex;
            const isTapped = index === tappedIndex;
            const isExternal = item.href.startsWith("http");

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleTap(index)}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`relative flex flex-col items-center justify-center flex-1 py-3 px-0.5 rounded-xl z-10 transition-colors ${
                  isActive ? "text-zenith-cyan" : "text-zenith-text/50 active:text-zenith-text/80"
                }`}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Tap feedback */}
                <AnimatePresence>
                  {isTapped && (
                    <motion.div
                      className="absolute inset-0 bg-zenith-cyan/10 rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    y: isActive ? -2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      isActive ? "drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]" : ""
                    }`}
                  />
                </motion.div>

                {/* Label */}
                <motion.span
                  className={`text-[10px] font-medium mt-1 ${
                    isActive ? "text-zenith-cyan" : "text-zenith-text/40"
                  }`}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                  }}
                >
                  {item.label}
                </motion.span>

                {/* Active dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-zenith-cyan shadow-[0_0_6px_rgba(0,240,255,0.8)]"
                  />
                )}
              </a>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
}
