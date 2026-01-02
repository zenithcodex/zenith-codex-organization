// Site Configuration
export const SITE_CONFIG = {
  name: "Zenith Codex",
  description: "Building infrastructure for the next paradigm",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zenith-codex.dev",
  ogImage: "/og-image.jpg",
} as const;

// Navigation
export const ROUTES = {
  home: "/",
  projects: "/projects",
  news: "/news",
  team: "/#team",
  contact: "/#contact",
} as const;

// Animation Durations (in seconds)
export const ANIMATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  stagger: 0.1,
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Status Types
export const STATUS = {
  online: "online",
  offline: "offline",
  busy: "busy",
  away: "away",
} as const;

// External Links
export const EXTERNAL_LINKS = {
  github: "https://github.com/zenithcodex",
  twitter: "https://twitter.com/zenithcodex",
  discord: "https://discord.gg/zenithcodex",
} as const;
