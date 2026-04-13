import React from "react";
import LandingNavbar from "./components/LandingNavbar";
import LandingFooter from "./components/LandingFooter";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <LandingNavbar />
      <main className="grow">
        {children}
      </main>
      <LandingFooter />
    </div>
  );
}
