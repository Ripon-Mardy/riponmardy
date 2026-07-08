import * as Lucide from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

// React Icons
const reactIcons: Record<string, IconType> = {
  Whatsapp: FaWhatsapp,
  Leetcode: SiLeetcode,
};

export default function Icon({ name, className, size = 18 }: IconProps) {
  // Check React Icons first
  const ReactIcon = reactIcons[name];

  if (ReactIcon) {
    return <ReactIcon className={className} size={size} />;
  }

  // Otherwise check Lucide
  const LucideIcon = Lucide[name as keyof typeof Lucide] as
    | Lucide.LucideIcon
    | undefined;

  if (LucideIcon) {
    return <LucideIcon className={className} size={size} />;
  }

  // Fallback
  return <Lucide.HelpCircle className={className} size={size} />;
}
