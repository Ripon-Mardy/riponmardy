"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

import { projects } from "../../lib/data";
import { ProjectItem } from "../../lib/types";
import ProjectModal from "../../components/ProjectModel";
import Icon from "../../components/Icon";
import SectionHeading from "../../components/SectionHeading";

// Only offer filters for categories that actually have projects
const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function PortfolioTab() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory,
  );

  return (
    <div className="space-y-10 animate-fade-in">
      <SectionHeading
        index="03"
        label="Projects"
        title={
          <>
            Selected <em className="text-gradient pr-1">work</em>
          </>
        }
        description="Production apps and experiments: from e-commerce platforms to real-time dashboards. Open any project for the full story."
      />

      {categories.length > 2 && (
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                id={`portfolio-cat-${category.toLowerCase().replace(/\s+/g, "-")}`}
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={active}
                className={`btn h-9 px-4 text-xs ${active ? "btn-primary" : "btn-ghost"}`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{
                duration: 0.6,
                delay: Math.min(i, 8) * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-raised card-hover group flex flex-col overflow-hidden rounded-[1.75rem]"
            >
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="relative block aspect-16/10 w-full cursor-pointer overflow-hidden bg-overlay text-left"
                aria-label={`Open details for ${project.title}`}
              >
                <Image
                  src={project.thumbnail}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1280px) 440px, (min-width: 768px) 45vw, 100vw"
                  className="object-cover object-top transition-transform duration-1000 ease-premium group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-raised via-raised/10 to-transparent" />
                <span className="absolute top-4 right-4 flex size-10 translate-y-1 items-center justify-center rounded-full border border-line-strong bg-canvas/70 text-fg opacity-0 backdrop-blur-md transition-all duration-500 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
                  <Icon name="ArrowUpRight" size={16} />
                </span>
              </button>

              <div className="flex flex-1 flex-col gap-5 p-6 pt-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-2xl tracking-tight text-fg">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[11px] text-subtle">
                      {project.date}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-[13px] leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="chip text-subtle!">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto flex gap-2 pt-1">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary h-10 flex-1 text-xs"
                    >
                      Live site
                      <Icon name="ArrowUpRight" size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost h-10 flex-1 text-xs"
                    >
                      <Icon name="Github" size={14} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="card-raised space-y-3 rounded-3xl py-16 text-center">
          <span className="icon-tile mx-auto size-12 text-subtle!">
            <Icon name="FolderOpen" size={20} />
          </span>
          <p className="text-sm text-fg">
            No projects in “{selectedCategory}” yet.
          </p>
        </div>
      )}

      <ProjectModal
        project={activeProject}
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
