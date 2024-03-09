"use client";

import { animatePageIn } from "@/utils/animations";
import { useEffect } from "react";
import NavOther from "./components/NavOther";
import Navigation from "./components/Navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-black z-50 fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-black z-50 fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-black z-50 fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-black z-50 fixed top-0 left-3/4 w-1/4"
      />
      <NavOther />

      <Navigation />
      {children}
    </div>
  );
}
