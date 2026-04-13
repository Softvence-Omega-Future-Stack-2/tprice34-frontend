"use client";

import React, { useState } from "react";
import { Heart, MapPin, Calendar, Gauge, Cog, Anchor, Ship, Wind, Move, Ruler, Home } from "lucide-react";
import { motion } from "framer-motion";

export interface MarketplaceItem {
  id: number;
  title: string;
  category: "Automotive" | "Yachts" | "Aviation" | "Real Estate";
  price: number;
  location: string;
  image: string;
  type: "VIP" | "Private" | "Dealer Inventory";
  specs: {
    label: string;
    value: string;
    icon: any;
  }[];
  createdAt: string;
}

interface ProductCardProps {
  item: MarketplaceItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group bg-[#111113] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-all shadow-xl"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
          <span className="px-3.5 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
            {item.type === "Dealer Inventory" ? "DEALER" : item.type}
          </span>
          <span className="px-3.5 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
            {item.category}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition-all z-10 ${
            isWishlisted ? "bg-red-500 border-red-500 text-white" : "bg-black/20 border-white/10 text-white hover:bg-white hover:text-black"
          }`}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors truncate italic">
          {item.title}
        </h3>
        
        <div className="flex items-center gap-2 text-white/40 text-xs mb-8">
          <MapPin className="w-4 h-4 text-primary/60" />
          {item.location}
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
          {item.specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-4 group/spec">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary/70 group-hover/spec:bg-primary group-hover/spec:text-black transition-all">
                <spec.icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-white/20 uppercase font-black tracking-widest leading-none">
                  {spec.label}
                </p>
                <p className="text-sm text-white/80 font-bold leading-none italic">
                  {spec.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Details Button */}
        <button className="w-full py-4 bg-primary text-black font-black uppercase text-xs tracking-[0.2em] rounded-lg hover:bg-white transition-all shadow-[0_4px_20px_rgba(212,175,55,0.1)]">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
