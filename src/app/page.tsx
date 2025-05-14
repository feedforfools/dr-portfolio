import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA, PortfolioPath, ALL_PORTFOLIO_PATHS } from "@/data/resume";
import Markdown from "react-markdown";
import { ProjectCard } from "@/components/project-card";
import { RecordCard } from "@/components/record-card";
import { ResumeCard } from "@/components/resume-card";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function HomePage() {
  const defaultPath: PortfolioPath = "engineer";

  return (
    <main className="flex flex-col space-y-16">
      {/* --- Hero Section --- */}
      <section id="hero">
        <BlurFade delay={BLUR_FADE_DELAY * 0}>
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
            <div className="flex flex-1 flex-col space-y-2 text-center md:text-left">
              <BlurFade delay={BLUR_FADE_DELAY * 1}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm {DATA.name.split(" ")[0]} 👋
                </h1>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto md:mx-0">
                  {DATA.description}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                {DATA.location && (
                  <div className="max-w-[600px] text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1 pt-1">
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
                      <span>{DATA.location}</span>
                    )}
                  </div>
                )}
              </BlurFade>
            </div>
            {/* Avatar */}
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Avatar className="size-28 md:size-36 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </BlurFade>
      </section>

      {/* --- About Section --- */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold mb-2">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </section>

      {/* --- Path Switching Tabs & Content --- */}
      <section id="experience-projects">
        {/* Wrap the entire Tabs component */}
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <Tabs defaultValue={defaultPath} className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              {ALL_PORTFOLIO_PATHS.map((path) => (
                <TabsTrigger key={path} value={path} className="capitalize">
                  {path}
                </TabsTrigger>
              ))}
            </TabsList>

            {ALL_PORTFOLIO_PATHS.map((path: PortfolioPath) => (
              <TabsContent key={path} value={path} className="mt-0">
                <div className="space-y-12">
                  {/* --- Work Experience --- */}
                  {(path === "engineer" || path === "musician") && (
                    // Change title to "Live Experience" for musician

                    <section id={`work-${path}`}>
                      <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <h2 className="text-xl font-bold mb-4">
                          {path === "musician"
                            ? "Live Experience"
                            : "Work Experience"}
                        </h2>
                      </BlurFade>
                      <div className="flex flex-col gap-y-3">
                        {DATA.work
                          .filter((w) => w.category.includes(path))
                          .map((work, id) => (
                            <BlurFade
                              key={work.company + work.title}
                              delay={BLUR_FADE_DELAY * 9 + id * 0.05}
                            >
                              <ResumeCard
                                logoUrl={work.logoUrl}
                                altText={work.company}
                                title={work.company}
                                subtitle={work.title}
                                websiteLink={work.websiteLink}
                                instagramLink={work.instagramLink}
                                youtubeLink={work.youtubeLink}
                                badges={work.badges}
                                period={`${work.start} - ${
                                  work.end ?? "Present"
                                }`}
                                description={work.description}
                                genresLine={
                                  work.category.includes("musician") &&
                                  work.genres
                                    ? work.genres.join(" / ")
                                    : undefined
                                }
                              />
                            </BlurFade>
                          ))}
                        {DATA.work.filter((w) => w.category.includes(path))
                          .length === 0 && (
                          <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <p className="text-sm text-muted-foreground italic">
                              No work experience listed for this path yet.
                            </p>
                          </BlurFade>
                        )}
                      </div>
                    </section>
                  )}

                  {/* --- Records --- */}
                  {path === "musician" &&
                    DATA.records &&
                    DATA.records.length > 0 && (
                      <section id={`records-${path}`}>
                        <BlurFade delay={BLUR_FADE_DELAY * 8}>
                          <h2 className="text-xl font-bold mb-4">
                            Recordings & Session Work
                          </h2>
                        </BlurFade>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {DATA.records.map((record, id) => (
                            <BlurFade
                              key={record.title + record.artist}
                              delay={BLUR_FADE_DELAY * 9 + id * 0.05}
                            >
                              <RecordCard
                                title={record.title}
                                artist={record.artist}
                                href={record.href}
                                role={record.role}
                                releaseDate={record.releaseDate}
                                imageUrl={record.imageUrl}
                                genres={record.genres} // Pass genres
                              />
                            </BlurFade>
                          ))}
                        </div>
                      </section>
                    )}

                  {/* --- Education --- */}
                  {(path === "engineer" || path === "musician") && (
                    <section id={`education-${path}`}>
                      <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <h2 className="text-xl font-bold mb-4">Education</h2>
                      </BlurFade>
                      <div className="flex flex-col gap-y-3">
                        {DATA.education
                          .filter((e) => e.category.includes(path))
                          .map((edu, id) => (
                            <BlurFade
                              key={edu.school + edu.degree}
                              delay={BLUR_FADE_DELAY * 9 + id * 0.05}
                            >
                              <ResumeCard
                                logoUrl={edu.logoUrl}
                                altText={edu.school}
                                title={edu.school}
                                subtitle={edu.degree}
                                maestro={edu.maestro}
                                period={`${edu.start} - ${edu.end}`}
                              />
                            </BlurFade>
                          ))}
                        {DATA.education.filter((e) => e.category.includes(path))
                          .length === 0 && (
                          <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <p className="text-sm text-muted-foreground italic">
                              No education listed for this path yet.
                            </p>
                          </BlurFade>
                        )}
                      </div>
                    </section>
                  )}

                  {/* --- Projects --- */}
                  {(path === "solopreneur" || path === "engineer") && (
                    <section id={`projects-${path}`}>
                      <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <h2 className="text-xl font-bold mb-4">Projects</h2>
                      </BlurFade>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {DATA.projects
                          .filter((p) => p.category.includes(path))
                          .map((project, id) => (
                            <BlurFade
                              key={project.title}
                              delay={BLUR_FADE_DELAY * 9 + id * 0.05}
                            >
                              <ProjectCard
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
                            </BlurFade>
                          ))}
                      </div>
                      {DATA.projects.filter((p) => p.category.includes(path))
                        .length === 0 && (
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                          <p className="text-sm text-muted-foreground italic">
                            No projects listed for this path yet.
                          </p>
                        </BlurFade>
                      )}
                    </section>
                  )}

                  {/* --- Awards --- */}

                  {(path === "engineer" || path === "musician") &&
                    DATA.awards &&
                    DATA.awards.length > 0 && (
                      <section id={`awards-${path}`}>
                        <BlurFade delay={BLUR_FADE_DELAY * 8}>
                          <h2 className="text-xl font-bold mb-4">
                            Awards & Recognition
                          </h2>
                        </BlurFade>
                        <div className="flex flex-col gap-y-3">
                          {DATA.awards
                            .filter((a) => a.category.includes(path))
                            .map((award, id) => (
                              <BlurFade
                                key={award.title}
                                delay={BLUR_FADE_DELAY * 9 + id * 0.05}
                              >
                                <ResumeCard
                                  logoUrl={award.logoUrl}
                                  altText={award.issuingBody} // Used for AvatarFallback
                                  title={award.title}
                                  detail={award.detail}
                                  subtitle={award.issuingBody}
                                  period={award.date}
                                  description={award.description}
                                />
                              </BlurFade>
                            ))}
                          {DATA.awards.filter((a) => a.category.includes(path))
                            .length === 0 && (
                            <BlurFade delay={BLUR_FADE_DELAY * 9}>
                              <p className="text-sm text-muted-foreground italic">
                                No awards listed for this path yet.
                              </p>
                            </BlurFade>
                          )}
                        </div>
                      </section>
                    )}

                  {/* --- Skills --- */}
                  <section id={`skills-${path}`}>
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                      <h2 className="text-xl font-bold mb-4">Skills</h2>
                    </BlurFade>
                    <div className="flex flex-wrap gap-1">
                      {DATA.skills
                        .filter((s) => s.category.includes(path))
                        .map((skill, id) => (
                          <BlurFade
                            key={skill.name}
                            delay={BLUR_FADE_DELAY * 9 + id * 0.05}
                          >
                            <Badge>{skill.name}</Badge>
                          </BlurFade>
                        ))}
                      {DATA.skills.filter((s) => s.category.includes(path))
                        .length === 0 && (
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                          <p className="text-sm text-muted-foreground italic">
                            No skills listed for this path yet.
                          </p>
                        </BlurFade>
                      )}
                    </div>
                  </section>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </BlurFade>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="pt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <h2 className="text-5xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-center text-2xl text-muted-foreground mb-8">
            I’m always open to new opportunities and collaborations.
            <br />
            If you’d like to connect, please feel free to reach out!
          </p>
          <div className="flex justify-center gap-4">
            {Object.entries(DATA.contacts.contact)
              .filter(([key]) => ["email", "x", "github"].includes(key))
              .map(([key, contact]) => {
                const IconComponent = contact.icon;
                const href =
                  key === "email" ? `mailto:${contact.url}` : contact.url;
                return (
                  <Link
                    key={key}
                    href={href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                  >
                    <IconComponent className="w-7 h-7" />
                    <span className="hidden md:inline"></span>
                  </Link>
                );
              })}
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
