"use client";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AboutTab from "../components/AboutTab";
import ResumeTab from "../components/ResumeTab";
import PortfolioTab from "../components/PortfolioTab";
import BlogTab from "../components/BlogTab";
import ContactTab from "../components/ContactTab";
import NotFoundTab from "../components/NotFoundTab";
import { motion, AnimatePresence } from "motion/react";

type TabId = "about" | "resume" | "portfolio" | "blog" | "contact" | "notfound";

const validTabs: TabId[] = ["about", "resume", "portfolio", "blog", "contact"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  // Synchronize hash with active tab on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as TabId;
      if (!hash) {
        setActiveTab("about");
        window.location.hash = "about";
      } else if (validTabs.includes(hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab("notfound");
      }
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleBackToHome = () => {
    setActiveTab("about");
    window.location.hash = "about";
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "about":
        return <AboutTab />;
      case "resume":
        return <ResumeTab />;
      case "portfolio":
        return <PortfolioTab />;
      case "blog":
        return <BlogTab />;
      case "contact":
        return <ContactTab />;
      case "notfound":
        return <NotFoundTab onBackToHome={handleBackToHome} />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 font-sans selection:bg-[#ffdb70]/30 selection:text-[#ffdb70] pb-24 lg:pb-0">
      {/* Background radial soft ambient lights for a premium atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#ffdb70]/2 opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#f59e0b]/2 opacity-[0.03] blur-[120px]" />
      </div>

      {/* Main layout container */}
      <div className="relative max-w-7xl mx-auto px-4 py-6 md:py-12 lg:py-16 xl:py-20 flex flex-col lg:flex-row gap-6 md:gap-8 items-start z-10">
        {/* Left column: Sidebar */}
        <Sidebar />

        {/* Right column: Core Content Card */}
        <main className="w-full lg:flex-1 bg-[#1e1e1f] border border-[#383838] rounded-3xl relative shadow-2xl min-h-[50vh] lg:min-h-[75vh] flex flex-col">
          {/* Top Sticky Navigation bar for desktop, sticky footer on mobile */}
          {activeTab !== "notfound" && (
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          )}

          {/* Active Pane display with smooth cross-fade animation */}
          <div className="flex-1 p-6 md:p-8 lg:p-10 pt-8 lg:pt-24 pb-20 lg:pb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full"
              >
                {renderActiveTab()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
