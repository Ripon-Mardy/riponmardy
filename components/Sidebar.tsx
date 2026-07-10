"use client";
import { useState } from "react";
import Image from "next/image";

import { personalInfo, contactInfo, socialLinks } from "../lib/data";
import Icon from "./Icon";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [downloadState, setDownloadState] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const handleDownloadCV = () => {
    if (downloadState !== "idle") return;
    setDownloadState("loading");

    // Simulate premium download process
    setTimeout(() => {
      setDownloadState("success");

      // Actual file-like download trigger for interactive feedback
      const element = document.createElement("a");
      const file = new Blob(
        [
          `Ripon Mardy - Lead Full-Stack Architect\nContact: ${contactInfo.email}\nExperience: 2+ Years\nEducation: Stanford MS CS\nThis is a placeholder CV for Ripon Mardy.`,
        ],
        { type: "text/plain" },
      );
      element.href = URL.createObjectURL(file);
      element.download = "resume-of-ripon-mardy(updated).pdf";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      // Reset to idle after a brief period
      setTimeout(() => {
        setDownloadState("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <aside className="w-full lg:w-70 xl:w-75 shrink-0 bg-[#1e1e1f] border border-[#383838] rounded-3xl p-6 lg:p-8 flex flex-col items-center relative lg:sticky lg:top-8 self-start shadow-xl z-20">
      {/* Contact Toggle Button for Mobile/Tablet */}
      <button
        id="sidebar-toggle-btn"
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute top-0 right-0 rounded-tr-3xl rounded-bl-3xl border-l border-b border-[#383838] bg-[#252526] hover:bg-[#2d2d30] px-4 py-3 flex items-center gap-2 text-xs font-semibold text-[#ffdb70] transition-all duration-300 lg:hidden shadow-md"
      >
        <span>{isExpanded ? "Hide Contacts" : "Show Contacts"}</span>
        <Icon
          name={isExpanded ? "ChevronUp" : "ChevronDown"}
          size={14}
          className="text-[#ffdb70]"
        />
      </button>

      {/* Profile Header */}
      <div className="flex flex-col items-center text-center w-full">
        {/* Avatar Container with glowing gradient circle */}
        <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-3xl overflow-hidden bg-[#2b2b2c] flex items-center justify-center border border-[#383838] shadow-inner mb-5 group">
          <div className="absolute inset-0 bg-linear-to-tr from-[#ffdb70] to-[#f59e0b] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            layout="responsive"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-3">
          {personalInfo.name}
        </h1>

        <span className="inline-flex items-center px-4 py-1.5 rounded-xl bg-[#282829] border border-[#383838] text-xs font-medium text-[#ffdb70] tracking-wide shadow-sm">
          {personalInfo.title}
        </span>
      </div>

      <div className="w-full h-px bg-[#383838] my-6" />

      {/* Expandable Contacts Tray for Mobile, static on Desktop */}
      <div className="w-full">
        {/* Mobile/Tablet Expandable Content */}
        <div
          className={`lg:block ${isExpanded ? "block animate-fade-in" : "hidden lg:block"}`}
        >
          {/* Contacts List */}
          <div className="space-y-5">
            {/* Contact Item */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#252526] border border-[#383838] flex items-center justify-center shadow-md">
                <Icon name="Mail" className="text-[#ffdb70]" size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  target="_blank"
                  className="text-xs text-gray-200 hover:text-[#ffdb70] transition-colors duration-200 block truncate"
                  title={contactInfo.email}
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Contact Item */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#252526] border border-[#383838] flex items-center justify-center shadow-md">
                <Icon name="Phone" className="text-[#ffdb70]" size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Phone
                </p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-xs text-gray-200 hover:text-[#ffdb70] transition-colors duration-200 block"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Contact Item */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#252526] border border-[#383838] flex items-center justify-center shadow-md">
                <Icon name="Calendar" className="text-[#ffdb70]" size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Birthday
                </p>
                <p className="text-xs text-gray-200">{contactInfo.birthday}</p>
              </div>
            </div>

            {/* Contact Item */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#252526] border border-[#383838] flex items-center justify-center shadow-md">
                <Icon name="MapPin" className="text-[#ffdb70]" size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Location
                </p>
                <p className="text-xs text-gray-200">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#383838] my-6" />

          {/* Social Icons and Download Action */}
          <div className="flex flex-col gap-5 items-center">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  id={`social-${link.name.toLowerCase()}`}
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#252526] border border-[#383838] flex items-center justify-center text-gray-400 hover:text-[#ffdb70] hover:border-[#ffdb70] hover:scale-105 transition-all duration-300 shadow-md"
                  title={link.name}
                >
                  <Icon name={link.icon} size={15} />
                </a>
              ))}
            </div>

            {/* CV Download Action */}
            <button
              id="download-cv-btn"
              onClick={handleDownloadCV}
              disabled={downloadState === "loading"}
              className="w-full py-3.5 px-4 rounded-xl border border-[#383838] hover:border-[#ffdb70] bg-[#252526] hover:bg-[#ffdb70]/5 flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-gray-200 hover:text-[#ffdb70] transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
            >
              {downloadState === "idle" && (
                <>
                  <Icon name="Download" size={14} className="text-[#ffdb70]" />
                  <span>Download CV</span>
                </>
              )}
              {downloadState === "loading" && (
                <>
                  <div className="w-4 h-4 border-2 border-[#ffdb70] border-t-transparent rounded-full animate-spin" />
                  <span>Preparing Document...</span>
                </>
              )}
              {downloadState === "success" && (
                <>
                  <Icon name="Check" size={14} className="text-[#10b981]" />
                  <span className="text-[#10b981]">Document Downloaded!</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
