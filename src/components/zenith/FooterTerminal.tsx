"use client";

import Terminal from "./Terminal";

interface TerminalLine {
  type: "input" | "output" | "error" | "info";
  content: string;
}

export default function FooterTerminal() {
  const handleCommand = async (cmd: string): Promise<TerminalLine[]> => {
    switch (cmd) {
      case "social":
        return [
          { type: "info", content: "Social Links:" },
          { type: "output", content: "  GitHub:  github.com/zenithcodex" },
          { type: "output", content: "  Twitter: twitter.com/zenithcodex" },
          { type: "output", content: "  Discord: discord.gg/zenithcodex" },
        ];
      case "stack":
        return [
          { type: "info", content: "Tech Stack:" },
          { type: "output", content: "  Framework: Next.js 14" },
          { type: "output", content: "  Language:  TypeScript" },
          { type: "output", content: "  Styling:   Tailwind CSS" },
          { type: "output", content: "  Animation: Framer Motion" },
        ];
      case "hire":
        return [
          { type: "info", content: "We're hiring!" },
          {
            type: "output",
            content: "Send your resume to: careers@zenith-codex.dev",
          },
        ];
      case "ping":
        return [
          { type: "output", content: "PING zenith-codex.dev" },
          {
            type: "output",
            content: `64 bytes: time=${Math.floor(Math.random() * 50 + 10)}ms`,
          },
          { type: "info", content: "Server is online and responsive." },
        ];
      default:
        return [];
    }
  };

  return (
    <footer className="bg-zenith-base py-12 px-8 md:px-16 lg:px-24 ml-0 md:ml-20 border-t border-zenith-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h4 className="font-heading font-bold text-2xl mb-6 text-zenith-text">Zenith Codex</h4>
          <div className="font-mono text-sm text-zenith-text/50 space-y-2">
            <p>© {new Date().getFullYear()} Zenith Codex Organization.</p>
            <p>All systems operational.</p>
          </div>
          <div className="mt-6 font-mono text-xs text-zenith-text/40">
            <p>Try commands: help, social, stack, hire, ping</p>
          </div>
        </div>

        <Terminal title="zenith-shell" onCommand={handleCommand} className="h-64" />
      </div>
    </footer>
  );
}
