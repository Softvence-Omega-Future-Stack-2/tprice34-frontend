"use client";

import React from "react";
import { X } from "lucide-react";

interface FilterSidebarProps {
  category: string;
  setCategory: (val: string) => void;
  listingType: string;
  setListingType: (val: string) => void;
  priceRange: { min: string; max: string };
  setPriceRange: (val: { min: string; max: string }) => void;
  isOpen: boolean;
  onClose: () => void;
  onClear: () => void;
}

export default function FilterSidebar({
  category,
  setCategory,
  listingType,
  setListingType,
  priceRange,
  setPriceRange,
  isOpen,
  onClose,
  onClear,
}: FilterSidebarProps) {
  const categories = ["All", "Automotive", "Real Estate", "Aviation", "Yachts"];
  const types = ["All", "VIP", "Private", "Dealer Inventory"];

  const content = (
    <div className="space-y-10">
      <div className="flex items-center justify-between lg:block mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold text-white italic">Filters</h2>
        <button onClick={onClose} className="lg:hidden p-2 text-white/50 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-bold text-white/60 mb-6 tracking-widest uppercase">Category</h3>
        <div className="space-y-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`w-full text-left px-5 py-3 rounded-lg border transition-all text-sm font-medium ${
                category === cat
                  ? "bg-primary border-primary text-black"
                  : "bg-white/5 border-white/5 text-white/40 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Listing Type Filter */}
      <div>
        <h3 className="text-sm font-bold text-white/60 mb-6 tracking-widest uppercase">Listing Type</h3>
        <div className="space-y-4">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setListingType(type)}
              className={`w-full text-left px-5 py-3 rounded-lg border transition-all text-sm font-medium ${
                listingType === type
                  ? "bg-primary border-primary text-black"
                  : "bg-white/5 border-white/5 text-white/40 hover:border-white/20"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Range */}
      <div>
        <h3 className="text-sm font-bold text-white/60 mb-6 tracking-widest uppercase">Pricing Range</h3>
        <div className="flex items-center gap-4">
          <input
            type="number"
            placeholder="Min Price"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-primary/50"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-primary/50"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4 pt-6">
        <button
          onClick={onClear}
          className="py-3.5 px-6 rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all text-sm font-bold uppercase tracking-widest"
        >
          Clear All
        </button>
        <button
          onClick={onClose}
          className="py-3.5 px-6 rounded-lg bg-primary text-black hover:bg-white transition-all text-sm font-black uppercase tracking-widest"
        >
          Apply
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 shrink-0 bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 sticky top-32 h-fit">
        {content}
      </aside>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 bg-[#0A0A0A] p-8 overflow-y-auto transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {content}
        </div>
      </div>
    </>
  );
}
