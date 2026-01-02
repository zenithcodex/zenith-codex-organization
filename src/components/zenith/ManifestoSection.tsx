"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      id="manifesto"
      className="py-32 overflow-hidden relative border-b border-zenith-surface"
    >
      <div ref={containerRef} className="relative z-10">
        {/* Scrolling Text Background */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-5 pointer-events-none select-none overflow-hidden">
          <motion.div
            style={{ x: x1 }}
            className="whitespace-nowrap text-[10rem] font-display font-black text-zenith-text leading-none"
          >
            OPEN SOURCE OPEN MINDS OPEN FUTURE
          </motion.div>
          <motion.div
            style={{ x: x2 }}
            className="whitespace-nowrap text-[10rem] font-display font-black text-zenith-cyan leading-none ml-[-200px]"
          >
            DECENTRALIZE DEMOCRATIZE DEPLOY
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <div className="w-full h-[1px] bg-zenith-cyan mb-8" />
              <h2 className="font-mono text-zenith-cyan text-sm tracking-widest mb-4">
                {/* 01. THE MANIFESTO */}
                01. THE MANIFESTO
              </h2>
              <p className="font-mono text-zenith-text/60 text-xs leading-relaxed">
                WE REJECT THE SILO. WE REJECT THE BLACK BOX. CODE SHOULD BE AS TRANSPARENT AS THE
                LOGIC IT EXECUTES.
              </p>
            </div>

            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-4xl md:text-6xl font-heading font-bold leading-tight uppercase text-zenith-text">
                  Information wants to be <span className="text-zenith-green">free</span>.
                  <br />
                  Infrastructure needs to be <span className="text-zenith-cyan">resilient</span>.
                </h3>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-zenith-surface pl-6">
                    <h4 className="font-mono font-bold text-zenith-text mb-2">TRANSPARENCY</h4>
                    <p className="font-mono text-sm text-zenith-text/70">
                      Every line of code is auditable. No hidden backdoors. No proprietary magic.
                    </p>
                  </div>
                  <div className="border-l-2 border-zenith-surface pl-6">
                    <h4 className="font-mono font-bold text-zenith-text mb-2">VELOCITY</h4>
                    <p className="font-mono text-sm text-zenith-text/70">
                      Ship fast, break nothing. Our CI/CD pipelines are the envy of the enterprise.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
