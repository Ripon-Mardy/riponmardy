"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

import { projects } from "../../lib/data";
import { ProjectItem } from "../../lib/types";
import ProjectModal from "../../components/ProjectModel";
import Icon from "../../components/Icon";

export default function PortfolioTab() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "All",
    "Web Application",
    "Mobile Design",
    "AI Integration",
    "Web Design",
  ];

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory,
  );

  const handleOpenModal = (project: ProjectItem) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Title */}
      <section className="space-y-5">
        <header className="relative pb-5">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Portfolio
          </h2>
          <div className="absolute bottom-0 left-0 w-10 h-1 bg-linear-to-r from-[#ffdb70] to-[#f59e0b] rounded-full" />
        </header>
      </section>

      {/* Category Pills Filters */}
      <div className="flex flex-wrap items-center gap-2.5">
        {categories.map((category) => (
          <button
            id={`portfolio-cat-${category.toLowerCase().replace(/\s+/g, "-")}`}
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              selectedCategory === category
                ? "bg-[#ffdb70] text-[#1e1e1f] shadow-md"
                : "bg-[#252526] border border-[#383838] text-gray-400 hover:text-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Bento-style Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group bg-[#1a1a1b] rounded-3xl overflow-hidden border border-[#303031] hover:border-[#ffdb70]/30 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-900">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  layout="responsive"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#ffdb70] transition-colors">
                    {project.title}
                  </h3>

                  {/* <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    {project.category}
                  </p> */}
                  <p className="line-clamp-2 text-sm text-gray-400">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-1 rounded-lg bg-[#252526] border border-[#383838] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.technologies.length > 5 && (
                    <span className="text-[10px] px-2 py-1 rounded-lg bg-[#252526] border border-[#383838] text-gray-400">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-[#383838] bg-[#252526] px-2 py-2 text-xs font-medium text-gray-200 transition hover:border-[#ffdb70] hover:text-[#ffdb70]"
                  >
                    <Icon name="Github" size={16} />
                    GitHub
                  </Link>

                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#ffdb70] px-2 py-2 text-xs font-semibold text-black transition hover:bg-[#f7d04a]"
                  >
                    <Icon name="ExternalLink" size={16} />
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#252526] border border-[#383838] flex items-center justify-center text-gray-500 mx-auto">
            <Icon name="AlertCircle" size={20} />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white tracking-tight">
              No Projects Found
            </h4>
            <p className="text-xs text-gray-400 font-light">
              There are no showcases in the "{selectedCategory}" category.
            </p>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
