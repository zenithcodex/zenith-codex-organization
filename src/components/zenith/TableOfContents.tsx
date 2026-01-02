"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Generate slug from text
  const generateSlug = useCallback((text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }, []);

  // Get headings from article
  useEffect(() => {
    // Small delay to ensure MDX content is rendered
    const timer = setTimeout(() => {
      const article = document.querySelector("article");
      if (!article) return;

      const elements = article.querySelectorAll("h2, h3");
      const items: TOCItem[] = [];
      const usedIds = new Set<string>();

      elements.forEach((el) => {
        const text = el.textContent || "";
        let id = el.id || generateSlug(text);

        // Ensure unique IDs
        if (usedIds.has(id)) {
          let counter = 1;
          while (usedIds.has(`${id}-${counter}`)) {
            counter++;
          }
          id = `${id}-${counter}`;
        }
        usedIds.add(id);

        // Set ID on element if not present
        if (!el.id) {
          el.id = id;
        }

        items.push({
          id: el.id,
          text,
          level: el.tagName === "H2" ? 2 : 3,
        });
      });

      setHeadings(items);

      // Set initial active to first heading
      if (items.length > 0) {
        setActiveId(items[0].id);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [generateSlug]);

  // Track scroll position
  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header

      // Find the heading that's currently in view
      let currentId = headings[0]?.id || "";

      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;

          if (absoluteTop <= scrollPosition) {
            currentId = heading.id;
          }
        }
      }

      setActiveId(currentId);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden xl:block fixed right-8 top-1/3 w-64 max-h-[50vh] overflow-y-auto"
    >
      <div className="border-l-2 border-zenith-surface pl-4">
        <div className="flex items-center gap-2 mb-4 text-zenith-text/40">
          <List className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-wider">On this page</span>
        </div>

        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: heading.level === 3 ? "1rem" : 0 }}
              className="relative"
            >
              {/* Active indicator */}
              {activeId === heading.id && (
                <motion.div
                  layoutId="tocIndicator"
                  className="absolute -left-4 top-0 bottom-0 w-0.5 bg-zenith-cyan"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`block text-sm font-mono transition-colors duration-200 ${
                  activeId === heading.id
                    ? "text-zenith-cyan font-medium"
                    : "text-zenith-text/50 hover:text-zenith-text"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
