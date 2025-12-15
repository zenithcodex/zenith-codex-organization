"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full border-l border-zenith-cyan/20 transform skew-x-12" />
      </div>

      <div className="relative z-10 max-w-7xl">
        <motion.div
          initial={{ scale: 1.5, opacity: 0, rotate: -2 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter text-zenith-white leading-[0.85] uppercase">
            Zenith
            <br />
            <span className="relative">
              Codex
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-2 bg-zenith-cyan shadow-[0_0_20px_rgba(0,240,255,0.8)]"
              />
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-zenith-green" />
            <span className="text-zenith-green font-mono text-sm tracking-widest uppercase">System Online</span>
          </div>
          <p className="text-xl md:text-2xl font-mono text-zenith-text/80 leading-relaxed">
            Building infrastructure for the next paradigm. 
            <br />
            A collective of engineers architecting the future.
          </p>
        </motion.div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 border-zenith-cyan opacity-50" />
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 border-zenith-cyan opacity-50" />
    </section>
  );
}