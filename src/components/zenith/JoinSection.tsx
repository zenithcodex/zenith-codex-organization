"use client";

import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import ContactForm from "@/components/zenith/ContactForm";

export default function JoinSection() {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 ml-0 md:ml-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-zenith-green/30 bg-zenith-green/10 px-4 py-2 rounded-full mb-8"
        >
          <Radio className="w-4 h-4 text-zenith-green animate-pulse" />
          <span className="font-mono text-xs text-zenith-green tracking-widest uppercase">
            Transmission Open
          </span>
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-8 tracking-tight text-zenith-text">
          Ready to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-zenith-cyan to-zenith-cyan/50">
            Architect
          </span>{" "}
          the Future?
        </h2>

        <p className="font-mono text-zenith-text/70 max-w-2xl mx-auto mb-12 text-lg">
          The Zenith Codex is always looking for elite engineers. Join the collective and help us
          build the infrastructure of tomorrow.
        </p>

        <ContactForm />
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zenith-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zenith-cyan/50 to-transparent" />
    </section>
  );
}
