import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background text-white font-inter overflow-hidden">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Topbar />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-10 py-8 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E78F23]/5 rounded-full blur-[100px] pointer-events-none"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
