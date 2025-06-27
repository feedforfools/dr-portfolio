"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Lightbulb } from "@/components/ui/lightbulb";
import type { PortfolioPath } from "@/data/resume";
import { motion } from "framer-motion";

type VisualTogglePosition = "left" | "middle" | "right";
type AnimationState = "hidden" | "popup" | "grow";

interface HeroToggleProps {
  imageUrl: string;
  paths: readonly [PortfolioPath, PortfolioPath, PortfolioPath];
  initialPath: PortfolioPath;
  onPathChange: (newPath: PortfolioPath) => void;
  playgroundClassName?: string;
  selectorClassName?: string;
  textData: {
    name: string;
    titles: readonly [string, string, string];
    descriptions: readonly [string, string, string];
    location?: string;
    locationLink?: string;
  };
  blurFadeDelay?: number;
}

const BlurFade: React.FC<{ delay: number; children: React.ReactNode }> = ({
  delay,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible
          ? "opacity-100 blur-0 translate-y-0"
          : "opacity-0 blur-sm translate-y-4"
      }`}
    >
      {children}
    </div>
  );
};

// Framer Motion variants for the lightbulb animation
const lightbulbVariants = {
  hidden: { opacity: 0, scale: 0, y: "50%", x: "-50%" },
  popup: {
    opacity: 1,
    scale: 0.1,
    y: "-47%",
    x: "-61%",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 25,
      bounce: 1,
      delay: 0.75,
    },
  },
  grow: {
    opacity: 1,
    scale: 1.3,
    y: "-16%",
    x: "-50%",
    transition: {
      delay: 0.2,
      duration: 1.5,
      ease: [0.1, 0.8, 1, 1],
    },
  },
};

const HeroToggle: React.FC<HeroToggleProps> = ({
  imageUrl,
  paths,
  initialPath,
  onPathChange,
  playgroundClassName = "",
  selectorClassName = "size-28 md:size-36",
  textData,
  blurFadeDelay = 0.25,
}) => {
  const getPositionFromPath = useCallback(
    (path: PortfolioPath): VisualTogglePosition => {
      const index = paths.indexOf(path);
      if (index === 0) return "left";
      if (index === 1) return "middle";
      if (index === 2) return "right";
      return "middle";
    },
    [paths]
  );

  const getPathFromPosition = useCallback(
    (position: VisualTogglePosition): PortfolioPath => {
      if (position === "left") return paths[0];
      if (position === "right") return paths[2];
      return paths[1];
    },
    [paths]
  );

  const [activeVisualPosition, setActiveVisualPosition] =
    useState<VisualTogglePosition>(() => getPositionFromPath(initialPath));

  const [textKey, setTextKey] = useState(0);

  // State for controlling the new animation sequence
  const [animationState, setAnimationState] =
    useState<AnimationState>("hidden");
  const [isBulbOn, setIsBulbOn] = useState(true);
  const [showFlicker, setShowFlicker] = useState(false);

  useEffect(() => {
    if (activeVisualPosition === "middle") {
      setAnimationState("popup");
    } else {
      // Reset animation when not in middle
      setAnimationState("hidden");
      setIsBulbOn(true);
      setShowFlicker(false);
    }

    const newPath = getPathFromPosition(activeVisualPosition);
    onPathChange(newPath);
    setTextKey((prev) => prev + 1);
  }, [activeVisualPosition, getPathFromPosition, onPathChange]);

  useEffect(() => {
    setActiveVisualPosition(getPositionFromPath(initialPath));
    setTextKey((prev) => prev + 1);
  }, [initialPath, paths, getPositionFromPath]);

  const handlePlaygroundClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const playgroundRect = event.currentTarget.getBoundingClientRect();
      const clickX = event.clientX - playgroundRect.left;
      const playgroundWidth = playgroundRect.width;

      let newVisualPosition: VisualTogglePosition;

      if (clickX < playgroundWidth / 3) {
        newVisualPosition = "left";
      } else if (clickX < (2 * playgroundWidth) / 3) {
        newVisualPosition = "middle";
      } else {
        newVisualPosition = "right";
      }
      setActiveVisualPosition(newVisualPosition);
    },
    []
  );

  const getSelectorPositionClasses = () => {
    switch (activeVisualPosition) {
      case "left":
        return "left-[15%] -translate-x-1/2";
      case "middle":
        return "left-1/2 -translate-x-1/2";
      case "right":
        return "left-[85%] -translate-x-1/2";
      default:
        return "left-1/2 -translate-x-1/2";
    }
  };

  const getCurrentDescription = () => {
    const index =
      activeVisualPosition === "left"
        ? 0
        : activeVisualPosition === "right"
        ? 2
        : 1;
    return textData.descriptions[index];
  };

  const getCurrentTitle = () => {
    const index =
      activeVisualPosition === "left"
        ? 0
        : activeVisualPosition === "right"
        ? 2
        : 1;
    return textData.titles[index];
  };

  const getTextPositionClasses = () => {
    switch (activeVisualPosition) {
      case "left":
        return "right-4 bottom-7 text-left";
      case "middle":
        return "left-1/2 -translate-x-1/2 bottom-7 text-center";
      case "right":
        return "left-4 bottom-7 text-left";
      default:
        return "left-4 bottom-7 text-left";
    }
  };

  return (
    <div className="relative w-full" style={{ overflow: "visible" }}>
      {/* Toggle Component */}
      <div
        className={`relative w-full h-72 cursor-pointer group ${playgroundClassName}`}
        onClick={handlePlaygroundClick}
        role="radiogroup"
        aria-label="Hero section toggle to select portfolio path"
        style={{ overflow: "visible" }}
      >
        {/* Lightbulb Container - Now powered by Framer Motion with overflow visible */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-30 flex items-center justify-center"
          style={{
            transformOrigin: "center center",
            overflow: "visible",
          }}
          variants={lightbulbVariants}
          initial="hidden"
          animate={animationState}
          onAnimationComplete={(definition) => {
            if (definition === "popup") {
              setAnimationState("grow");
            }
            if (definition === "grow") {
              // After growing, turn on the bulb and trigger the flicker
              setIsBulbOn(true);
              setShowFlicker(false);
              // The flicker animation lasts 1s, so we can turn off the trigger class after
              setTimeout(() => setShowFlicker(false), 1000);
            }
          }}
        >
          <Lightbulb
            isOn={isBulbOn}
            flicker={showFlicker}
            className="pointer-events-none" // Container handles click
          />
        </motion.div>

        {/* Floating Text Layer */}
        <div
          key={textKey}
          className={`absolute z-40 max-w-md transition-all duration-500 ease-in-out ${getTextPositionClasses()}`}
        >
          <div className="flex flex-1 flex-col space-y-2">
            <BlurFade delay={blurFadeDelay * 1}>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl/none font-bold tracking-tighter drop-shadow-lg">
                {getCurrentTitle()}
              </h1>
            </BlurFade>
            <BlurFade delay={blurFadeDelay * 2}>
              <p className="max-w-[350px] sm:max-w-[400px] md:max-w-[600px] text-muted-foreground text-sm sm:text-lg md:text-xl mx-auto md:mx-0 drop-shadow-md">
                {getCurrentDescription()}
              </p>
            </BlurFade>
          </div>
        </div>

        {/* Avatar Image Selector */}
        <div
          className={`
            absolute bottom-4 md:bottom-5
            ${selectorClassName}
            rounded-full shadow-lg
            transition-all duration-500 ease-in-out
            z-20 
            ${getSelectorPositionClasses()}
          `}
        >
          <Image
            src={imageUrl}
            alt="Toggle selector"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroToggle;
