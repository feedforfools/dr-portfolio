// src/components/record-card.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <CardHeader className="p-0 mb-1">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <CardTitle className="text-lg font-semibold leading-tight">
              {title}
            </CardTitle>
            <div className="text-[10px] sm:text-xs tabular-nums text-muted-foreground text-right shrink-0">
              {releaseDate}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{artist}</p>
        </CardHeader>
        <CardContent className="p-0 mt-2">
          {genres && genres.length > 0 && (
            <p className="text-xs text-muted-foreground mb-1">
              {genres.join(" / ")}
            </p>
          )}
          <p className="text-sm text-muted-foreground">Role: {role}</p>
        </CardContent>
      </div>
    </Card>
  );

  // If href exists, wrap the card content in a link
  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </Link>
    );
  }

  // Otherwise, just render the card content (useful if no link provided)
  return cardContent;
}
