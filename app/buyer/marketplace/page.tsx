"use client";

import React, { useState } from "react";
import { Eye, MapPin, ChevronDown, RotateCcw } from "lucide-react";
import Link from "next/link";
import AnimationWrapper from "../../components/AnimationWrapper";

/* ─── Data ─── */
const categories = ["All", "Car", "Yacht", "Jet", "Real Estate", "Watch"];

interface Asset {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  category: string;
  type?: string;
  model?: string;
  year?: number;
  priceValue: number;
}

const assets: Asset[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
    title: "Ferrari 488 Spider",
    location: "Monaco",
    price: "$295,000",
    category: "Car",
    type: "Sport",
    model: "Ferrari",
    year: 2022,
    priceValue: 295000,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800",
    title: "Azimut Grande 27M",
    location: "Monaco",
    price: "$295,000",
    category: "Yacht",
    type: "Yacht",
    model: "Volvo",
    year: 2021,
    priceValue: 295000,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=800",
    title: "Rolex Daytona 116S",
    location: "Monaco",
    price: "$295,000",
    category: "Watch",
    type: "Luxury",
    model: "Rolex",
    year: 2023,
    priceValue: 295000,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800",
    title: "Azimut Grande 27M",
    location: "Monaco",
    price: "$295,000",
    category: "Yacht",
    type: "Yacht",
    model: "Azimut",
    year: 2020,
    priceValue: 295000,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=800",
    title: "Rolex Daytona 116S",
    location: "Monaco",
    price: "$295,000",
    category: "Watch",
    type: "Sport",
    model: "Rolex",
    year: 2022,
    priceValue: 295000,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800",
    title: "Gulfstream G650ER",
    location: "Monaco",
    price: "$295,000",
    category: "Jet",
    type: "Private Jet",
    model: "Gulfstream",
    year: 2019,
    priceValue: 295000,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
    title: "Ferrari 488 Spider",
    location: "Monaco",
    price: "$295,000",
    category: "Car",
    type: "Convertible",
    model: "Ferrari",
    year: 2023,
    priceValue: 295000,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=800",
    title: "Rolex Daytona 116S",
    location: "Monaco",
    price: "$295,000",
    category: "Watch",
    type: "Casual",
    model: "Rolex",
    year: 2024,
    priceValue: 295000,
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800",
    title: "Azimut Grande 27M",
    location: "Monaco",
    price: "$295,000",
    category: "Yacht",
    type: "Yacht",
    model: "Azimut",
    year: 2021,
    priceValue: 295000,
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800",
    title: "Azimut Grande 27M",
    location: "Monaco",
    price: "$295,000",
    category: "Yacht",
    type: "Yacht",
    model: "Azimut",
    year: 2022,
    priceValue: 295000,
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=800",
    title: "Rolex Daytona 116S",
    location: "Monaco",
    price: "$295,000",
    category: "Watch",
    type: "Luxury",
    model: "Rolex",
    year: 2022,
    priceValue: 295000,
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800",
    title: "Gulfstream G650ER",
    location: "Monaco",
    price: "$295,000",
    category: "Jet",
    type: "Private Jet",
    model: "Gulfstream",
    year: 2023,
    priceValue: 295000,
  },
];

