"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { DEMO_ITEMS } from "../data";
import ProductGallery from "../components/details/ProductGallery";
import DetailsHeader from "../components/details/DetailsHeader";
import ProductTabs from "../components/details/ProductTabs";
import ProductSpecsGrid from "../components/details/ProductSpecsGrid";
import HistoryTab from "../components/details/HistoryTab";
import DocumentsTab from "../components/details/DocumentsTab";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Specifications");

  const item = DEMO_ITEMS.find((i) => i.id === Number(id)) || DEMO_ITEMS[0];

  return (
    <div className="bg-black min-h-screen">
      {/* Back Button */}
      {/* <div className="container mx-auto px-6 py-6 border-b border-white/5">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronLeft size={18} />
          <span className="text-sm font-medium">Back to Marketplace</span>
        </button>
      </div> */}

      {/* Gallery Section - Full Width */}
      <section className="mb-20">
        <ProductGallery media={item.media} />
      </section>

      <div className="container mx-auto px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Info & Tabs Section */}
          <div className="space-y-12">
            <DetailsHeader
              title={item.title}
              category={item.category}
              location={item.location}
              typeBadge={item.type === "VIP" ? "VIP EXCLUSIVE" : item.type}
            />

            <div>
              <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />

              <div className="min-h-[400px] py-10">
                <AnimatePresence mode="wait">
                  {activeTab === "Specifications" && (
                    <motion.div
                      key="specs"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductSpecsGrid specs={item.detailedSpecs} />
                    </motion.div>
                  )}
                  {activeTab === "Overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2 inline-block">
                        Overview
                      </h3>
                      <p className="text-white/80 leading-relaxed text-3xl font-serif">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                  {activeTab === "History" && (
                    <motion.div
                      key="history"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HistoryTab history={item.history} />
                    </motion.div>
                  )}
                  {activeTab === "Documents" && (
                    <motion.div
                      key="documents"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DocumentsTab documents={item.documents} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="flex justify-center pt-16 border-t border-white/5">
            <button className="px-12 py-5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-white font-bold text-lg uppercase tracking-[0.3em] rounded hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer shadow-2xl">
              Proceed To Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
