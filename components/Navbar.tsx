import { motion } from "motion/react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto bg-[#2b2b2c]/95 lg:bg-[#2b2b2c]/80 backdrop-blur-md border-t lg:border-t-0 lg:border-l lg:border-b border-[#383838] px-6 lg:px-10 py-3 lg:py-5 rounded-t-2xl lg:rounded-t-none lg:rounded-bl-2xl lg:rounded-tr-3xl z-40 shadow-lg lg:shadow-none w-full lg:w-auto">
      <ul className="flex items-center justify-around lg:justify-end gap-3 md:gap-6 lg:gap-8 max-w-md mx-auto lg:max-w-none">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <li key={item.id}>
              <button
                id={`nav-tab-${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  window.location.hash = item.id;
                }}
                className={`relative px-2.5 py-1.5 text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "text-[#ffdb70]"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {/* Motion layoutId for high-end slider pill or underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#ffdb70] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
