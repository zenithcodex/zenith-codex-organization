"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Code } from "lucide-react";

const team = [
  {
    name: "Alex Chen",
    role: "Lead Architect",
    status: "online",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Jones",
    role: "Systems Engineer",
    status: "coding",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Void",
    role: "Security Ops",
    status: "offline",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop",
  },
  {
    name: "Elena R.",
    role: "Frontend Lead",
    status: "online",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-8 md:px-16 lg:px-24 ml-0 md:ml-20 border-b border-zenith-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide">
            The Collective
          </h2>
          <div className="flex items-center gap-2 text-zenith-text/50 font-mono text-sm">
            <span className="w-2 h-2 bg-zenith-green rounded-full animate-pulse" />
            <span>ACTIVE OPERATIVES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-square overflow-hidden border border-zenith-surface bg-zenith-surface mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-zenith-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                
                {/* Status Indicator */}
                <div className="absolute top-2 right-2 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-2 py-1 border border-white/10">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    member.status === 'online' ? 'bg-zenith-green' : 
                    member.status === 'coding' ? 'bg-zenith-cyan' : 'bg-red-500'
                  }`} />
                  <span className="text-[10px] font-mono uppercase text-white/70">{member.status}</span>
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold uppercase mb-1 group-hover:text-zenith-cyan transition-colors">
                {member.name}
              </h3>
              <p className="font-mono text-xs text-zenith-text/60 mb-4 uppercase tracking-wider">
                {member.role}
              </p>

              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Github className="w-4 h-4 text-zenith-text/50 hover:text-zenith-white cursor-pointer" />
                <Twitter className="w-4 h-4 text-zenith-text/50 hover:text-zenith-white cursor-pointer" />
                <Code className="w-4 h-4 text-zenith-text/50 hover:text-zenith-white cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
