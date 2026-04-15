"use client";

import React, { useState, useEffect } from "react";
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

  // Local staged state
  const [stagedCategory, setStagedCategory] = useState(category);
  const [stagedType, setStagedType] = useState(listingType);
  const [stagedPrice, setStagedPrice] = useState(priceRange);

  // Sync internal state with external when prop changes (e.g. onClear)
  useEffect(() => {
    setStagedCategory(category);
    setStagedType(listingType);
    setStagedPrice(priceRange);
  }, [category, listingType, priceRange]);

  const handleApply = () => {
    setCategory(stagedCategory);
    setListingType(stagedType);
    setPriceRange(stagedPrice);
    if (onClose) onClose();
  };

  const handleClear = () => {
    onClear();
  };

  const content = (
    <div className="space-y-6">
      <div className="flex items-center justify-between lg:block mb-8 lg:mb-0">
        <h2 className="text-xl font-bold text-white uppercase tracking-widest">Filters</h2>
        <button onClick={onClose} className="lg:hidden p-2 text-white/50 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-[10px] font-bold text-white/40 mb-5 tracking-[0.2em] uppercase">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setStagedCategory(cat)}
              className={`w-full text-left px-4 py-2 rounded border transition-all text-[13px] font-medium ${
                stagedCategory === cat
                  ? "bg-primary/5 border-primary/20 text-primary"
                  : "bg-white/[0.02] border-white/5 text-white/40 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Listing Type Filter */}
      <div>
        <h3 className="text-[10px] font-bold text-white/40 mb-5 tracking-[0.2em] uppercase">Listing Type</h3>
        <div className="space-y-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setStagedType(type)}
              className={`w-full text-left px-4 py-2 rounded border transition-all text-[13px] font-medium ${
                stagedType === type
                  ? "bg-primary/5 border-primary/20 text-primary"
                  : "bg-white/[0.02] border-white/5 text-white/40 hover:border-white/20 hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Range */}
      <div>
        <h3 className="text-[10px] font-bold text-white/40 mb-5 tracking-[0.2em] uppercase">Pricing Range</h3>
        <div className="space-y-3">
          <input
            type="number"
            placeholder="Min Price"
            value={stagedPrice.min}
            onChange={(e) => setStagedPrice({ ...stagedPrice, min: e.target.value })}
            className="w-full bg-white/[0.02] border border-white/10 rounded py-2 px-4 text-sm text-white focus:outline-none focus:border-primary/50 placeholder:text-white/10"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={stagedPrice.max}
            onChange={(e) => setStagedPrice({ ...stagedPrice, max: e.target.value })}
            className="w-full bg-white/[0.02] border border-white/10 rounded py-2 px-4 text-sm text-white focus:outline-none focus:border-primary/50 placeholder:text-white/10"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-4">
        <button
          onClick={handleClear}
          className="text-no py-3 px-4 text-nowrap rounded border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all text-[11px] font-bold uppercase tracking-widest cursor-pointer"
        >
          Clear All
        </button>
        <button
          onClick={handleApply}
          className="py-3 px-4 rounded text-nowrap bg-primary text-black hover:bg-white transition-all text-[11px] font-black uppercase tracking-widest cursor-pointer"
        >
          Apply
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 bg-[#0A0A0A] border border-white/5 rounded-xl p-8 sticky top-32 h-fit">
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
