"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import "@/app/lightbulb.css";

interface LightbulbProps {
  className?: string;
  isOn?: boolean;
  onToggle?: (isOn: boolean) => void;
}

export function Lightbulb({
  className,
  isOn = false,
  onToggle,
}: LightbulbProps) {
  const [lightState, setLightState] = useState(isOn);

  const handleToggle = () => {
    const newState = !lightState;
    setLightState(newState);
    onToggle?.(newState);
  };

  return (
    <div className={cn("bulb-container", className)}>
      <div className={`${lightState ? "night" : ""}`}>
        <button
          className="bulb-light"
          onClick={handleToggle}
          aria-label={`Turn light ${lightState ? "off" : "on"}`}
        >
          <div id="light"></div>
          <div id="bulb">
            <div className="bulb-top">
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
