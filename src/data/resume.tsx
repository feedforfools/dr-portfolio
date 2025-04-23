import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

// Define TypeScript interfaces for structure and type safety

interface NavItem {
  href: string;
  icon: React.ElementType; // Use ElementType for component types
  label: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
  navbar: boolean; // To control if it appears in the navbar (if we keep it)
}

interface ContactInfo {
  email: string;
  tel: string; // Optional: Add if you want a phone number displayed
  social: Record<string, SocialLink>; // Use a Record for key-value pairs
}

// Define the categories for filtering
export type PortfolioPath = "slam" | "solopreneur" | "music";

interface WorkExperience {
  company: string;
  href?: string;
  badges?: readonly string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string; // End date is optional for current positions
  description: string;
  category: PortfolioPath[]; // <-- The crucial category tag
}

interface EducationItem {
  school: string;
  href?: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
  category: PortfolioPath[]; // <-- Category tag
}

// Let's define skills as objects too, for easier categorization
interface Skill {
  name: string;
  category: PortfolioPath[]; // <-- Category tag
}

// Define Project Status (optional but useful)
export type ProjectStatus = "Completed" | "In Progress" | "Archived" | "Idea";

interface ProjectLink {
  type: string; // e.g., "Website", "Source", "Demo"
  href: string;
  icon: React.ReactNode; // Allow any React node for icons
}

interface Project {
  title: string;
  href?: string; // Link for the card itself
  dates: string;
  active?: boolean; // Or use status
  status?: ProjectStatus; // <-- New status field
  description: string;
  technologies: readonly string[];
  links?: readonly ProjectLink[];
  image?: string;
  video?: string;
  category: PortfolioPath[]; // <-- Category tag
}

// New 'Records' section structure
interface RecordItem {
  title: string; // Album or Song title
  artist: string;
  href?: string; // Link to Spotify, Apple Music, etc.
  role: string; // e.g., "Keyboards", "Composer", "Arranger"
  releaseDate: string;
  imageUrl?: string; // Album art
  category: PortfolioPath[]; // <-- Should always be ['music']
}

// New 'Awards' section structure
interface AwardItem {
  title: string;
  issuingBody: string;
  date: string;
  description?: string;
  href?: string;
  category: PortfolioPath[]; // <-- Category tag
}

// Main DATA object structure
interface PortfolioData {
  name: string;
  initials: string;
  url: string; // Your domain
  location: string;
  locationLink?: string; // Optional link for location
  description: string; // Used in hero section
  summary: string; // Used in about section
  avatarUrl: string; // Path to your profile picture in /public
  skills: readonly Skill[]; // Use the Skill interface
  navbar: readonly NavItem[];
  contact: ContactInfo;
  work: readonly WorkExperience[];
  education: readonly EducationItem[];
  projects: readonly Project[];
  records?: readonly RecordItem[]; // Optional for now
  awards?: readonly AwardItem[]; // Optional for now
}

