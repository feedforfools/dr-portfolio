import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DATA, PortfolioPath, ALL_PORTFOLIO_PATHS } from "@/data/resume";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

// import FilteredSection from "@/components/filtered-section";

import { ProjectCard } from "@/components/project-card";
import { RecordCard } from "@/components/record-card";
import { ResumeCard } from "@/components/resume-card";
import Link from "next/link"; // Import Link for contact section

export default function HomePage() {
  const defaultPath: PortfolioPath = "slam";

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
          <TabsList className="mb-6 grid w-full grid-cols-3">
            {ALL_PORTFOLIO_PATHS.map((path) => (
              <TabsTrigger key={path} value={path} className="capitalize">
                {path}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content Panes */}
          {ALL_PORTFOLIO_PATHS.map((path) => (
            <TabsContent key={path} value={path} className="mt-0">
              <div className="space-y-12">
                {/* --- Work Experience Section (Filtered) --- */}
                <section id={`work-${path}`}>
                  <h2 className="text-xl font-bold mb-4">Work Experience</h2>
                  <div className="flex flex-col gap-y-3">
                    {" "}
                    {/* Container for cards */}
                    {DATA.work
                      .filter((w) => w.category.includes(path)) // Filter logic
                      .map((work) => (
                        <ResumeCard
                          key={work.company + work.title} // More unique key
                          logoUrl={work.logoUrl}
                          altText={work.company}
                          title={work.company}
                          subtitle={work.title}
                          href={work.href}
                          badges={work.badges}
                          period={`${work.start} - ${work.end ?? "Present"}`}
                          description={work.description}
                        />
                      ))}
                    {DATA.work.filter((w) => w.category.includes(path))
                      .length === 0 && (
                      <p className="text-sm text-muted-foreground italic">
                        No work experience listed for this path yet.
                      </p>
                    )}
                  </div>
                </section>

                {/* --- Projects Section (Filtered) --- */}
                {(path === "solopreneur" || path === "slam") && (
                  <section id={`projects-${path}`}>
                    <h2 className="text-xl font-bold mb-4">Projects</h2>
                    {/* Use grid for projects like the example */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                      {DATA.projects
                        .filter((p) => p.category.includes(path)) // Filter logic
                        .map((project) => (
                          <ProjectCard
                            key={project.title}
                            href={project.href}
                            title={project.title}
                            description={project.description}
                            dates={project.dates}
                            status={project.status}
                            tags={project.technologies}
                            image={project.image}
                            video={project.video}
                            links={project.links}
                          />
                        ))}
                    </div>
                    {DATA.projects.filter((p) => p.category.includes(path))
                      .length === 0 && (
                      <p className="text-sm text-muted-foreground italic">
                        No projects listed for this path yet.
                      </p>
                    )}
                  </section>
                )}

                {/* --- Records Section (Filtered) --- */}
                {path === "music" &&
                  DATA.records &&
                  DATA.records.length > 0 && ( // Check if records exist
                    <section id={`records-${path}`}>
                      <h2 className="text-xl font-bold mb-4">
                        Recordings & Session Work
                      </h2>
                      <div className="flex flex-col gap-y-3">
                        {DATA.records
                          // .filter(r => r.category.includes(path)) // Technically redundant if only music has records
                          .map((record) => (
                            <RecordCard
                              key={record.title + record.artist}
                              title={record.title}
                              artist={record.artist}
                              href={record.href}
                              role={record.role}
                              releaseDate={record.releaseDate}
                              imageUrl={record.imageUrl}
                            />
                          ))}
                      </div>
                      {/* Optional: Add message if no records */}
                      {/* {DATA.records.length === 0 && (<p>...</p>)} */}
                    </section>
                  )}

                {/* --- Education Section (Filtered) --- */}
                <section id={`education-${path}`}>
                  <h2 className="text-xl font-bold mb-4">Education</h2>
                  <div className="flex flex-col gap-y-3">
                    {DATA.education
                      .filter((e) => e.category.includes(path)) // Filter logic
                      .map((edu) => (
                        <ResumeCard
                          key={edu.school + edu.degree}
                          logoUrl={edu.logoUrl}
                          altText={edu.school}
                          title={edu.school}
                          subtitle={edu.degree}
                          href={edu.href}
                          period={`${edu.start} - ${edu.end}`}
                          // No description for education usually
                        />
                      ))}
                    {DATA.education.filter((e) => e.category.includes(path))
                      .length === 0 && (
                      <p className="text-sm text-muted-foreground italic">
                        No education listed for this path yet.
                      </p>
                    )}
                  </div>
                </section>

                {/* --- Awards Section (Filtered) --- */}
                {DATA.awards &&
                  DATA.awards.length > 0 && ( // Only show section if awards exist
                    <section id={`awards-${path}`}>
                      <h2 className="text-xl font-bold mb-4">
                        Awards & Recognition
                      </h2>
                      <div className="flex flex-col gap-y-3">
                        {DATA.awards
                          .filter((a) => a.category.includes(path)) // Filter logic
                          .map((award) => (
                            // Using a simple Card structure for awards for now
                            <Card key={award.title} className="p-3 border">
                              <h3 className="font-semibold text-sm">
                                {award.title}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {award.issuingBody} - {award.date}
                              </p>
                              {award.description && (
                                <p className="text-xs mt-1 text-muted-foreground">
                                  {award.description}
                                </p>
                              )}
                              {award.href && (
                                <Link
                                  href={award.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-600 hover:underline mt-1 block"
                                >
                                  More Info
                                </Link>
                              )}
                            </Card>
                          ))}
                        {DATA.awards.filter((a) => a.category.includes(path))
                          .length === 0 && (
                          <p className="text-sm text-muted-foreground italic">
                            No awards listed for this path yet.
                          </p>
                        )}
                      </div>
                    </section>
                  )}

                {/* --- Skills Section (Filtered) --- */}
                <section id={`skills-${path}`}>
                  <h2 className="text-xl font-bold mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-1">
                    {DATA.skills
                      .filter((s) => s.category.includes(path)) // Filter logic
                      .map((skill) => (
                        <Badge key={skill.name}>{skill.name}</Badge>
                      ))}
                    {DATA.skills.filter((s) => s.category.includes(path))
                      .length === 0 && (
                      <p className="text-sm text-muted-foreground italic">
                        No skills listed for this path yet.
                      </p>
                    )}
                  </div>
                </section>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      {/* --- Contact Section --- */}
      <section id="contact" className="pt-8">
        {" "}
        {/* Add some top padding */}
        <h2 className="text-xl font-bold mb-4 text-center">Get in Touch</h2>
        <div className="flex justify-center items-center gap-4">
          {/* Render social links from DATA */}
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Link
              key={name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <social.icon className="size-6" />
            </Link>
          ))}
          {/* Optionally add direct email link */}
          <Link
            href={`mailto:${DATA.contact.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
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
              className="lucide lucide-mail size-6"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
