"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Gavel,
  BadgePercent,
  List as ListIcon,
  Crown,
  Settings,
  X,
} from "lucide-react";

const navItems = [
  { href: "/buyer", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/buyer/marketplace", icon: Building2, label: "Marketplace" },
  { href: "/buyer/mybids", icon: Gavel, label: "My Bids" },
  { href: "#", icon: BadgePercent, label: "My Offer" },
  { href: "#", icon: ListIcon, label: "My Listings" },
];

const secondaryItems = [
  { href: "#", icon: Crown, label: "VIP Deals" },
  { href: "#", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 mt-8 ml-8 border border-primary2/30  rounded-[8px] bg-[#18181A] flex flex-col border-r overflow-y-auto shrink-0 z-20 shadow-2xl"

      style={{

        boxShadow: "213px 0 59px 0 rgba(143, 96, 36, 0.00), 136px 0 54px 0 rgba(143, 96, 36, 0.01), 77px 0 46px 0 rgba(143, 96, 36, 0.05), 34px 0 34px 0 rgba(143, 96, 36, 0.09), 9px 0 19px 0 rgba(143, 96, 36, 0.10)"
      }}
    >
      {/* Logo */}
      <div className="p-8">
        <Link href="/">
          <h1 className="text-2xl font-bold font-clash tracking-wide text-white">
            Exotic<span className="text-[#E78F23]">World</span>
          </h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive
                ? "bg-[#E78F23] text-white shadow-[0_4px_20px_rgba(231,143,35,0.4)]"
                : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <item.icon className="w-[18px] h-[18px]" />
              {item.label}
            </Link>
          );
        })}
        <div className="pt-4 mt-2 mb-2 border-t border-[#2C2C2E]/50"></div>
        {secondaryItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors font-medium rounded-xl hover:bg-white/5"
          >
            <item.icon className="w-[18px] h-[18px]" />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* VIP Upgrade Banner */}
      <div className="p-5 mt-auto mb-6 mx-4 rounded-2xl bg-linear-to-br from-[#EEA341] to-[#C76E12] relative shadow-[0_10px_30px_rgba(231,143,35,0.2)] text-white overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:opacity-20 transition-opacity"></div>
        <button className="absolute top-3 right-3 text-white/70 hover:text-white z-10 transition-colors">
          <X className="w-[14px] h-[14px]" />
        </button>
        <h3 className="font-bold text-lg mb-1.5 font-clash">Upgrade to VIP!</h3>
        <p className="text-[11px] text-white/90 mb-5 leading-relaxed">Unlock Premium Features And Offers</p>
        <button className="bg-[#111113] w-full py-2.5 rounded-lg text-[#E78F23] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg">
          Upgrade Now
          <Crown className="w-3.5 h-3.5" fill="currentColor" />
        </button>
      </div>
    </aside>
  );
}
