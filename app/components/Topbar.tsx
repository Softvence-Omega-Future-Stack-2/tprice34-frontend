"use client";

import React from "react";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";

export default function Topbar({ setIsSidebarOpen }: { setIsSidebarOpen: (open: boolean) => void }) {
  return (
    <header className="h-20 lg:h-24 flex items-center justify-between px-4 lg:px-10 z-10 backdrop-blur-md">
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex-1 max-w-2xl">
          <div className="relative group">
            <Search className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#E78F23] transition-colors" />
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full bg-[#18181A] border border-primary2/30 rounded-full py-2.5 lg:py-3.5 pl-10 lg:pl-12 pr-6 text-sm text-white placeholder-gray-500 focus:outline-none focus:shadow-[0_0_15px_rgba(231,143,35,0.1)] transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-7 ml-4 lg:ml-8">
        <button className="relative text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
          <Bell className="w-5 h-5 lg:w-5.5 lg:h-5.5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#111113]"></span>
        </button>
        <div className="hidden sm:block w-px h-8 bg-[#2C2C2E]"></div>
        <button className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full overflow-hidden bg-gray-600 border ring-2 ring-[#E78F23]/20 border-transparent shadow-lg object-cover">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="hidden sm:block text-sm font-medium text-[#E78F23]">Alexander</span>
          <ChevronDown className="hidden sm:block w-4 h-4 text-[#E78F23]/70" />
        </button>
      </div>
    </header>
  );
}

