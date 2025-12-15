"use client";

import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";

export default function MobileNav() {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:hidden">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="flex justify-between items-center bg-zenith-base/80 backdrop-blur-lg border border-zenith-surface/50 rounded-2xl px-6 py-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
            >
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="group relative flex flex-col items-center justify-center text-zenith-text/50 hover:text-zenith-cyan transition-colors"
                        aria-label={item.label}
                    >
                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />

                        {/* Dot indicator on hover/active */}
                        <span className="absolute -bottom-2 w-1 h-1 rounded-full bg-zenith-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                        {/* Tooltip for accessibility/visual hint */}
                        <span className="sr-only">{item.label}</span>
                    </a>
                ))}
            </motion.nav>
        </div>
    );
}
