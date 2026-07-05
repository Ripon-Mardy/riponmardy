import * as Lucide from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className, size = 18 }: IconProps) {
  // Map string name to Lucide Icon component
  const LucideIcon = (Lucide as any)[name];

  if (!LucideIcon) {
    // Return a fallback icon if not found
    return <Lucide.HelpCircle className={className} size={size} />;
  }

  return <LucideIcon className={className} size={size} />;
}
