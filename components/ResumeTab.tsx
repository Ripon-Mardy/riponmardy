import { useState } from "react";
import { educationTimeline, experienceTimeline, skills } from "../lib/data";
import Icon from "./Icon";
import { motion } from "motion/react";

type SkillCategory = "all" | "frontend" | "backend" | "design" | "other";

export default function ResumeTab() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  const categories: { id: SkillCategory; label: string }[] = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Front-End" },
    { id: "backend", label: "Back-End" },
    { id: "design", label: "Design Systems" },
    { id: "other", label: "DevOps & Utilities" },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Title */}
      <section className="space-y-5">
        <header className="relative pb-5">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Resume
          </h2>
          <div className="absolute bottom-0 left-0 w-10 h-1 bg-linear-to-r from-[#ffdb70] to-[#f59e0b] rounded-full" />
        </header>
      </section>

      {/* Experience & Education Timelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience Column */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#252526] border border-[#383838] flex items-center justify-center text-[#ffdb70]">
              <Icon name="Briefcase" size={16} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Experience
            </h3>
          </div>

          <div className="relative border-l border-[#383838] pl-6 ml-4.5 space-y-8">
            {experienceTimeline.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline node circle */}
                <div className="absolute -left-7.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#383838] border-2 border-[#1e1e1f] group-hover:bg-[#ffdb70] transition-colors duration-300" />
                <div className="absolute -left-8.75 top-[1.5px] w-6 h-6 rounded-full bg-[#ffdb70]/0 border border-[#ffdb70]/0 group-hover:border-[#ffdb70]/20 group-hover:bg-[#ffdb70]/5 transition-all duration-300 pointer-events-none" />

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-100 group-hover:text-[#ffdb70] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#ffdb70]/80">
                    <span className="font-semibold">{item.subtitle}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 font-light bg-[#252526] px-2 py-0.5 rounded border border-[#383838]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Column */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#252526] border border-[#383838] flex items-center justify-center text-[#ffdb70]">
              <Icon name="BookOpen" size={16} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Education
            </h3>
          </div>

          <div className="relative border-l border-[#383838] pl-6 ml-4.5 space-y-8">
            {educationTimeline.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline node circle */}
                <div className="absolute -left-7.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#383838] border-2 border-[#1e1e1f] group-hover:bg-[#ffdb70] transition-colors duration-300" />
                <div className="absolute -left-8.75 top-[1.5px] w-6 h-6 rounded-full bg-[#ffdb70]/0 border border-[#ffdb70]/0 group-hover:border-[#ffdb70]/20 group-hover:bg-[#ffdb70]/5 transition-all duration-300 pointer-events-none" />

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-100 group-hover:text-[#ffdb70] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#ffdb70]/80">
                    <span className="font-semibold">{item.subtitle}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 font-light bg-[#252526] px-2 py-0.5 rounded border border-[#383838]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="w-full h-px bg-[#383838] my-8" />

      {/* Professional Skills Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Technical Skills
          </h3>

          {/* Skill categories pill filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                id={`skill-cat-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#ffdb70] text-[#1e1e1f]"
                    : "bg-[#252526] border border-[#383838] text-gray-400 hover:text-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill list with interactive animated progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-xs font-bold text-gray-200 tracking-tight">
                  {skill.name}
                </span>
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider">
                  <span className="text-gray-500">{skill.level}</span>
                  <span className="text-gray-600">|</span>
                  <span className="text-[#ffdb70]">{skill.percentage}%</span>
                </div>
              </div>

              {/* Progress track */}
              <div className="h-2 w-full bg-[#2a2a2b] border border-[#383838]/40 rounded-full overflow-hidden">
                {/* Simulated progress fill with dynamic width. Since motion/react is installed, let's animate the width beautifully using motion! */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className="h-full bg-linear-to-r from-[#ffdb70] to-[#f59e0b] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