/* ─── Page ─── */
export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Applied filters
  const [appliedFilters, setAppliedFilters] = useState({
    type: "All",
    model: "All",
    yearFrom: "2005",
    yearTo: "2024",
    priceMin: 12000,
    priceMax: 500000
  });

  // Draft filters (for sidebar inputs)
  const [draftFilters, setDraftFilters] = useState({ ...appliedFilters });

  const minLimit = 0;
  const maxLimit = 500000;

  const handleReset = () => {
    setActiveCategory("All");
    const resetValues = {
      type: "All",
      model: "All",
      yearFrom: "2005",
      yearTo: "2024",
      priceMin: 12000,
      priceMax: 500000
    };
    setDraftFilters(resetValues);
    setAppliedFilters(resetValues);
  };

  const handleApply = () => {
    setAppliedFilters({ ...draftFilters });
  };

  const filteredAssets = assets.filter((asset) => {
    const categoryMatch = activeCategory === "All" || asset.category === activeCategory;
    const typeMatch = appliedFilters.type === "All" || asset.type === appliedFilters.type;
    const modelMatch = appliedFilters.model === "All" || asset.model === appliedFilters.model;
    const yearMatch = (asset.year || 0) >= parseInt(appliedFilters.yearFrom) && (asset.year || 0) <= parseInt(appliedFilters.yearTo);
    const priceMatch = asset.priceValue >= appliedFilters.priceMin && asset.priceValue <= appliedFilters.priceMax;

    return categoryMatch && typeMatch && modelMatch && yearMatch && priceMatch;
  });

  return (
    <div className="  mx-auto relative z-0">
      {/* ── Page Header ── */}
      <div className="flex items-start justify-between mb-10">
        <AnimationWrapper type="fade-down" duration={0.5}>
          <div>
            <h2 className="text-3xl font-clash font-bold tracking-tight">
              Exclusive Collection
            </h2>
            <p className="text-gray-500 text-sm mt-2 font-medium">
              Discover the world&apos;s finest assets available for acquisition.
            </p>
          </div>
        </AnimationWrapper>

        {/* Category Tabs */}
        <AnimationWrapper type="fade-down" duration={0.5} delay={0.1}>
          <div className="flex items-center gap-1.5 bg-[#18181A] border border-[#2C2C2E] rounded-full p-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200
                  ${activeCategory === cat
                    ? "bg-[#E78F23] text-white shadow-[0_2px_12px_rgba(231,143,35,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimationWrapper>
      </div>

      {/* ── Body: Filter + Grid ── */}
      <div className="flex gap-8">
        {/* ── Filter Sidebar ── */}
        <aside className="w-[300px] shrink-0">
          <AnimationWrapper type="fade-right" duration={0.6} delay={0.1}>
            <div className="bg-[#1C1C1E] border border-[#2C2C2E] rounded-2xl p-6 sticky top-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Filter Listing</h3>
                <button
                  onClick={handleReset}
                  className="text-[#E78F23] text-sm font-medium hover:underline"
                >
                  Reset
                </button>
              </div>
              <div className="h-px bg-[#2C2C2E] w-full mb-6" />

              {/* Category */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-4">Category</label>
                <div className="flex flex-col gap-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-4 py-2 rounded-lg text-sm transition-all ${activeCategory === cat
                        ? "bg-[#2C2C2E] text-white font-medium"
                        : "text-gray-500 hover:text-gray-300"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type */}
              <FilterSelect
                label="Type"
                value={draftFilters.type}
                onChange={(val) => setDraftFilters(prev => ({ ...prev, type: val }))}
                options={["All", "Sport", "Yacht", "Luxury", "Private Jet", "Convertible", "Casual"]}
              />

              {/* Model */}
              <FilterSelect
                label="Model"
                value={draftFilters.model}
                onChange={(val) => setDraftFilters(prev => ({ ...prev, model: val }))}
                options={["All", "Ferrari", "Volvo", "Rolex", "Azimut", "Gulfstream"]}
              />

              {/* Build Year */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-4">Build Year</label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={draftFilters.yearFrom}
                    onChange={(e) => setDraftFilters(prev => ({ ...prev, yearFrom: e.target.value }))}
                    className="w-full bg-transparent border border-[#E78F23]/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E78F23] transition-colors"
                    placeholder="2005"
                  />
                  <span className="text-gray-500 text-sm">to</span>
                  <input
                    type="text"
                    value={draftFilters.yearTo}
                    onChange={(e) => setDraftFilters(prev => ({ ...prev, yearTo: e.target.value }))}
                    className="w-full bg-transparent border border-[#E78F23]/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E78F23] transition-colors"
                    placeholder="2024"
                  />
                </div>
              </div>

              <div className="h-px bg-[#2C2C2E] w-full mb-6" />

              {/* Price Range */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-6">Price Range</label>
                <div className="relative h-1 bg-[#2C2C2E] rounded-full mb-6">
                  <div
                    className="absolute h-full bg-[#E78F23]"
                    style={{
                      left: `${((draftFilters.priceMin - minLimit) / (maxLimit - minLimit)) * 100}%`,
                      right: `${100 - ((draftFilters.priceMax - minLimit) / (maxLimit - minLimit)) * 100}%`,
                    }}
                  />
                  <input
                    type="range"
                    min={minLimit}
                    max={maxLimit}
                    value={draftFilters.priceMin}
                    onChange={(e) => setDraftFilters(prev => ({ ...prev, priceMin: Math.min(Number(e.target.value), draftFilters.priceMax - 1000) }))}
                    className="absolute w-full -top-2 h-5 appearance-none bg-transparent pointer-events-none 
                      [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none 
                      [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-md 
                      [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#E78F23] 
                      [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg
                      [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 
                      [&::-moz-range-thumb]:rounded-md [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 
                      [&::-moz-range-thumb]:border-[#E78F23] [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <input
                    type="range"
                    min={minLimit}
                    max={maxLimit}
                    value={draftFilters.priceMax}
                    onChange={(e) => setDraftFilters(prev => ({ ...prev, priceMax: Math.max(Number(e.target.value), draftFilters.priceMin + 1000) }))}
                    className="absolute w-full -top-2 h-5 appearance-none bg-transparent pointer-events-none 
                      [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none 
                      [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-md 
                      [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#E78F23] 
                      [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg
                      [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 
                      [&::-moz-range-thumb]:rounded-md [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 
                      [&::-moz-range-thumb]:border-[#E78F23] [&::-moz-range-thumb]:cursor-pointer"
                  />
                </div>
                <div className="flex justify-between text-sm text-white">
                  <span>${draftFilters.priceMin.toLocaleString()}</span>
                  <span>${draftFilters.priceMax.toLocaleString()}</span>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={handleApply}
                className="w-full py-4 bg-[#E78F23] hover:bg-[#D47D17] text-black font-bold rounded-xl transition-all active:scale-[0.98]"
              >
                Apply
              </button>
            </div>
          </AnimationWrapper>
        </aside>

        {/* ── Product Grid ── */}
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-6">
            {filteredAssets.map((asset, index) => (
              <AnimationWrapper key={asset.id} type="fade-up" duration={0.5} delay={0.05 * (index % 3)}>
                <Link href={`/buyer/marketplace/${asset.id}`}>
                  <MarketplaceCard asset={asset} />
                </Link>
              </AnimationWrapper>
            ))}
          </div>

          {filteredAssets.length === 0 && (
            <AnimationWrapper type="zoom" duration={0.4}>
              <div className="flex flex-col items-center justify-center py-24 text-gray-500">
                <p className="text-lg font-medium">No assets found</p>
                <p className="text-sm mt-1">Try adjusting your filters or category.</p>
              </div>
            </AnimationWrapper>
          )}
        </div>
      </div>
    </div>
  );
}


/* ─── Sub-components ─── */

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
}) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-300 mb-4">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent border border-[#E78F23]/20 rounded-lg px-4 py-2.5 text-sm text-white appearance-none focus:outline-none focus:border-[#E78F23] transition-colors cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#1C1C1E] text-white">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
}

function MarketplaceCard({ asset }: { asset: Asset }) {
  return (
    <div className="bg-[#1C1C1E] rounded-[8px] border border-[#2C2C2E] overflow-hidden group hover:border-[#E78F23]/20 transition-all shadow-xl hover:shadow-[#E78F23]/5">
      {/* Image */}
      <div className="relative h-[217px] overflow-hidden bg-black">
        <img
          src={asset.image}
          alt={asset.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
        />
        {/* <div className="absolute inset-0 bg-linear-to-t from-[#1C1C1E] to-transparent opacity-80" /> */}
      </div>

      {/* Info */}
      <div className="p-5 relative mt-6">
        <div className="flex justify-between items-center text-[11px] text-gray-400 mb-2 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> {asset.location}
          </span>
          <span className="tracking-widest uppercase text-gray-500">Price</span>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h4 className="font-semibold font-inter text-[15px] truncate pr-3 text-white">
            {asset.title}
          </h4>
          <span className="font-bold font-inter text-[17px] text-white whitespace-nowrap">
            {asset.price}
          </span>
        </div>

        <button className="w-full py-2.5 cursor-pointer bg-[#D98728] hover:bg-[#E6983A] text-white text-[13px] font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#D98728]/20 active:scale-[0.98]">
          View Details <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
