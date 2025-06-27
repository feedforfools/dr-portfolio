"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSpotify, FaSoundcloud, FaApple, FaYoutube } from "react-icons/fa";
import { Globe } from "lucide-react";

// Interface matching the types in resume.tsx
interface RecordCardProps {
  title: string;
  artist: string;
  href?: string;
  role: string;
  releaseDate: string;
  imageUrl?: string;
  className?: string;
  genres?: string[]; // Added genres
}

const getIconForHref = (href?: string): React.ReactNode | null => {
  if (!href) return null;
  if (href.includes("spotify.com")) {
    return <FaSpotify className="size-4" />;
  }
  if (href.includes("soundcloud.com")) {
    return <FaSoundcloud className="size-4" />;
  }
  if (href.includes("youtube.com") || href.includes("youtu.be")) {
    return <FaYoutube className="size-4" />;
  }
  return <Globe className="size-4" />; // Default generic icon
};

const getLinkLabel = (href?: string): string => {
  if (!href) return "Link";
  if (href.includes("spotify.com")) return "Spotify";
  if (href.includes("soundcloud.com")) return "Soundcloud";
  if (href.includes("youtube.com") || href.includes("youtu.be"))
    return "YouTube";
  return "Website";
};

export function RecordCard({
  title,
  artist,
  href,
  role,
  releaseDate,
  imageUrl,
  className,
  genres, // Added
}: RecordCardProps) {
  const iconToShow = getIconForHref(href);
  const linkLabel = getLinkLabel(href);

  const cardContent = (
    <Card
      className={cn(
        "flex items-center p-3 border hover:shadow-md transition-all duration-300 ease-out w-full max-w-md", // Changed max-w-lg to max-w-md
        className
      )}
    >
      {/* Album Art */}
      <div className="flex-none mr-4">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} by ${artist}`}
            width={80} // Small image size
            height={80}
            className="rounded-md object-cover aspect-square"
          />
        ) : (
          <div className="w-20 h-20 rounded-md bg-muted flex items-center justify-center">
            {/* Placeholder icon or initials */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-music text-muted-foreground"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-grow">
        <CardHeader className="p-0 mb-3">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <CardTitle className="text-md font-semibold leading-none truncate min-w-0">
              {title}
            </CardTitle>
            <div className="text-[10px] sm:text-xs tabular-nums text-muted-foreground text-right shrink-0">
              {releaseDate}
            </div>
          </div>
          <p className="text-sm leading-none truncate">{artist}</p>
          {genres && genres.length > 0 && (
            <p className="text-xs text-muted-foreground mb-0 leading-none truncate">
              {genres.join(" / ")}
            </p>
          )}
        </CardHeader>

        <CardContent className="p-0 mt-auto">
          {" "}
          {/* Added mt-auto */}
          <div className="flex items-center justify-between">
            <p className="text-sm flex-grow mr-2 truncate min-w-0">{role}</p>
            {iconToShow && href && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkLabel}
                className="text-muted-foreground hover:text-primary transition-colors shrink-0"
              >
                {iconToShow}
              </Link>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );

  return cardContent;
}
