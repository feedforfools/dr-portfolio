"use client";

import React, { useState, useEffect } from "react";
import { Lightbulb } from "@/components/ui/lightbulb";

const LightBulbHero = () => {
  const [isOn, setIsOn] = useState(false);

  // Auto-turn on the light bulb after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOn(true);
    }, 1000); // Slightly longer delay to see the effect better
    return () => clearTimeout(timer);
  }, []);

  const toggleLight = (newState: boolean) => {
    setIsOn(newState);
  };

  return (
    <div className="relative min-h-screen bg-cyan-500 flex flex-col items-center justify-center overflow-hidden transition-colors duration-700">
      {/* Enhanced background effects when light is on */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          isOn
            ? "opacity-30 bg-gradient-radial from-yellow-200/40 via-yellow-100/10 to-transparent"
            : "opacity-0"
        }`}
      />

      {/* Additional ambient glow */}
      {isOn && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(255,235,59,0.3) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      )}

      {/* Hero content */}
      <div className="relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <h1
            className={`text-4xl md:text-6xl font-bold transition-colors duration-700 ${
              isOn ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Welcome to My Portfolio
          </h1>
          <p
            className={`text-lg md:text-xl transition-colors duration-700 ${
              isOn ? "text-muted-foreground" : "text-muted-foreground/70"
            }`}
          >
            Click the lightbulb to illuminate ideas
          </p>
        </div>

        {/* New UI Lightbulb */}
        <div className="py-8">
          <Lightbulb
            isOn={isOn}
            onToggle={toggleLight}
            className="scale-50 md:scale-75 hover:scale-60 md:hover:scale-90 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Custom styles for gradient */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(
            circle at center,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </div>
  );
};

export default LightBulbHero;
