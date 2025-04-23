import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

// Interface matching the types in resume.tsx
interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) {
  // No expand/collapse state for now, but keep the structure
  // const [isExpanded, setIsExpanded] = React.useState(false);
  // const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   if (description && !href) { // Only toggle if no direct href
  //     e.preventDefault();
  //     setIsExpanded(!isExpanded);
  //   }
  // };

  const cardContent = (
    <Card className="flex p-3 hover:bg-accent/50 transition-colors">
      {" "}
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 flex flex-col justify-center group">
        {" "}
        <CardHeader className="p-0">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              {href && (
                <ChevronRightIcon className="size-4 ml-1 text-muted-foreground/50 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right shrink-0">
              {" "}
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs mt-1">{subtitle}</div>}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {badges.map((badge, index) => (
                <Badge
                  variant="secondary"
                  className="px-1 py-0 text-[10px]"
                  key={index}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
        {description && (
          <div className="mt-2 text-xs sm:text-sm prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
            {" "}
            <Markdown components={{ p: ({ children }) => <>{children}</> }}>
              {description}
            </Markdown>{" "}
          </div>
        )}
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
