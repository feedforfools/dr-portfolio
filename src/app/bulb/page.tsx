"use client";

import LightBulbHero from "@/components/lightbulb-hero";
import { useState } from "react";
import { PortfolioPath, ALL_PORTFOLIO_PATHS, DATA } from "@/data/resume";
import "@/app/lightbulb.css";

export default function HeroToggleTestPage() {
  // ALL_PORTFOLIO_PATHS is ["engineer", "musician", "solopreneur"]
  // We'll use the first path as the initial one.
  const [currentPath, setCurrentPath] = useState<PortfolioPath>(
    ALL_PORTFOLIO_PATHS[0]
  );

  const handlePathChange = (newPath: PortfolioPath) => {
    setCurrentPath(newPath);
  };

  return (
    // This main container mimics the structure that would allow it to adopt
    // global layout styling for width and centering (e.g., max-w-7xl, mx-auto, px-4).
    <main className="flex flex-col py-10">
      <section id="hero-toggle-test-section" className="w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          LightBulbHero Component Test
        </h1>

        <LightBulbHero />
      </section>
    </main>
  );
}
