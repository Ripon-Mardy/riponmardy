"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const navItems = [
  { id: "about", label: "About", href: "/" },
  { id: "resume", label: "Resume", href: "/resume" },
  { id: "portfolio", label: "Projects", href: "/portfolio" },
  { id: "blog", label: "Blog", href: "/blogs" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:absolute lg:top-2 lg:right-5 lg:left-auto lg:bottom-auto z-40 w-full lg:w-auto bg-[#2b2b2c]/95 lg:bg-[#2b2b2c]/80 backdrop-blur-md border-t lg:border lg:border-[#383838] rounded-t-2xl lg:rounded-2xl shadow-lg lg:shadow-none px-6 lg:px-8 py-3 lg:py-4">
      <ul className="flex items-center justify-around lg:justify-end gap-3 md:gap-6 lg:gap-8 max-w-md mx-auto lg:max-w-none">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.id} className="relative">
              <Link
                href={item.href}
                className={`relative px-2 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-[#ffdb70]" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}

                {isActive && (
                  <motion.span
                    // layoutId="activeTabIndicator"
                    className="absolute left-0 right-0 -bottom-1 h-[2.5px] rounded-full bg-[#ffdb70]"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
