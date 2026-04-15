"use client";

import React, { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MarketplaceItem } from "../data";

interface ProductCardProps {
  item: MarketplaceItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case "Automotive": return "bg-[#34A853]/20 text-[#34A853] border-[#34A853]/20";
      case "Real Estate": return "bg-[#EA4335]/20 text-[#EA4335] border-[#EA4335]/20";
      case "Aviation": return "bg-[#4285F4]/20 text-[#4285F4] border-[#4285F4]/20";
      case "Yachts": return "bg-[#00D1FF]/20 text-[#00D1FF] border-[#00D1FF]/20";
      default: return "bg-white/10 text-white border-white/10";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-[#111] border border-white/[0.03] rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* VIP Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-primary text-black text-[9px] font-black uppercase tracking-widest rounded-sm shadow-xl">
            VIP
          </span>
        </div>

        {/* Category Badge(s) */}
        <div className="absolute bottom-4 left-4 flex gap-2 z-10">
          <span className={`px-2 py-0.5 border text-[8px] font-black uppercase tracking-widest rounded-sm backdrop-blur-md ${getCategoryBadgeColor(item.category)}`}>
            {item.category.toUpperCase()}
          </span>
          {item.category === "Real Estate" && (
            <span className="px-2 py-0.5 bg-[#EA4335]/20 text-[#EA4335] border border-[#EA4335]/20 text-[8px] font-black uppercase tracking-widest rounded-sm backdrop-blur-md">
              VILLA
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 bg-black/20 backdrop-blur-md border border-white/10 ${
            isWishlisted ? "text-red-500" : "text-white/40 hover:text-white"
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 truncate">
          {item.title}
        </h3>
        
        <div className="flex items-center gap-2 text-white/30 text-[11px] mb-6">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          {item.location}
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-y-5 gap-x-2 mb-8">
          {item.specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-white/20">
                <spec.icon size={16} strokeWidth={1.5} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[9px] text-white/20 uppercase font-black tracking-widest leading-none">
                  {spec.label}
                </p>
                <p className="text-[12px] text-white/80 font-bold leading-none">
                  {spec.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Details Button */}
        <Link href={`/marketplace/${item.id}`}>
          <button className="w-full py-3.5 bg-primary text-black font-black uppercase text-[10px] tracking-[0.2em] rounded hover:bg-white transition-all duration-300 cursor-pointer">
            View details
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
