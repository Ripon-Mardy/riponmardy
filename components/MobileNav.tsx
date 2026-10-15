"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import Icon from "./Icon";
import { navItems, isActivePath } from "./Navbar";

// Rendered outside <main>: its backdrop-filter would otherwise become the
// containing block for these fixed elements and trap them inside the card.
export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Lock page scroll and allow Escape to close while the drawer is open
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  // Close the drawer if the viewport grows to the desktop layout
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setIsOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      {/* Mobile/tablet: top bar with menu button */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-canvas/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-end px-4">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="flex size-11 items-center justify-center rounded-full border border-line-strong bg-raised/80 text-fg transition-colors duration-300 hover:text-accent-soft"
          >
            <Icon name="Menu" size={18} />
          </button>
        </div>
      </header>

      {/* Mobile/tablet: right-side drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 h-dvh lg:hidden">
            <motion.div
              aria-hidden
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-canvas/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.nav
              id="mobile-nav"
              aria-label="Primary"
              role="dialog"
              aria-modal="true"
              className="absolute top-0 right-0 flex h-dvh w-[min(20rem,85vw)] flex-col overflow-y-auto border-l border-line-strong bg-surface/95 px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-[-30px_0_60px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 38 }}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">Menu</span>
                <button
                  type="button"
                  autoFocus
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex size-11 items-center justify-center rounded-full border border-line-strong bg-raised/80 text-fg transition-colors duration-300 hover:text-accent-soft"
                >
                  <Icon name="X" size={18} />
                </button>
              </div>

              <div className="hairline my-5" />

              <ul className="space-y-1.5">
                {navItems.map((item, i) => {
                  const isActive = isActivePath(pathname, item.href);
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center gap-3.5 rounded-2xl px-4 py-3.5 text-[15px] font-medium transition-colors duration-300 ${
                          isActive
                            ? "bg-linear-to-b from-accent-soft to-accent text-accent-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.45)]"
                            : "text-muted hover:bg-raised hover:text-fg"
                        }`}
                      >
                        <Icon name={item.icon} size={17} />
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
