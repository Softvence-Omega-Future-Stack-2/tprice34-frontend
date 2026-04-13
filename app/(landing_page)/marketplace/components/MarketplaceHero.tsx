"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MarketplaceHero() {
  return (
    <section className="relative h-[450px] w-full overflow-hidden flex flex-col justify-center items-center text-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/landing/hero-yacht.png"
          alt="Marketplace Hero"
          className="w-full h-full object-cover"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-[2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-4">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary text-xs font-bold tracking-[0.4em] uppercase"
        >
          Exclusive Listings
        </motion.h4>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-white italic"
        >
          The <span className="text-primary italic">Marketplace</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Browse Our Curated Collection Of Ultra-Premium Assets — From Hyper Cars And Super Yachts To Private Jets And Trophy Real Estate. Each Listing Is Carefully Selected To Meet The Highest Standards Of Quality, Exclusivity, And Performance.
        </motion.p>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[3]" />
    </section>
  );
}
