"use client";
import { useState } from "react";
import Image from "next/image";

import { personalInfo, contactInfo, socialLinks } from "../lib/data";
import Icon from "./Icon";

const contactRows = [
  { icon: "Mail", label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: "Phone", label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s+/g, "")}` },
  { icon: "Calendar", label: "Birthday", value: contactInfo.birthday },
  { icon: "MapPin", label: "Location", value: contactInfo.location },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // The <a download> does the actual download; this only drives the feedback state
  const handleDownloadCV = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <aside className="card relative z-20 flex w-full shrink-0 flex-col self-start overflow-hidden rounded-[2rem] p-6 lg:sticky lg:top-8 lg:w-75 lg:p-7 xl:w-80">
      {/* Warm light falling on the top of the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(closest-side,rgb(227_191_127/0.16),transparent)]"
      />

      {/* Profile */}
      <div className="relative flex items-center gap-4 lg:flex-col lg:items-start lg:gap-5">
        <div className="group relative size-20 shrink-0 rounded-[1.4rem] bg-linear-to-b from-accent/60 via-line-strong to-transparent p-px lg:size-28 lg:rounded-[1.75rem]">
          <div className="relative size-full overflow-hidden rounded-[calc(1.4rem-1px)] bg-raised lg:rounded-[calc(1.75rem-1px)]">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 112px, 80px"
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
            />
          </div>
        </div>

        <div className="min-w-0 space-y-2">
          <h1 className="font-serif text-[1.75rem] leading-none tracking-tight text-fg lg:text-[2.25rem]">
            {personalInfo.name}
          </h1>
          <p className="text-[13px] text-muted">{personalInfo.title}</p>
          {personalInfo.availableForWork && (
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 text-[11px] font-medium text-emerald-300/90">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for work
          </span>
          )}
        </div>
      </div>

      {/* Mobile/tablet contacts toggle */}
      <button
        id="sidebar-toggle-btn"
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls="sidebar-details"
        className="btn btn-ghost relative mt-5 h-10 w-full text-xs lg:hidden"
      >
        <span>{isExpanded ? "Hide details" : "Show contact details"}</span>
        <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={14} />
      </button>

      <div
        id="sidebar-details"
        className={`relative ${isExpanded ? "block animate-fade-in" : "hidden"} lg:block`}
      >
        <div className="hairline my-6" />

        <ul className="space-y-4">
          {contactRows.map((row) => (
            <li key={row.label} className="flex items-center gap-3.5">
              <span className="icon-tile size-10">
                <Icon name={row.icon} size={15} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="eyebrow text-[10px]!">{row.label}</p>
                {row.href ? (
                  <a
                    href={row.href}
                    title={row.value}
                    className="block truncate text-[13px] text-fg/90 transition-colors duration-300 hover:text-accent-soft"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="truncate text-[13px] text-fg/90">{row.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="hairline my-6" />

        <div className="flex items-center justify-between gap-2">
          {socialLinks.map((link) => (
            <a
              id={`social-${link.name.toLowerCase()}`}
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              title={link.name}
              className="icon-tile size-11 flex-1 rounded-full text-muted! transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-soft!"
            >
              <Icon name={link.icon} size={16} />
            </a>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
          <a
            id="download-cv-btn"
            href={personalInfo.cvUrl}
            download="Ripon-Mardy-Resume.pdf"
            onClick={handleDownloadCV}
            className="btn btn-primary"
          >
            <Icon name={downloaded ? "Check" : "Download"} size={15} />
            <span>{downloaded ? "Downloaded" : "Download CV"}</span>
          </a>
          <a
            id="view-cv-btn"
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View CV in a new tab"
            title="View CV"
            className="btn btn-ghost w-11 px-0"
          >
            <Icon name="Eye" size={15} />
          </a>
        </div>
      </div>
    </aside>
  );
}
