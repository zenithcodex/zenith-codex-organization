import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: "Hyperion Core",
        slug: "hyperion-core",
        description: "Distributed ledger infrastructure for high-frequency trading systems.",
        stats: { stars: "2.4k", forks: "142", language: "Rust" },
        tags: ["Blockchain", "Rust", "DeFi"],
    },
    {
        title: "Neural Bridge",
        slug: "neural-bridge",
        description: "API gateway for connecting legacy systems to LLM inference endpoints.",
        stats: { stars: "1.8k", forks: "98", language: "Go" },
        tags: ["AI", "Go", "API"],
    },
    {
        title: "Void Shell",
        slug: "void-shell",
        description: "Zsh configuration framework focusing on speed and minimalism.",
        stats: { stars: "4.2k", forks: "310", language: "Shell" },
        tags: ["CLI", "Productivity", "Tools"],
    },
];
