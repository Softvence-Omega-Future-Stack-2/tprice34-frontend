"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Star, Globe } from "lucide-react";

const TRUST_PILLARS = [
  {
    title: "Curated Selection",
    desc: "Only the finest assets, handpicked by our world-class team of experts.",
    icon: Star,
  },
  {
    title: "Seamless Transactions",
    desc: "Advanced secure escrow and legal processing for complex cross-border deals.",
    icon: Zap,
  },
  {
    title: "White-glove Service",
    desc: "Exclusive 1-on-1 concierge support for every high-value acquisition.",
    icon: ShieldCheck,
  },
  {
    title: "Global Network",
    desc: "Direct access to private collections and off-market inventory worldwide.",
    icon: Globe,
  },
];

export default function Trust() {
  return (
    <section className="py-32 bg-black px-6">
      <div className="container mx-auto">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h4
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-6"
          >
            Why Choose Us
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-serif leading-tight"
          >
            The Premier Destination For <span className="text-primary italic">Luxury Assets</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the ultimate in curation and service across automotive, yachting, aviation, and real estate. Your journey to excellence starts here.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TRUST_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-12 bg-[#0A0A0A] border border-[#D4AF37]/10 rounded-xl overflow-hidden"
            >
              {/* Subtle Internal Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors italic">
                  {pillar.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {pillar.desc}
                </p>
              </div>

              {/* Precise Border Animation */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
