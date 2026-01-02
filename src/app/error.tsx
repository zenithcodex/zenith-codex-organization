"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, Copy, Check } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  const copyError = () => {
    const errorInfo = `Error: ${error.message}\nDigest: ${error.digest || "N/A"}\nStack: ${error.stack || "N/A"}`;
    navigator.clipboard.writeText(errorInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zenith-base relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 noise opacity-30" />
      <div className="absolute inset-0 scanlines opacity-10" />

      {/* Animated Warning Stripes */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />

      {/* Pulsing Background Glow */}
      <div className="absolute inset-0 bg-red-500/5 animate-pulse" />

      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-red-500/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-red-500/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-red-500/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-red-500/30" />

      <div className="relative z-10 text-center space-y-8 p-8 max-w-2xl">
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            <AlertTriangle className="w-24 h-24 text-red-500 animate-pulse" />
            <div className="absolute inset-0 blur-xl bg-red-500/30 animate-pulse" />
          </div>
        </motion.div>

        {/* Error Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-red-500" />
            <span className="text-red-500 font-mono text-sm tracking-widest uppercase animate-pulse">
              Critical Failure
            </span>
            <div className="w-8 h-px bg-red-500" />
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-black text-red-500 tracking-tight">
            SYSTEM ERROR
          </h1>

          <p className="text-zenith-text/70 font-mono text-sm">
            An unexpected error has crashed the current process.
          </p>
        </motion.div>

        {/* Error Details Terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-zenith-base/80 border border-red-500/30 rounded-lg p-4 font-mono text-sm text-left"
        >
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-red-500/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/30" />
              <span className="text-red-400 ml-2">error_log</span>
            </div>
            <button
              onClick={copyError}
              className="text-zenith-muted hover:text-zenith-text transition-colors"
              title="Copy error details"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="space-y-2 text-zenith-text/60 overflow-hidden">
            <p>
              <span className="text-red-400">[ERROR]</span> Process terminated unexpectedly
            </p>
            <p className="text-red-400 break-all">
              &gt; {error.message || "Unknown error detected"}
            </p>
            {error.digest && (
              <p className="text-zenith-muted/50">
                <span className="text-yellow-500">[DIGEST]</span> {error.digest}
              </p>
            )}
            <p>
              <span className="text-zenith-cyan">[INFO]</span> Recovery options available
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Button onClick={reset} className="bg-red-500 text-white hover:bg-red-600 font-mono">
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry Process
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            className="border-zenith-cyan/50 text-zenith-cyan hover:bg-zenith-cyan/10 font-mono"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Base
          </Button>
        </motion.div>

        {/* Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-zenith-muted/50 text-xs font-mono"
        >
          If this error persists, please contact system administrators.
        </motion.p>
      </div>
    </div>
  );
}
