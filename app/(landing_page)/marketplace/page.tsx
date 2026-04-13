"use client";

import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MarketplaceHero from "./components/MarketplaceHero";
import SearchBar from "./components/SearchBar";
import FilterSidebar from "./components/FilterSidebar";
import ProductCard, { MarketplaceItem } from "./components/ProductCard";
import { 
  Gauge, Cog, Calendar, Anchor, Ship, Wind, Move, Ruler, Home, Users, Zap, Plane 
} from "lucide-react";

const DEMO_ITEMS: MarketplaceItem[] = [
  {
    id: 1,
    title: "Bugatti Chiron Super Sport",
    category: "Automotive",
    price: 3800000,
    location: "Richardson, TX, United State",
    image: "/images/landing/hero-car.png",
    type: "VIP",
    createdAt: "2026-04-10",
    specs: [
      { label: "9,250 kms", value: "9,250", icon: Gauge },
      { label: "Diesel", value: "Diesel", icon: Wind },
      { label: "Automatic", value: "Automatic", icon: Cog },
      { label: "2021", value: "2021", icon: Calendar },
    ],
  },
  {
    id: 2,
    title: "Modern Glass Villa",
    category: "Real Estate",
    price: 12500000,
    location: "Richardson, TX, United State",
    image: "/images/landing/hero-villa.png",
    type: "Private",
    createdAt: "2026-04-12",
    specs: [
      { label: "8 Beds", value: "8", icon: Home },
      { label: "4 Baths", value: "4", icon: Zap },
      { label: "5,000 sqft", value: "5,000", icon: Move },
      { label: "2021", value: "2021", icon: Calendar },
    ],
  },
  {
    id: 3,
    title: "Azimut Grande 35 Metri",
    category: "Yachts",
    price: 9500000,
    location: "Richardson, TX, United State",
    image: "/images/landing/hero-yacht.png",
    type: "Dealer Inventory",
    createdAt: "2026-04-11",
    specs: [
      { label: "108 ft", value: "108", icon: Ruler },
      { label: "5 Cabins", value: "5", icon: Ship },
      { label: "12 Guests", value: "12", icon: Users },
      { label: "2021", value: "2021", icon: Calendar },
    ],
  },
  {
    id: 4,
    title: "Gulfstream G650ER",
    category: "Aviation",
    price: 65000000,
    location: "Richardson, TX, United State",
    image: "/images/landing/hero-jet.png",
    type: "VIP",
    createdAt: "2026-04-13",
    specs: [
      { label: "7,000 nm Range", value: "7,000", icon: Plane },
      { label: "16 Passengers", value: "16", icon: Users },
      { label: "Mach 0.925", value: "Mach 0.925", icon: Zap },
      { label: "2021", value: "2021", icon: Calendar },
    ],
  },
  // Adding duplicates with minor changes for grid fill as per design
  {
    id: 5,
    title: "Lamborghini Aventador SVJ",
    category: "Automotive",
    price: 520000,
    location: "Richardson, TX, United State",
    image: "/images/landing/hero-car.png",
    type: "VIP",
    createdAt: "2026-04-09",
    specs: [
      { label: "1,200 kms", value: "1,200", icon: Gauge },
      { label: "Petrol", value: "Petrol", icon: Wind },
      { label: "Automatic", value: "Automatic", icon: Cog },
      { label: "2021", value: "2021", icon: Calendar },
    ],
  },
  {
    id: 6,
    title: "Waterfront Estate",
    category: "Real Estate",
    price: 18000000,
    location: "Richardson, TX, United State",
    image: "/images/landing/hero-villa.png",
    type: "Dealer Inventory",
    createdAt: "2026-04-08",
    specs: [
      { label: "12 Beds", value: "12", icon: Home },
      { label: "8 Baths", value: "8", icon: Zap },
      { label: "8,500 sqft", value: "8,500", icon: Move },
      { label: "2021", value: "2021", icon: Calendar },
    ],
  },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [listingType, setListingType] = useState("All");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("newest");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filtering Logic
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

      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="lg:flex gap-12">
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-20 text-center"
                  >
                    <p className="text-white/40 text-xl font-serif italic">
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
