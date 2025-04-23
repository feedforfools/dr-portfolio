import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

// import FilteredSection from "@/components/filtered-section";

export default function HomePage() {
  // Define paths for tabs
  const paths = ["slam", "solopreneur", "music"];
  const defaultPath = "slam";

  return (
    <main className="flex flex-col space-y-16">
      {" "}
      {/* --- Hero Section --- */}
      <section id="hero">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-1 flex-col space-y-1.5">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              👋 Hi, I'm {DATA.name.split(" ")[0]}
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              {DATA.description}
            </p>
            {/* Optional: Location */}
            {DATA.location && (
              <p className="max-w-[600px] text-sm text-muted-foreground flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {DATA.locationLink ? (
                  <a
                    href={DATA.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {DATA.location}
                  </a>
                ) : (
                  DATA.location
                )}
              </p>
            )}
          </div>
          {/* Avatar */}
          <Avatar className="size-28 border">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
      </section>
      {/* --- About Section --- */}
      <section id="about">
        <h2 className="text-xl font-bold mb-2">About</h2>
        {/* Render markdown from summary */}
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          <Markdown>{DATA.summary}</Markdown>
        </div>
      </section>
      {/* --- Path Switching Tabs & Content --- */}
      <section id="experience-projects">
        <Tabs defaultValue={defaultPath} className="w-full">
          {/* Tab Triggers (Buttons) */}
          <TabsList className="mb-4 grid w-full grid-cols-3">
            {paths.map((path) => (
              <TabsTrigger key={path} value={path} className="capitalize">
                {path}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content Panes */}
          {paths.map((path) => (
            <TabsContent key={path} value={path} className="mt-0">
              {" "}
              <div className="space-y-12">
                {" "}
                {/* --- Work Experience Section (Filtered) --- */}
                <section id={`work-${path}`}>
                  <h2 className="text-xl font-bold mb-4">Work Experience</h2>
                  {/* Placeholder for filtered content */}
                  <p className="text-muted-foreground italic">
                    Work experience for '{path}' will show here...
                  </p>
                </section>
                {/* --- Projects Section (Filtered - only for Solopreneur/SLAM?) --- */}
                {(path === "solopreneur" || path === "slam") && (
                  <section id={`projects-${path}`}>
                    <h2 className="text-xl font-bold mb-4">Projects</h2>
                    <p className="text-muted-foreground italic">
                      Projects for '{path}' will show here...
                    </p>
                  </section>
                )}
                {/* --- Records Section (Filtered - only for Music?) --- */}
                {path === "music" && (
                  <section id={`records-${path}`}>
                    <h2 className="text-xl font-bold mb-4">Records</h2>
                    <p className="text-muted-foreground italic">
                      Recordings for '{path}' will show here...
                    </p>
                  </section>
                )}
                {/* --- Education Section (Filtered) --- */}
                <section id={`education-${path}`}>
                  <h2 className="text-xl font-bold mb-4">Education</h2>
                  <p className="text-muted-foreground italic">
                    Education for '{path}' will show here...
                  </p>
                </section>
                {/* --- Awards Section (Filtered) --- */}
                <section id={`awards-${path}`}>
                  <h2 className="text-xl font-bold mb-4">Awards</h2>
                  <p className="text-muted-foreground italic">
                    Awards for '{path}' will show here...
                  </p>
                </section>
                {/* --- Skills Section (Filtered) --- */}
                <section id={`skills-${path}`}>
                  <h2 className="text-xl font-bold mb-4">Skills</h2>
                  <p className="text-muted-foreground italic">
                    Skills for '{path}' will show here...
                  </p>
                </section>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      {/* --- Contact Section (Doesn't need filtering) --- */}
      <section id="contact">
        <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground">
          Contact details will go here... maybe pull email or social links
          directly.
        </p>
      </section>
    </main>
  );
}
