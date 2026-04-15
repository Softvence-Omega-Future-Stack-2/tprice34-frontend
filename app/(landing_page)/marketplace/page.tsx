"use client";

import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MarketplaceHero from "./components/MarketplaceHero";
import SearchBar from "./components/SearchBar";
import FilterSidebar from "./components/FilterSidebar";
import ProductCard from "./components/ProductCard";
import { DEMO_ITEMS, MarketplaceItem } from "./data";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [listingType, setListingType] = useState("All");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("newest");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter Logic: coordinated by committed state (Apply button in Sidebar)
  const filteredItems = useMemo(() => {
    return DEMO_ITEMS.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(search.toLowerCase()) || 
        item.location.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = category === "All" || item.category === category;
      
      const matchesType = listingType === "All" || item.type === listingType;
      
      const minPrice = priceRange.min ? parseInt(priceRange.min) : 0;
      const maxPrice = priceRange.max ? parseInt(priceRange.max) : Infinity;
      const matchesPrice = item.price >= minPrice && item.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesType && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "oldest") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); // newest
    });
  }, [search, category, listingType, priceRange, sortBy]);

  const handleClearFilters = () => {
    setCategory("All");
    setListingType("All");
    setPriceRange({ min: "", max: "" });
    setSearch("");
    setSortBy("newest");
  };

  return (
    <div className="bg-black min-h-screen">
      <MarketplaceHero />

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:flex gap-16">
          {/* Sidebar */}
          <FilterSidebar
            category={category}
            setCategory={setCategory}
            listingType={listingType}
            setListingType={setListingType}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            isOpen={isMobileFilterOpen}
            onClose={() => setIsMobileFilterOpen(false)}
            onClear={handleClearFilters}
          />

          {/* Main Content */}
          <div className="flex-1">
            <SearchBar
              search={search}
              setSearch={setSearch}
              sortBy={sortBy}
              setSortBy={setSortBy}
              onMobileFilterOpen={() => setIsMobileFilterOpen(true)}
            />

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-8 lg:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
                {filteredItems.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-20 text-center"
                  >
                    <p className="text-white/40 text-lg font-serif italic">
                      No matching luxury assets found.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
