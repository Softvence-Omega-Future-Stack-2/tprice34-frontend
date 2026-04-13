"use client";

import React from "react";
import { motion } from "framer-motion";

const PARTNERS = [
  { name: "FERRARI", logo: "🐎" },
  { name: "LAMBORGHINI", logo: "🐂" },
  { name: "MCLAREN", logo: "🏁" },
  { name: "MERCEDES", logo: "⭐" },
  { name: "BENTLEY", logo: "🦅" },
  { name: "ROLLS ROYCE", logo: "💎" },
];

export default function Partners() {
  return (
    <section className="py-24 bg-black border-t border-white/5 px-6">
      <div className="container mx-auto">
        <div className="flex items-center gap-6 mb-16 overflow-hidden">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1" />
          <motion.h4
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase whitespace-nowrap"
          >
            Our Branding Partners
          </motion.h4>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1" />
        </div>

        {/* Animated Infinite Scroll or Responsive Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="flex flex-col items-center gap-4 group cursor-default"
            >
              <span className="text-4xl">{partner.logo}</span>
              <span className="text-white text-xs font-bold tracking-[0.2em] group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
