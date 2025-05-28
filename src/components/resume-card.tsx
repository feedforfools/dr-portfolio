"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, Globe } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Markdown from "react-markdown";
import Link from "next/link";

interface ResumeCardProps {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  genresLine?: string;
  maestro?: string;
  detail?: string;
  websiteLink?: string;
  instagramLink?: string;
  youtubeLink?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  badges,
  period,
  description,
  genresLine,
  maestro,
  detail,
  websiteLink,
  instagramLink,
  youtubeLink,
}: ResumeCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const hasExpandableContent = Boolean(description);

  const handleCardClick = () => {
    if (hasExpandableContent) {
      setIsExpanded(!isExpanded);
    }
  };

  // Accessibility: Make card focusable and activatable with keyboard if it's expandable
  const cardProps = hasExpandableContent
    ? {
        tabIndex: 0,
        onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCardClick();
          }
        },
        role: "button",
        "aria-expanded": isExpanded,
      }
    : {};

  return (
    <Card
      className={cn(
        "flex flex-col p-3 transition-colors w-full h-full",
        hasExpandableContent && "cursor-pointer hover:bg-accent/50"
      )}
      onClick={handleCardClick}
      {...cardProps}
    >
      {/* Top section: Avatar and main textual content */}
      <div className="flex w-full items-start">
        <div className="flex-none">
          <Avatar className="no-border size-12 bg-muted-background">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText ? altText[0] : ""}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 flex flex-col group">
          <div className="flex items-start justify-between gap-x-2">
            <h3 className="flex-grow leading-tight text-sm sm:text-base inline-flex items-baseline flex-wrap mr-1">
              <span className="font-semibold">{title}</span>
              {(genresLine || maestro || detail) && (
                <span className="ml-2 font-sans text-xs text-muted-foreground">
                  {genresLine || maestro || detail}
                </span>
              )}
              {hasExpandableContent && (
                <ChevronRightIcon
                  className={cn(
                    "size-4 ml-1.5 shrink-0 text-muted-foreground/60 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                  aria-hidden="true"
                />
              )}
            </h3>
            <div className="text-[10px] sm:text-xs tabular-nums text-muted-foreground text-right shrink-0 whitespace-nowrap">
              {period}
            </div>
          </div>

          {/* Subtitle and Icons Line */}
          {(subtitle || websiteLink || youtubeLink || instagramLink) && (
            <div className="flex items-center mt-1">
              {subtitle && (
                <div className="font-sans text-sm flex-shrink mr-2">
                  {" "}
                  {/* Subtitle on the left */}
                  {subtitle}
                </div>
              )}
              <div className="flex-grow" />{" "}
              {/* Spacer to push icons to the right */}
              {(websiteLink || youtubeLink || instagramLink) && (
                <div className="flex space-x-2.5 shrink-0">
                  {" "}
                  {/* Icons container */}
                  {websiteLink && (
                    <Link
                      href={websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Website"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Globe className="size-4 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  )}
                  {youtubeLink && (
                    <Link
                      href={youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaYoutube className="size-4 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  )}
                  {instagramLink && (
                    <Link
                      href={instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaInstagram className="size-4 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Badges Line */}
          {badges && badges.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {badges.map((badge) => (
                <Badge
                  className="px-1.5 py-0.5 text-[10px]"
                  variant="secondary"
                  key={badge}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Expandable Description Section */}
      {hasExpandableContent && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
            marginTop: isExpanded ? "0.75rem" : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden w-full"
          style={{ paddingLeft: `calc(theme(spacing.12) + theme(spacing.4))` }}
        >
          <div className="text-muted-foreground prose prose-sm dark:prose-invert max-w-none">
            <Markdown components={{ p: ({ children }) => <>{children}</> }}>
              {description!}
            </Markdown>
          </div>
        </motion.div>
      )}
      {/* Removed the separate icons section from the bottom of the Card */}
    </Card>
  );
}
