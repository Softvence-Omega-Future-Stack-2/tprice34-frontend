"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-primary italic">
                EXOTIC<span className="text-white">WORLD</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The world's premier marketplace for luxury assets. Experience the ultimate in curation and service across automotive, yachting, aviation, and real estate.
            </p>
            <div className="flex gap-4">
            {[Mail, Phone, MapPin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-10 text-white italic">Marketplace</h4>
            <ul className="space-y-5">
              {["Automotive", "Yachts", "Aviation", "Real Estate", "Collectibles"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 text-sm hover:text-primary hover:translate-x-2 transition-all inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-10 text-white italic">Company</h4>
            <ul className="space-y-5">
              {["About Us", "Events", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 text-sm hover:text-primary hover:translate-x-2 transition-all inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-10 text-white italic">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-125" />
                <span className="text-white/40 text-sm leading-relaxed">
                  123 Luxury Blvd, <br /> Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-125" />
                <span className="text-white/40 text-sm">+1 (555) 000-1234</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-125" />
                <span className="text-white/40 text-sm">contact@exoticworld.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p className="text-white/20">
            © {new Date().getFullYear()} exoticworld. all rights reserved.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-white/20 hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="text-white/20 hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
