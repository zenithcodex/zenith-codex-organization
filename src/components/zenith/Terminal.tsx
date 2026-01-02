"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  type: "input" | "output" | "error" | "info";
  content: string;
}

interface TerminalProps {
  title?: string;
  initialLines?: TerminalLine[];
  onCommand?: (command: string) => TerminalLine[] | Promise<TerminalLine[]>;
  className?: string;
}

const defaultCommands: Record<string, () => TerminalLine[]> = {
  help: () => [
    { type: "info", content: "Available commands:" },
    { type: "output", content: "  help     - Show this help message" },
    { type: "output", content: "  clear    - Clear terminal" },
    { type: "output", content: "  about    - About Zenith Codex" },
    { type: "output", content: "  contact  - Contact information" },
    { type: "output", content: "  projects - List projects" },
    { type: "output", content: "  status   - System status" },
  ],
  about: () => [
    { type: "info", content: "ZENITH CODEX ORGANIZATION" },
    {
      type: "output",
      content: "Building infrastructure for the next paradigm.",
    },
    {
      type: "output",
      content: "A collective of engineers architecting the future.",
    },
  ],
  contact: () => [
    { type: "info", content: "Contact Information:" },
    { type: "output", content: "  Email: contact@zenith-codex.dev" },
    { type: "output", content: "  GitHub: github.com/zenithcodex" },
  ],
  projects: () => [
    { type: "info", content: "Active Projects:" },
    { type: "output", content: "  [01] Quantum Encryption Protocol" },
    { type: "output", content: "  [02] Neural Interface SDK" },
    { type: "output", content: "  [03] Decentralized Identity System" },
  ],
  status: () => [
    { type: "info", content: "System Status:" },
    { type: "output", content: "  Core Systems: ONLINE" },
    { type: "output", content: "  Network: CONNECTED" },
    { type: "output", content: "  Security: ACTIVE" },
    {
      type: "output",
      content: `  Uptime: ${Math.floor(Math.random() * 999)}h`,
    },
  ],
};

export default function Terminal({
  title = "terminal",
  initialLines = [],
  onCommand,
  className = "",
}: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (!trimmedCmd) return;

    setHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    setLines((prev) => [...prev, { type: "input", content: `$ ${cmd}` }]);

    if (trimmedCmd === "clear") {
      setLines([]);
      return;
    }

    if (onCommand) {
      const result = await onCommand(trimmedCmd);
      if (result.length > 0) {
        setLines((prev) => [...prev, ...result]);
        return;
      }
    }

    if (defaultCommands[trimmedCmd]) {
      setLines((prev) => [...prev, ...defaultCommands[trimmedCmd]()]);
      return;
    }

    setLines((prev) => [
      ...prev,
      {
        type: "error",
        content: `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
      },
    ]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getLineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "input":
        return "text-zenith-green";
      case "error":
        return "text-red-500 dark:text-red-400";
      case "info":
        return "text-zenith-cyan";
      default:
        return "text-gray-600 dark:text-zenith-text/70";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gray-900 dark:bg-zenith-base/90 border border-gray-700 dark:border-zenith-cyan/20 rounded-lg overflow-hidden ${className}`}
      onClick={focusInput}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-700 dark:border-zenith-cyan/10 bg-gray-800 dark:bg-zenith-surface/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
        </div>
        <span className="text-gray-400 dark:text-zenith-muted font-mono text-sm ml-2">{title}</span>
      </div>

      {/* Content */}
      <div ref={containerRef} className="p-4 font-mono text-sm h-64 overflow-y-auto cursor-text">
        {/* Welcome message */}
        {lines.length === 0 && (
          <div className="text-gray-500 dark:text-zenith-muted mb-2">
            <p>Welcome to Zenith Terminal v1.0</p>
            <p>Type &apos;help&apos; for available commands.</p>
          </div>
        )}

        {/* Output lines */}
        {lines.map((line, index) => (
          <div key={index} className={`${getLineColor(line.type)} mb-1`}>
            {line.content}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center">
          <span className="text-zenith-green mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-gray-100 dark:text-zenith-text caret-zenith-cyan"
            spellCheck={false}
          />
          <span className="w-2 h-4 bg-zenith-cyan animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}
