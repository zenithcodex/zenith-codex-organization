"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zenith-base relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 noise opacity-30" />
      <div className="absolute inset-0 scanlines opacity-10" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-zenith-cyan" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-zenith-cyan" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-zenith-cyan" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-zenith-cyan" />
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-zenith-cyan/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-zenith-cyan/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-zenith-cyan/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-zenith-cyan/30" />

      <div className="relative z-10 text-center space-y-8 p-8 max-w-2xl">
        {/* Glitchy 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative"
        >
          <h1 className="text-[10rem] md:text-[14rem] font-display font-black text-zenith-cyan leading-none tracking-tighter text-glow">
            404
          </h1>
          {/* Glitch layers */}
          <span
            className="absolute inset-0 text-[10rem] md:text-[14rem] font-display font-black text-red-500/20 leading-none tracking-tighter animate-pulse"
            style={{ clipPath: "inset(10% 0 60% 0)", transform: "translate(-2px, 2px)" }}
          >
            404
          </span>
          <span
            className="absolute inset-0 text-[10rem] md:text-[14rem] font-display font-black text-blue-500/20 leading-none tracking-tighter animate-pulse"
            style={{ clipPath: "inset(60% 0 10% 0)", transform: "translate(2px, -2px)" }}
          >
            404
          </span>
        </motion.div>

        {/* Error Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-red-500" />
            <span className="text-red-500 font-mono text-sm tracking-widest uppercase">
              System Error
            </span>
            <div className="w-8 h-px bg-red-500" />
          </div>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-zenith-white">
            Page Not Found
          </h2>

          <p className="text-zenith-text/70 font-mono text-sm max-w-md mx-auto">
            The requested node does not exist in the network. It may have been moved, deleted, or
            never existed.
          </p>
        </motion.div>

        {/* Terminal-style message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-zenith-base/80 border border-zenith-cyan/20 rounded-lg p-4 font-mono text-sm text-left"
        >
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zenith-cyan/10">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-zenith-muted ml-2">terminal</span>
          </div>
          <div className="space-y-1 text-zenith-text/60">
            <p>
              <span className="text-zenith-green">$</span> locate requested_page
            </p>
            <p className="text-red-400">Error: Resource not found in system registry</p>
            <p>
              <span className="text-zenith-green">$</span> suggest --alternatives
            </p>
            <p className="text-zenith-cyan">&gt; Redirecting to home base recommended</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Button
            asChild
            className="bg-zenith-cyan text-zenith-base hover:bg-zenith-cyan/90 font-mono"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Base
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-zenith-cyan/50 text-zenith-cyan hover:bg-zenith-cyan/10 font-mono"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
