"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getVisiblePages = () => {
    if (totalPages <= 5) return pages;

    if (currentPage <= 3) {
      return [...pages.slice(0, 4), -1, totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, -1, ...pages.slice(totalPages - 4)];
    }

    return [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages];
  };

  const visiblePages = getVisiblePages();

  return (
    <nav className="flex items-center justify-center gap-2 mt-12">
      {/* Previous */}
      <Link
        href={currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : "#"}
        className={`p-2 border border-zenith-surface hover:border-zenith-cyan/30 transition-colors rounded-lg ${
          currentPage === 1 ? "opacity-50 pointer-events-none" : ""
        }`}
        aria-disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Link>

      {/* Page Numbers */}
      {visiblePages.map((page, index) =>
        page === -1 ? (
          <span key={`ellipsis-${index}`} className="px-2 text-zenith-text/40">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`w-10 h-10 flex items-center justify-center font-mono text-sm border transition-colors rounded-lg ${
              currentPage === page
                ? "border-zenith-cyan bg-zenith-cyan/10 text-zenith-cyan"
                : "border-zenith-surface hover:border-zenith-cyan/30 text-zenith-text"
            }`}
          >
            {page}
          </Link>
        )
      )}

      {/* Next */}
      <Link
        href={currentPage < totalPages ? `${basePath}?page=${currentPage + 1}` : "#"}
        className={`p-2 border border-zenith-surface hover:border-zenith-cyan/30 transition-colors rounded-lg ${
          currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
        }`}
        aria-disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </Link>
    </nav>
  );
}
