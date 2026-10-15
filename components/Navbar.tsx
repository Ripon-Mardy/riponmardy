"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";


export const navItems = [
  { id: "about", label: "About", href: "/", icon: "User" },
  { id: "resume", label: "Resume", href: "/resume", icon: "FileText" },
  { id: "portfolio", label: "Projects", href: "/portfolio", icon: "LayoutGrid" },
  { id: "blog", label: "Blog", href: "/blogs", icon: "PenLine" },
  { id: "contact", label: "Contact", href: "/contact", icon: "Mail" },
];

export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

// Desktop pill navigation; the mobile menu lives in MobileNav
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="absolute top-5 right-5 z-40 hidden lg:block">
      <ul className="flex items-center gap-1 rounded-full border border-line-strong bg-raised/80 p-1.5 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.8),inset_0_1px_0_rgb(255_255_255/0.05)] backdrop-blur-xl">
        {navItems.map((item) => {
          const isActive = isActivePath(pathname, item.href);
          return (
            <li key={item.id} className="relative">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative z-10 block rounded-full px-4 py-2 text-center text-[13px] font-medium transition-colors duration-300 ${
                  isActive ? "text-accent-ink" : "text-muted hover:text-fg"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-linear-to-b from-accent-soft to-accent shadow-[inset_0_1px_0_rgb(255_255_255/0.45)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
