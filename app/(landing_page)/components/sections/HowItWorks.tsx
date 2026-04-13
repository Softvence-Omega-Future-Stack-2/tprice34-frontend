"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Search, ShieldCheck, Truck } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Register & Verify",
    desc: "Create your exclusive profile and undergo a brief verification to access our private listings.",
    icon: UserCheck
  },
  {
    num: "02",
    title: "Explore Collection",
    desc: "Browse our off-market inventory of cars, yachts, and jets curated for elite buyers.",
    icon: Search
  },
  {
    num: "03",
    title: "Secure Transaction",
    desc: "Finalize your deal through our secure legal frameworks and dedicated expert support.",
    icon: ShieldCheck
  },
  {
    num: "04",
    title: "Delivery & Concierge",
    desc: "Receive your asset anywhere in the world with our white-glove shipping and logistics.",
    icon: Truck
  },
];

export default function HowItWorks() {
  return (
    <section className="py-40 bg-black px-6">
      <div className="container mx-auto">
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase mb-6"
          >
            Our Process
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-serif leading-tight italic"
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-[115px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center group"
              >
                {/* Number */}
                <div className="text-6xl font-serif font-black text-white/5 mb-[-25px] group-hover:text-primary/10 transition-colors italic">
                  {step.num}
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mx-auto mb-10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,1)]">
                  <step.icon className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors" />
                  
                  {/* Subtle Radar Pulse */}
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-0 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:text-primary transition-colors italic">
                  {step.title}
                </h3>
                <p className="text-white/30 text-xs leading-relaxed max-w-[200px] mx-auto group-hover:text-white/50 transition-colors">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
