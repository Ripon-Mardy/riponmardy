"use client";
import { useState } from "react";
import { projects } from "../../lib/data";
import { ProjectItem } from "../../lib/types";
import ProjectModal from "../../components/ProjectModel";
import Icon from "../../components/Icon";
import { motion, AnimatePresence } from "motion/react";

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
    <div className="space-y-10 animate-fade-in">
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
              onClick={() => handleOpenModal(project)}
              className="group cursor-pointer bg-[#1a1a1b] rounded-3xl overflow-hidden border border-[#303031] hover:border-[#ffdb70]/30 hover:shadow-xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1"
            >
              {/* Card Image Wrapper with magnifying effect */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {/* Glassmorphism Hover Overlay with visual eye */}
                <div className="absolute inset-0 bg-[#0e1013]/70 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#ffdb70]/15 border border-[#ffdb70]/30 flex items-center justify-center text-[#ffdb70] transform scale-75 group-hover:scale-100 transition-all duration-500 shadow-md">
                    <Icon name="Eye" size={20} />
                  </div>
                </div>
              </div>

              {/* Card Body Footer Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-gray-100 tracking-tight group-hover:text-[#ffdb70] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
                    {project.category}
                  </p>
                </div>

                {/* Tech Badges mini row */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-medium text-gray-400 bg-[#252526] px-1.5 py-0.5 rounded border border-[#383838]/40"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[9px] font-medium text-gray-500 bg-[#252526] px-1.5 py-0.5 rounded border border-[#383838]/40">
                      +{project.technologies.length - 3}
                    </span>
                  )}
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
