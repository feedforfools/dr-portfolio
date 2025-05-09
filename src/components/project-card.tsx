import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import React from "react";
import { ProjectStatus } from "@/data/resume";

// Interface matching the types in resume.tsx
interface ProjectCardProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  status?: ProjectStatus;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  status,
  tags,
  image,
  video,
  links,
  className,
}: ProjectCardProps) {
  const mediaContent = (
    <div className={`block ${href ? "cursor-pointer" : ""}`}>
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
        />
      ) : image ? (
        <Image
          src={image}
          alt={title}
          width={500}
          height={281}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      ) : (
        <div className="h-40 w-full bg-muted flex items-center justify-center text-muted-foreground text-sm">
          <span>No Preview Available</span>
        </div>
      )}
    </div>
  );

  const titleContent = (
    <CardTitle
      className={`text-lg font-semibold ${href ? "hover:underline" : ""}`}
    >
      {title}
    </CardTitle>
  );

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full",
        className
      )}
    >
      {href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {mediaContent}
        </Link>
      ) : (
        mediaContent
      )}

      {/* Content */}
      <CardHeader className="px-3 pt-3 pb-2">
        <div className="space-y-1">
          <div className="flex justify-between items-start">
            {/* Conditionally wrap title in Link */}
            {href ? (
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {titleContent}
              </Link>
            ) : (
              titleContent
            )}
            {status && (
              <Badge
                variant="secondary"
                className="text-[10px] px-1.5 py-0.5 whitespace-nowrap"
              >
                {status}
              </Badge>
            )}
          </div>
          <time className="font-sans text-[10px] sm:text-xs text-muted-foreground">
            {dates}
          </time>
          <div className="prose prose-sm dark:prose-invert max-w-full text-pretty font-sans text-sm text-muted-foreground pt-1">
            <Markdown components={{ p: ({ children }) => <>{children}</> }}>
              {description}
            </Markdown>
          </div>
        </div>
      </CardHeader>

      {/* Technologies (Tags) */}
      <CardContent className="mt-auto flex flex-col px-3 pb-3 pt-1">
        {" "}
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-xs"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {/* External Links */}
      {links && links.length > 0 && (
        <CardFooter className="px-3 pb-3 pt-1">
          {" "}
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  key={idx}
                  className="flex gap-1.5 px-2 py-1 text-xs items-center"
                  variant="outline"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
