"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, X, FileText, Folder } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

interface SearchResult {
  type: "project" | "news";
  title: string;
  slug: string;
  description?: string;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const allContent: SearchResult[] = useMemo(
    () => [
      ...projects.map((p) => ({
        type: "project" as const,
        title: p.title,
        slug: `/projects/${p.slug}`,
        description: p.description,
      })),
    ],
    []
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "/" && !e.ctrlKey && !e.metaKey) ||
        (e.key === "k" && (e.ctrlKey || e.metaKey))
      ) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = allContent.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.description?.toLowerCase().includes(searchQuery)
    );
    setResults(filtered);
  }, [query, allContent]);

  const handleSelect = () => {
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-50 hidden md:flex items-center gap-2 px-4 py-2 bg-zenith-surface/50 border border-zenith-surface hover:border-zenith-cyan/30 text-zenith-text/50 text-sm font-mono transition-colors rounded-lg"
      >
        <SearchIcon className="w-4 h-4" />
        <span>Search</span>
        <kbd className="ml-2 px-1.5 py-0.5 bg-zenith-base border border-zenith-surface text-xs rounded">
          /
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh] bg-zenith-base/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-xl mx-4 bg-zenith-surface border border-zenith-cyan/20 overflow-hidden rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-zenith-surface">
                <SearchIcon className="w-5 h-5 text-zenith-text/50" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, news..."
                  className="flex-1 bg-transparent outline-none text-zenith-text placeholder:text-zenith-text/50 font-mono"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zenith-text/50 hover:text-zenith-text"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto">
                {query && results.length === 0 && (
                  <div className="px-4 py-8 text-center text-zenith-text/50 font-mono text-sm">
                    No results found for &quot;{query}&quot;
                  </div>
                )}

                {results.map((result) => (
                  <Link
                    key={`${result.type}-${result.slug}`}
                    href={result.slug}
                    onClick={handleSelect}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-zenith-cyan/5 border-b border-zenith-surface/50 transition-colors"
                  >
                    {result.type === "project" ? (
                      <Folder className="w-4 h-4 text-zenith-cyan" />
                    ) : (
                      <FileText className="w-4 h-4 text-zenith-green" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-zenith-text font-medium truncate">{result.title}</div>
                      {result.description && (
                        <div className="text-zenith-text/50 text-xs truncate">
                          {result.description}
                        </div>
                      )}
                    </div>
                    <span className="text-zenith-text/40 text-xs font-mono uppercase">
                      {result.type}
                    </span>
                  </Link>
                ))}

                {!query && (
                  <div className="px-4 py-6 text-center text-zenith-text/50 font-mono text-sm">
                    <p>Type to search projects and news</p>
                    <p className="mt-2 text-xs">
                      Press <kbd className="px-1 bg-zenith-base rounded">↑</kbd>{" "}
                      <kbd className="px-1 bg-zenith-base rounded">↓</kbd> to navigate,{" "}
                      <kbd className="px-1 bg-zenith-base rounded">Enter</kbd> to select
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
