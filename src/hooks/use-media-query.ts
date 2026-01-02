"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatch = () => setMatches(media.matches);
    updateMatch();

    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

// Preset hooks
export function useIsMobile() {
  return useMediaQuery("(max-width: 768px)");
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
