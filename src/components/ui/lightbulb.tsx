"use client";

import React from "react";
import { cn } from "@/lib/utils";
import "@/app/lightbulb.css";

interface LightbulbProps {
  className?: string;
  isOn?: boolean;
  onToggle?: (isOn: boolean) => void;
  flicker?: boolean;
}

export function Lightbulb({
  className,
  isOn = false,
  onToggle,
  flicker = false,
}: LightbulbProps) {
  const handleToggle = () => {
    // Only call the toggle function if it's provided
    onToggle?.(!isOn);
  };

  return (
    <div
      className={cn("bulb-container", className)}
      style={{ overflow: "visible" }}
    >
      <div className={cn({ night: isOn })} style={{ overflow: "visible" }}>
        <button
          className="bulb-light"
          onClick={handleToggle}
          aria-label={`Turn light ${isOn ? "off" : "on"}`}
          // The button is only interactive if an onToggle handler is passed
          disabled={!onToggle}
          style={{ overflow: "visible" }}
        >
          <div id="light"></div>
          <div id="bulb">
            <div
              className={cn("bulb-top", {
                "animate-bulb-flicker": flicker && isOn,
              })}
            >
              <div className="reflection"></div>
            </div>
            <div className="bulb-middle-1"></div>
            <div className="bulb-middle-2"></div>
            <div className="bulb-middle-3"></div>
            <div className="bulb-bottom"></div>
          </div>
          <div id="base">
            <div className="screw-top" />
            <div className="screw-a" />
            <div className="screw-b" />
            <div className="screw-a" />
            <div className="screw-b" />
            <div className="screw-a" />
            <div className="screw-b" />
            <div className="screw-c" />
            <div className="screw-d" />
          </div>
        </button>
      </div>
    </div>
  );
}
