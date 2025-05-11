import { Icons } from "@/components/icons";
import {
  CodeIcon,
  GlobeIcon,
  HomeIcon,
  NotebookIcon,
  PencilLine,
} from "lucide-react";

interface NavItem {
  href: string;
  icon: React.ElementType; // Use ElementType for component types
  label: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
  navbar: boolean; // To control if it appears in the navbar
}

interface ContactInfo {
  email: string;
  tel: string;
  social: Record<string, SocialLink>; // Use a Record for key-value pairs
}

export const ALL_PORTFOLIO_PATHS = [
  "engineer",
  "solopreneur",
  "musician",
] as const;
export type PortfolioPath = (typeof ALL_PORTFOLIO_PATHS)[number];

interface WorkExperience {
  company: string;
  href?: string;
  badges?: readonly string[];
  location?: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description?: string;
  genres?: string[];
  youtubeLink?: string;
  instagramLink?: string;
  websiteLink?: string;
  category: PortfolioPath[];
}

interface EducationItem {
  school: string;
  href?: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
  description?: string;
  maestro?: string;
  category: PortfolioPath[];
}

interface Skill {
  name: string;
  category: PortfolioPath[];
}

export type ProjectStatus = "Completed" | "In Progress" | "Archived" | "Idea";

interface ProjectLink {
  type: string; // e.g., "Website", "Source", "Demo"
  href: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  href?: string;
  dates: string;
  active?: boolean;
  status?: ProjectStatus;
  description?: string;
  technologies: readonly string[];
  links?: readonly ProjectLink[];
  image?: string;
  video?: string;
  category: PortfolioPath[];
}

interface RecordItem {
  title: string; // Album or Song title
  artist: string;
  href?: string; // Link to Spotify, Apple Music, etc.
  role: string; // e.g., "Keyboards", "Composer", "Arranger"
  releaseDate: string;
  imageUrl?: string;
  category: PortfolioPath[];
  genres?: string[];
}

interface AwardItem {
  title: string;
  issuingBody: string;
  date: string;
  detail?: string;
  description?: string;
  logoUrl?: string;
  category: PortfolioPath[];
}

interface PortfolioData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink?: string;
  description: string; // Used in hero section
  summary: string; // Used in about section
  avatarUrl: string; // Path to profile picture in /public
  skills: readonly Skill[];
  navbar: readonly NavItem[];
  contact: ContactInfo;
  work: readonly WorkExperience[];
  education: readonly EducationItem[];
  projects: readonly Project[];
  records?: readonly RecordItem[];
  awards?: readonly AwardItem[];
}

