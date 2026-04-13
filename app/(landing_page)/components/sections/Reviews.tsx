"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Alexander Rossi",
    role: "Collector",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
    text: "ExoticWorld transformed how I source private collections. The white-glove service and attention to detail during the acquisition of my 250 GTO was unlike anything I've experienced in 20 years of collecting.",
  },
  {
    id: 2,
    name: "Elena Vance",
    role: "Yacht Owner",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
    text: "The verification process for high-value properties and yachts is unparalleled. I felt completely secure during my first cross-border transaction. Highly recommended for any serious investor.",
  },
  {
    id: 3,
    name: "Julian Thorne",
    role: "Private Investor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
    text: "Finding off-market jets used to take months. With ExoticWorld's global network, I had three exclusive options presented to me within 48 hours. The speed and professionalism are truly elite.",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="py-40 bg-[#050505] px-6">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase mb-4"
          >
            Testimonials
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-serif leading-tight italic"
          >
            What Our <span className="text-primary">Clients Say</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Review Area */}
          <div className="relative mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <Quote className="w-16 h-16 text-primary/20" />
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                <p className="text-2xl md:text-4xl lg:text-5xl text-white/90 font-serif leading-[1.4] mb-12 italic max-w-5xl mx-auto">
                  "{REVIEWS[activeIndex].text}"
                </p>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white tracking-wide italic">
                    {REVIEWS[activeIndex].name}
                  </h4>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                    {REVIEWS[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 lg:-left-24">
              <button
                onClick={prev}
                className="w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 lg:-right-24">
              <button
                onClick={next}
                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Avatar Row */}
          <div className="flex justify-center items-center gap-10">
            {REVIEWS.map((review, i) => (
              <button
                key={review.id}
                onClick={() => setActiveIndex(i)}
                className={`relative w-20 h-20 rounded-full transition-all duration-700 p-1 ${
                  activeIndex === i 
                    ? "scale-125 border-2 border-primary ring-8 ring-primary/10" 
                    : "scale-100 opacity-20 grayscale border-2 border-transparent hover:opacity-50 hover:grayscale-0"
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