// Export the main DATA object (populate with placeholders first)
export const DATA: PortfolioData = {
  name: "Your Name", // Replace
  initials: "YN", // Replace
  url: "https://yourdomain.com", // Replace
  location: "Your City, Country", // Replace
  // locationLink: "link_to_google_maps", // Optional
  description:
    "Multi-passionate individual exploring SLAM, Entrepreneurship, and Music.", // Replace
  summary:
    "Detail your journey here. Talk about your paths and motivations. Use **markdown** if needed.", // Replace
  avatarUrl: "/me.jpg", // We'll add this image to /public later
  navbar: [
    // We might remove/change this later based on nav design
    // { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/#about", icon: UserIcon, label: "About"}, // Example section link
  ],
  contact: {
    email: "your.email@example.com", // Replace
    tel: "+123456789", // Optional: Replace or remove
    social: {
      // Add your actual social links here
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourusername", // Replace
        icon: Icons.github, // We'll define these soon
        navbar: true, // Will show in Navbar if kept
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername", // Replace
        icon: Icons.linkedin,
        navbar: true,
      },
      // Add others like X, etc.
      // Example:
      // X: {
      //   name: "X",
      //   url: "https://x.com/yourusername",
      //   icon: Icons.x,
      //   navbar: true,
      // },
    },
  },
  work: [
    // Add SAMPLE work experiences using the new structure
    {
      company: "SLAM Company ABC",
      href: "https://slamcompany.com",
      location: "Remote",
      title: "SLAM Engineer",
      logoUrl: "/placeholder-logo.png", // Add logos to /public later
      start: "Jan 2022",
      end: "Present",
      description:
        "Worked on cool SLAM algorithms. Implemented sensor fusion techniques. Used C++ and ROS.",
      category: ["slam"],
    },
    {
      company: "My Side Project Inc.",
      href: "https://mysideproject.com",
      location: "Internet",
      title: "Founder / Developer",
      logoUrl: "/placeholder-logo.png",
      start: "Jun 2023",
      // end: "Present", // Omit 'end' for current roles
      description:
        "Building a SaaS application for managing cat photos. Using Next.js and Tailwind.",
      category: ["solopreneur"],
    },
    {
      company: "Studio Session Work",
      location: "Various Studios",
      title: "Session Keyboardist",
      logoUrl: "/placeholder-logo.png", // Maybe a generic music icon?
      start: "2018",
      // end: "Present", // Ongoing
      description:
        "Contributed keyboard parts to various artist recordings. Proficient in multiple genres.",
      category: ["music"],
    },
  ],
  education: [
    // Add SAMPLE education items
    {
      school: "University of Engineering",
      href: "https://uni.edu",
      degree: "M.Sc. Robotics & Computer Vision",
      logoUrl: "/placeholder-logo.png",
      start: "2019",
      end: "2021",
      category: ["slam"],
    },
    {
      school: "Self-Taught University",
      degree: "Web Development & Entrepreneurship",
      logoUrl: "/placeholder-logo.png",
      start: "Ongoing",
      end: "Present",
      category: ["solopreneur", "slam"], // Can belong to multiple
    },
    {
      school: "Music Conservatory",
      href: "https://music.edu",
      degree: "Advanced Diploma in Jazz Piano",
      logoUrl: "/placeholder-logo.png",
      start: "2015",
      end: "2018",
      category: ["music"],
    },
  ],
  skills: [
    // Add SAMPLE skills
    { name: "C++", category: ["slam"] },
    { name: "ROS", category: ["slam"] },
    { name: "Computer Vision", category: ["slam"] },
    { name: "React", category: ["solopreneur", "slam"] },
    { name: "Next.js", category: ["solopreneur"] },
    { name: "TypeScript", category: ["solopreneur", "slam"] },
    { name: "Node.js", category: ["solopreneur"] },
    { name: "Piano/Keyboards", category: ["music"] },
    { name: "Music Theory", category: ["music"] },
    { name: "Composition", category: ["music"] },
    { name: "Digital Audio Workstations (DAWs)", category: ["music"] },
  ],
  projects: [
    // Add SAMPLE projects
    {
      title: "My Awesome SaaS",
      href: "https://myawesomesaas.com",
      dates: "Jun 2023 - Present",
      status: "In Progress",
      description:
        "A tool to help people organize their thoughts. Built with the latest tech.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
      links: [
        {
          type: "Website",
          href: "https://myawesomesaas.com",
          icon: <HomeIcon className="size-3" />, // Placeholder icon
        },
        {
          type: "Source",
          href: "https://github.com/your/repo",
          icon: <CodeIcon className="size-3" />, // Placeholder icon
        },
      ],
      // image: "/project-image.png", // Add images to /public later
      category: ["solopreneur"],
    },
    {
      title: "Visual Odometry Library",
      dates: "Jan 2022 - May 2022",
      status: "Completed",
      description:
        "Implemented a feature-based visual odometry pipeline from scratch in Python.",
      technologies: ["Python", "OpenCV", "NumPy"],
      links: [
        {
          type: "Source",
          href: "https://github.com/your/slam-repo",
          icon: <CodeIcon className="size-3" />,
        },
      ],
      category: ["slam"],
    },
  ],
  records: [
    // Add SAMPLE records
    {
      title: "Album X",
      artist: "Cool Band Name",
      href: "https://spotify.link/example",
      role: "Keyboards, Co-writer",
      releaseDate: "2023",
      imageUrl: "/album-art.jpg", // Add images to /public later
      category: ["music"],
    },
  ],
  awards: [
    // Add SAMPLE awards
    {
      title: "Best Paper Award",
      issuingBody: "Robotics Conference XYZ",
      date: "2021",
      description: "For research on multi-sensor fusion.",
      category: ["slam"],
    },
    {
      title: "Indie Music Award Nominee",
      issuingBody: "Local Music Awards",
      date: "2024",
      category: ["music"],
    },
  ],
} as const; // Use "as const" for better type inference on readonly arrays/objects
