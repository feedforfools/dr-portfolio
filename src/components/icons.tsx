import {
  GlobeIcon,
  Code2Icon,
  MoveIcon,
  PaletteIcon,
  FileCodeIcon,
} from "lucide-react";
import {
  FaReact,
  FaEnvelope,
  FaGoogleDrive,
  FaWhatsapp,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaGithub,
  FaBrain,
} from "react-icons/fa6";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <FaEnvelope {...props} />,
  linkedin: (props: IconProps) => <FaLinkedin {...props} />,
  x: (props: IconProps) => <FaXTwitter {...props} />,
  youtube: (props: IconProps) => <FaYoutube {...props} />,
  nextjs: (props: IconProps) => <Code2Icon {...props} />,
  framermotion: (props: IconProps) => <MoveIcon {...props} />,
  tailwindcss: (props: IconProps) => <PaletteIcon {...props} />,
  typescript: (props: IconProps) => <FileCodeIcon {...props} />,
  react: (props: IconProps) => <FaReact {...props} />,
  github: (props: IconProps) => <FaGithub {...props} />,
  openai: (props: IconProps) => <FaBrain {...props} />,
  googleDrive: (props: IconProps) => <FaGoogleDrive {...props} />,
  whatsapp: (props: IconProps) => <FaWhatsapp {...props} />,
};
