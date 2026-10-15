"use client";
import {
  educationTimeline,
  experienceTimeline,
  personalInfo,
  skills,
} from "../../lib/data";
import { SkillItem, TimelineItem } from "../../lib/types";
import Icon from "../../components/Icon";
import SectionHeading, { SubHeading } from "../../components/SectionHeading";

const skillGroups: { id: SkillItem["category"]; label: string; icon: string }[] = [
  { id: "frontend", label: "Front-end", icon: "Layout" },
  { id: "backend", label: "Back-end", icon: "Server" },
  { id: "database", label: "Database", icon: "Database" },
  { id: "tools", label: "Tools & Workflow", icon: "Wrench" },
  { id: "ai", label: "AI", icon: "Sparkles" },
  { id: "familiar", label: "Familiar with", icon: "Compass" },
  { id: "other", label: "Other", icon: "Layers" },
];

// Filled dots convey proficiency without false-precision percentages
const levelDots: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="card-raised card-hover group relative rounded-3xl p-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1">
              <h4 className="text-[15px] font-medium tracking-tight text-fg">
                {item.title}
              </h4>
              <p className="text-[13px] text-accent/90">{item.subtitle}</p>
            </div>
            <span className="chip shrink-0 self-start font-mono text-[10.5px]!">
              {item.period}
            </span>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-muted">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function ResumePage() {
  const groups = skillGroups
    .map((group) => ({
      ...group,
      items: skills.filter((s) => s.category === group.id),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="space-y-16 animate-fade-in">
      <section className="space-y-8">
        <SectionHeading
          index="02"
          label="Resume"
          title={
            <>
              Experience &amp; <em className="text-gradient pr-1">craft</em>
            </>
          }
        />

        {/* CV card */}
        <div className="card-raised relative flex flex-col gap-5 overflow-hidden rounded-3xl p-6 sm:flex-row sm:items-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-accent/10 blur-3xl"
          />
          <span className="icon-tile size-12">
            <Icon name="FileText" size={20} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-medium text-fg">Full resume</p>
            <p className="text-[13px] text-muted">
              One-page PDF with experience, projects and skills.
            </p>
          </div>
          <div className="relative flex items-center gap-2">
            <a
              id="resume-download-btn"
              href={personalInfo.cvUrl}
              download="Ripon-Mardy-Resume.pdf"
              className="btn btn-primary flex-1 sm:flex-none"
            >
              <Icon name="Download" size={15} />
              Download PDF
            </a>
            <a
              id="resume-view-btn"
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost flex-1 sm:flex-none"
            >
              <Icon name="ArrowUpRight" size={15} />
              View
            </a>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8">
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="icon-tile size-10">
              <Icon name="Briefcase" size={16} />
            </span>
            <SubHeading>Experience</SubHeading>
          </div>
          <Timeline items={experienceTimeline} />
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="icon-tile size-10">
              <Icon name="GraduationCap" size={16} />
            </span>
            <SubHeading>Education</SubHeading>
          </div>
          <Timeline items={educationTimeline} />
        </section>
      </div>

      <section className="space-y-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SubHeading>Technical skills</SubHeading>
          <div className="flex items-center gap-4 text-[11px] text-subtle">
            {Object.entries(levelDots).map(([level, n]) => (
              <span key={level} className="flex items-center gap-1.5">
                <Dots filled={n} />
                {level}
              </span>
            ))}
          </div>
        </div>

        <div className="stagger grid grid-cols-1 gap-4 md:grid-cols-2">
          {groups.map((group, i) => (
            <div
              key={group.id}
              style={{ "--i": i } as React.CSSProperties}
              className="card-raised rounded-3xl p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="icon-tile size-9">
                    <Icon name={group.icon} size={15} />
                  </span>
                  <h4 className="text-[15px] font-medium text-fg">{group.label}</h4>
                </div>
                <span className="font-mono text-[11px] text-subtle">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="divide-y divide-line">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-4 py-2.5"
                  >
                    <span className="text-[13px] text-fg/90">{skill.name}</span>
                    <span title={skill.level}>
                      <Dots filled={levelDots[skill.level] ?? 2} />
                      <span className="sr-only">{skill.level}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Dots({ filled }: { filled: number }) {
  return (
    <span aria-hidden className="inline-flex items-center gap-1">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`size-1.5 rounded-full ${n <= filled ? "bg-accent" : "bg-line-strong"}`}
        />
      ))}
    </span>
  );
}