export const DATA: PortfolioData = {
  name: "Denis",
  initials: "DR",
  url: "https://www.feedforfools.com", // Replace
  location: "Italy",
  // locationLink: "link_to_google_maps", // Optional
  description:
    "Software & Computer Vision Engineer with a robotics background, specializing in SLAM. Also exploring entrepreneurship and active as a professional musician.", // Adapted from CV title/summary
  summary:
    "Software Engineer with a robotics background and more than four years of professional experience, proficient in the development of innovative computer vision algorithms and specializing in SLAM and related fields.\n\nThe blend of my two passions, engineering and music, fuels my creativity and boosts my problem-solving skills and capacity for innovation in technology. I bring a friendly and cooperative attitude to every project, focusing on team achievements and the collective fulfillment of objectives. As a knowledge-hungry professional, I also continually push the boundaries of my expertise by engaging in diverse personal projects.", // Directly from CV
  avatarUrl: "/img/me.jpg",
  navbar: [
    // Empty for now, as we decided the top bar might not have page links
  ],
  contact: {
    email: "denis.ronchese@gmail.com",
    tel: "+39 320 6785694",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/denis-ronchese/",
        icon: Icons.linkedin,
        navbar: false, // Change to true if we add social icons to navbar
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/feedforfools",
        icon: Icons.github,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Leica Geosystems",
      location: "Azzano Decimo (PN), ITA",
      title: "SLAM R&D Engineer",
      logoUrl: "/img/companies/leica.jpg",
      start: "Oct 2023",
      end: "Present",
      description:
        "- Contributed to multiple SLAM-related projects, focusing on registration algorithms, optimization techniques, point cloud processing, trajectory estimation. Improved MMS products performance and robustness across various applications.\n- Developed a novel Real-Time LiDAR-Inertial Odometry approach, significantly enhancing computational efficiency, accuracy, and robustness compared to existing company solutions.\n- Developing a novel LiDAR-Inertial SLAM approach, integrating a SLAM back-end to the previous odometry pipeline that is leveraging FGO, with loop closure and IMU pre-integration factors, among others.\n- Selected member of Reality Capture's SLAM Expert Group, collaborating with industry leaders to share insights, discuss cutting-edge research, and drive innovation in SLAM technology.", // Markdown list format
      category: ["engineer"],
      // badges: ["SLAM Expert Group"], // Example badge usage - discuss if needed
    },
    {
      company: "EMAX",
      location: "Orsago (TV), ITA",
      title: "R&D Engineer, Lead R&D Engineer",
      logoUrl: "/img/companies/emax.jpg",
      start: "Nov 2020",
      end: "Oct 2023",
      description:
        "- Designed and developed an IoT infrastructure for tracking vehicles, human resources, and assets. Enhanced production adaptation and integrated compatibility with commercial devices.\n- Conducted a research project to analyze the condition of vehicles using video and LiDAR imaging to detect defects and potential accident damages in early stages.",
      category: ["engineer"],
    },
    {
      company: "Danieli Automation",
      location: "Buttrio (UD), ITA",
      title: "Intern R&D Engineer",
      logoUrl: "/img/companies/danieli-automation.jpg",
      start: "Sep 2015",
      end: "Mar 2016",
      description:
        "- Designed and developed an IoT infrastructure for tracking vehicles, human resources, and assets. Enhanced production adaptation and integrated compatibility with commercial devices.\n- Conducted a research project to analyze the condition of vehicles using video and LiDAR imaging to detect defects and potential accident damages in early stages.",
      category: ["engineer"],
    },
    {
      company: "Pink Size",
      websiteLink: "https://www.pinksize.it/",
      youtubeLink: "https://www.youtube.com/@pinksize",
      instagramLink: "https://www.instagram.com/pink.size.music",
      title: "Keyboards, Backing Vocals",
      logoUrl: "/img/bands/pink-size.jpg",
      start: "Apr 2019",
      end: "Present",
      genres: ["Pink Floyd Tribute Band"],
      category: ["musician"],
    },
    {
      company: "Aurora Rays Band",
      websiteLink: "https://www.aurorarays.com/",
      youtubeLink: "https://www.youtube.com/@auroraraysmusic",
      instagramLink: "https://www.instagram.com/aurora_rays",
      title: "Keyboards",
      logoUrl: "/img/bands/aurora-rays.jpeg",
      start: "Aug 2020",
      end: "Present",
      genres: ["Pop", "Soul", "Jazz"],
      category: ["musician"],
    },
    {
      company: "Ronnie & the Maps",
      websiteLink: "https://ronniegrace.com/",
      youtubeLink: "https://www.youtube.com/@ronniegrace2162",
      instagramLink: "https://www.instagram.com/ronniegrace",
      title: "Keyboards",
      logoUrl: "/img/bands/ronnie-grace.jpg",
      start: "Dec 2023",
      end: "Present",
      genres: ["Pop", "Electropop", "Rock"],
      category: ["musician"],
    },
    {
      company: "IZ",
      websiteLink: "https://izband.bandcamp.com/",
      youtubeLink: "https://www.youtube.com/@iz7678",
      title: "Keyboards",
      logoUrl: "/img/bands/iz.jpg",
      start: "Sep 2012",
      end: "Sep 2019",
      genres: ["Fusion", "Prog", "Jazz"],
      category: ["musician"],
    },
  ],
  education: [
    {
      school: "Università degli Studi di Trento",
      href: "https://www.unitn.it/en",
      degree:
        "Master's degree in Mechatronics Engineering (Electronics and Robotics)",
      logoUrl: "/img/education/unitn.jpg",
      start: "2017",
      end: "2019",
      category: ["engineer"],
    },
    {
      school: "Università degli Studi di Trieste",
      href: "https://www.units.it/en",
      degree: "Bachelor's degree in Information Engineering (Computer Science)",
      logoUrl: "/img/education/units.jpg",
      start: "2012",
      end: "2016",
      category: ["engineer"],
    },
    {
      school: "Private Lessons",
      href: "https://www.gianpaolorinaldi.it/",
      degree: "Jazz Piano and Improvisation",
      maestro: "(M° Gianpaolo Rinaldi)",
      logoUrl: "/img/education/rinaldi.jpg",
      start: "Sep 2014",
      end: "Jan 2020",
      // location: "Fontanafredda (PN), ITA", // Discuss adding field
      category: ["musician"],
    },
    {
      school: "Circolo Culturale Musicale G. Verdi",
      href: "https://www.circolomusicaleverdi.it/",
      degree: "Modern Piano and Keyboards",
      maestro: "(M° Arno Barzan)",
      logoUrl: "/img/education/circolo-verdi.jpg",
      start: "Sep 2004",
      end: "Jun 2012",
      // location: "Fontanafredda (PN), ITA", // Discuss adding field
      category: ["musician"],
    },
  ],
  skills: [
    // Consolidated and categorized from CV
    // SLAM / CV Expertise
    { name: "Computer Vision (Traditional/Deep)", category: ["engineer"] },
    { name: "engineer", category: ["engineer"] },
    { name: "Sensor Fusion", category: ["engineer"] },
    { name: "Object Detection/Tracking", category: ["engineer"] },
    { name: "LiDAR Processing", category: ["engineer"] },
    { name: "IMU Processing", category: ["engineer"] },
    { name: "GNSS", category: ["engineer"] },
    { name: "OpenCV", category: ["engineer"] },
    { name: "PCL (Point Cloud Library)", category: ["engineer"] },
    { name: "TensorFlow", category: ["engineer"] },
    { name: "MATLAB", category: ["engineer"] },
    { name: "C++", category: ["engineer"] },
    { name: "C", category: ["engineer"] },
    { name: "Python", category: ["engineer", "solopreneur"] },
    { name: "Cmake", category: ["engineer"] },
    { name: "Conan", category: ["engineer"] },

    // Solopreneur / Backend / General Dev
    { name: "Back-end Development", category: ["solopreneur"] },
    { name: "JavaScript", category: ["solopreneur"] },
    { name: "Node.js", category: ["solopreneur"] },
    { name: "REST APIs", category: ["solopreneur"] },
    { name: "MongoDB", category: ["solopreneur"] }, // Or generalize to NoSQL
    { name: "MySQL", category: ["solopreneur"] }, // Or generalize to SQL
    { name: "Git", category: ["engineer", "solopreneur"] },
    { name: "Agile Methodologies", category: ["engineer", "solopreneur"] },
    {
      name: "Unit & Integration Testing",
      category: ["engineer", "solopreneur"],
    },
    { name: "Design Patterns", category: ["engineer", "solopreneur"] },
    { name: "IoT Infrastructure", category: ["engineer", "solopreneur"] },
    { name: "SaaS Development", category: ["solopreneur"] },
    { name: "Figma", category: ["solopreneur"] }, // From Motherslacker!

    // iOS Development (from Motherslacker!)
    { name: "Swift", category: ["solopreneur"] },
    { name: "Objective-C", category: ["solopreneur"] },
    { name: "iOS SDK", category: ["solopreneur"] },
    { name: "Xcode", category: ["solopreneur"] },

    // Music
    { name: "Piano & Keyboards", category: ["musician"] },
    { name: "Hammond Organ", category: ["musician"] },
    { name: "Music Production", category: ["musician"] },
    { name: "Sound Design", category: ["musician"] },
    { name: "Session Musician", category: ["musician"] },
    { name: "Improvisation", category: ["musician"] },
    { name: "Logic Pro X", category: ["musician"] },
    { name: "Composition", category: ["musician"] },
    { name: "Arranging", category: ["musician"] },
    { name: "Music Theory", category: ["musician"] },
    { name: "Final Cut Pro X", category: ["musician"] },
  ],
  projects: [
    {
      title: "Dr.SLAM",
      href: "#",
      dates: "Ongoing",
      status: "In Progress",
      description:
        "- Developing a comprehensive knowledge base on SLAM and related topics, including evaluation metrics, point cloud processing, linear algebra, and optimization theory.\n- Aimed at deepening personal expertise and possibly serving as a resource for newcomers to the field.\n- Simple and clean blog-like website built with Markdeep and hosted through GitHub Pages.",
      technologies: ["Markdeep", "GitHub Pages", "SLAM Concepts"],
      links: [
        // Add GitHub Pages link if live
        // { type: "Website", href: "...", icon: <GlobeIcon className="size-3" /> },
      ],
      category: ["engineer"],
    },
    {
      title: "Motherslacker!",
      href: "#",
      dates: "Ongoing",
      status: "Idea",
      description:
        "- Developed an iOS application for monitoring and blocking app usage, featuring an innovative, user-engaging feature-masked business model, aimed at countering smartphone addiction and procrastination.\n- Currently in the early validation phase of the MVP, while finalizing technical details related to payment methods, and ensuring stringent user privacy and security measures.",
      technologies: ["Swift", "Objective-C", "iOS SDK", "Xcode", "Figma"],
      links: [],
      category: ["solopreneur"],
    },
    {
      title: "Musensei",
      href: "#",
      dates: "Ongoing",
      status: "Idea",
      description:
        "- Conceived a suite of digital tools tailored for musicians' educational and professional needs, enhancing learning efficiency and nurturing musical growth.\n- Developed REST APIs for automated music chords transcription, leveraging and combining in-market solutions for AI-based stem-separation.\n- Currently conducting a market study to assess user demand and explore the feasibility of additional features for the initial MVP, aiming at strategic validation and user engagement.",
      technologies: ["Python", "JavaScript", "REST APIs", "AI/ML (Audio)"],
      links: [],
      category: ["solopreneur", "musician"],
    },
    {
      title: "NeRD Organ XP",
      href: "#", // Add link if there's more info/demo
      dates: "Mar 2023 - Present", // Or ongoing if still tinkering
      status: "Completed", // Assuming main design/dev is done
      description:
        "- Designed a MIDI musical keyboard with a custom interface and expansion modules for sound modulation.\n- Firmware development for the main unit and all the external modules.\n- Electronics prototyping and the final PCBs design, involving challenging tracing constraints (e.g. high-frequency digital traces for USB devices).",
      technologies: [
        "C",
        "Teensy",
        "MIDI",
        "Bluetooth",
        "USB",
        "EasyEDA",
        "Hardware Design",
      ],
      links: [],
      category: ["solopreneur"],
    },
    {
      title: "Augmented Reality Virtual Assistant (Cooking Aid)", // Shortened title
      href: "https://ieeexplore.ieee.org/document/8428314",
      dates: "Dec 2017 - Apr 2018",
      status: "Completed",
      description:
        "Developed as part of the 2018 Workshop on Metrology for Industry 4.0 and IoT. Led a small team in creating a multidisciplinary Augmented Reality system using a ToF camera for object detection to assist cognitively impaired users.",
      technologies: [
        "MATLAB",
        "Augmented Reality",
        "ToF Cameras",
        "Object Detection",
      ],
      category: ["engineer"],
    },
  ],
  records: [
    {
      title: "In the City",
      artist: "Kazooka",
      href: "https://open.spotify.com/track/7CnaBmeMMtXBdIl5K24PWG?si=82ca675aa2164959",
      role: "Keyboards",
      releaseDate: "Feb 2025",
      imageUrl: "/img/records/in-the-city.jpg",
      category: ["musician"],
      genres: ["Pop", "Rock", "Funk"],
    },
    {
      title: "So Fine",
      artist: "Kazooka",
      href: "https://open.spotify.com/track/7byyZr8c1PuplxDenhJaLf?si=60e12aa72c184f02",
      role: "Keyboards",
      releaseDate: "Jan 2025",
      imageUrl: "/img/records/so-fine.jpg",
      category: ["musician"],
      genres: ["Pop", "Rock", "Funk"],
    },
    {
      title: "Hic Sunt Leones",
      artist: "Ultima Frontiera",
      href: "https://open.spotify.com/album/1EIs3s0ltpHNQpNqXMk62n?si=bnmJm9L9SCuEkMNlXO756w",
      role: "Keyboards, Arrangements",
      releaseDate: "Feb 2022",
      imageUrl: "/img/records/hic-sunt-leones.jpg",
      category: ["musician"],
      genres: ["Rock", "Hard Rock"],
    },
    {
      title: "Granted",
      artist: "Ronnie Grace",
      href: "https://open.spotify.com/track/7beGhVksYJKR9jxxqMgzgB?si=ae68ce752ebc4d10",
      role: "Keyboards",
      releaseDate: "Mar 2021",
      imageUrl: "/img/records/granted.jpg",
      category: ["musician"],
      genres: ["Pop"],
    },
    {
      title: "Il Desto Onironauta",
      artist: "IZ",
      href: "https://izband.bandcamp.com/album/il-desto-onironauta",
      role: "Keyboards",
      releaseDate: "May 2019",
      imageUrl: "/img/records/il-desto-onironauta.jpg",
      category: ["musician"],
      genres: ["Fusion", "Prog", "Jazz"],
    },
    {
      title: "Codename: R.E.C.E.S.S.",
      artist: "Denis",
      href: "https://soundcloud.com/feedforfools/sets/codename-r-e-c-e-s-s?si=0debcbd704f243b4a7dc3a9af1540229",
      role: "Composer, Producer, Engineer",
      releaseDate: "May 2018",
      imageUrl: "/img/records/codename-recess.jpg",
      category: ["musician"],
      genres: ["Soundtrack", "Electronic", "Instrumental"],
    },
    {
      title: "Silvia OST",
      artist: "Denis",
      href: "https://soundcloud.com/feedforfools/sets/silvia-ost-a-short-film-by-alexander-edwards?si=02cffa8a166f4809a68be336201fc680",
      role: "Composer, Producer, Engineer",
      releaseDate: "Oct 2017",
      imageUrl: "/img/records/silvia.jpg",
      category: ["musician"],
      genres: ["Soundtrack", "Electronic", "Orchestral"],
    },
    {
      title: "Today's Egg",
      artist: "IZ",
      href: "https://izband.bandcamp.com/album/todays-egg",
      role: "Keyboards",
      releaseDate: "Oct 2016",
      imageUrl: "/img/records/today-s-egg.jpg",
      category: ["musician"],
      genres: ["Fusion", "Prog", "Jazz"],
    },
    {
      title: "Sonder",
      artist: "Denis, Paolo Jus, Davide Viel",
      href: "https://www.youtube.com/watch?v=61f8mzN0Jww",
      role: "Keyboards, Composer, Engineer",
      releaseDate: "Jul 2016",
      imageUrl: "/img/records/sonder.jpg",
      category: ["musician"],
      genres: ["Prog", "Fusion"],
    },
    {
      title: "Amo de Tus Sueños",
      artist: "Thabu",
      href: "https://open.spotify.com/track/1HRo4DyzzJ5tuu4Dz5hTQ1?si=d310fdb26dc7420e",
      role: "Keyboards",
      releaseDate: "May 2016",
      imageUrl: "/img/records/humanidad.jpeg",
      category: ["musician"],
      genres: ["Prog", "Metal"],
    },
    {
      title: "Lebannen",
      artist: "IZ Quartet",
      href: "https://izband.bandcamp.com/album/lebannen",
      role: "Keyboards, Co-Producer, Engineer",
      releaseDate: "May 2015",
      imageUrl: "/img/records/lebannen.jpg",
      category: ["musician"],
      genres: ["Fusion", "Prog", "Jazz"],
    },
  ],
  awards: [
    {
      title: "🥈 2nd Place - Italian National Statistics Olympics",
      issuingBody: "ISTAT - Italian National Institute of Statistics",
      date: "2011",
      logoUrl: "/img/awards/istat.jpg",
      category: ["engineer"],
    },
    {
      title: "🥇 1st Place - Percoto Canta",
      detail: "(with IZ)",
      issuingBody: "Associazione Percoto Canta",
      date: "2017",
      logoUrl: "/img/awards/percoto-canta.jpg",
      category: ["musician"],
    },
    {
      title: "🏆 Finalist - ROLI Next Awards",
      detail: "(World's Top Talent)",
      issuingBody: "ROLI",
      date: "2016",
      logoUrl: "/img/awards/roli.jpg",
      category: ["musician"],
    },
  ],
} as const;
