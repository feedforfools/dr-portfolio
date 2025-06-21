"use client";

import HeroToggle from "@/components/hero-toggle";
import { useState } from "react";
import { PortfolioPath, ALL_PORTFOLIO_PATHS, DATA } from "@/data/resume";

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
    <main
      className="flex flex-col py-10"
      style={{ backgroundColor: "#5cc2b5" }}
    >
      <section id="hero-toggle-test-section" className="w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          HeroToggle Component Test
        </h1>

        <HeroToggle
          // imageUrl={"/img/companies/leica.jpg"} // Using avatarUrl from your DATA object
          imageUrl={DATA.avatarUrl} // This should be the URL of your avatar image
          paths={ALL_PORTFOLIO_PATHS} // This should be your array of 3 paths
          initialPath={currentPath}
          onPathChange={handlePathChange}
          textData={{
            name: "Denis Ronchese",
            titles: ["Hello again! 🤟", "", "Hello there! 🤝"],
            descriptions: [
              "I'm also a keyboard player, music producer, and sound designer",
              "",
              "I'm Denis, I'm a Software Engineer specializing in SLAM and Computer Vision for robotics",
            ],
            location: "San Francisco, CA",
            locationLink: "https://maps.google.com/?q=San+Francisco",
          }}
          // You can experiment with these props:
          // playgroundClassName="bg-gradient-to-tr from-indigo-700 to-purple-700"
          // selectorClassName="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 border-yellow-400"
        />
      </section>
    </main>
  );
}
