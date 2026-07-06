import { useEffect, useState } from "react";
import { ProjectItem } from "../lib/types";
import Icon from "./Icon";
import { motion, AnimatePresence } from "motion/react";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setActiveImageIdx(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0c0d0e]/90 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-[#1e1e1f] border border-[#383838] w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-y-auto shadow-2xl flex flex-col z-10 scrollbar-none select-text"
        >
          {/* Close Button */}
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-[#252526] border border-[#383838] hover:border-[#ffdb70] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-md cursor-pointer z-20"
            aria-label="Close modal"
          >
            <Icon name="X" size={16} />
          </button>

          {/* Hero Image Slider */}
          <div className="relative w-full aspect-video md:aspect-21/9 bg-[#141415] overflow-hidden group border-b border-[#383838]">
            <img
              src={project.gallery[activeImageIdx]}
              alt={`${project.title} screenshot ${activeImageIdx + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#1e1e1f] via-transparent to-transparent opacity-60" />

            {/* Slider Navigation Arrows */}
            {project.gallery.length > 1 && (
              <>
                <button
                  id="prev-project-img-btn"
                  onClick={() =>
                    setActiveImageIdx(
                      (prev) =>
                        (prev - 1 + project.gallery.length) %
                        project.gallery.length,
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-[#1a1a1b]/80 border border-[#383838]/80 hover:border-[#ffdb70] flex items-center justify-center text-gray-300 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <Icon name="ArrowLeft" size={14} />
                </button>
                <button
                  id="next-project-img-btn"
                  onClick={() =>
                    setActiveImageIdx(
                      (prev) => (prev + 1) % project.gallery.length,
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-[#1a1a1b]/80 border border-[#383838]/80 hover:border-[#ffdb70] flex items-center justify-center text-gray-300 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <Icon name="ArrowRight" size={14} />
                </button>
              </>
            )}

            {/* Thumbnail Navigation Dots */}
            {project.gallery.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-1.5 z-10">
                {project.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeImageIdx === idx
                        ? "w-5 bg-[#ffdb70]"
                        : "w-1.5 bg-white/40 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Modal Main Content Container */}
          <div className="p-6 md:p-10 space-y-8">
            {/* Header Details */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#383838]">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#ffdb70] uppercase bg-[#ffdb70]/5 border border-[#ffdb70]/20 px-2.5 py-1 rounded-lg">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-2.5">
                  {project.title}
                </h3>
              </div>

              {/* Action Buttons (External Link / GitHub) */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    id="project-github-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-4 rounded-xl border border-[#383838] hover:border-[#ffdb70] bg-[#252526] hover:bg-[#ffdb70]/5 flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-gray-200 hover:text-[#ffdb70] transition-all duration-300 shadow-md"
                  >
                    <Icon name="Github" size={14} />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    id="project-live-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-5 rounded-xl bg-linear-to-r from-[#ffdb70] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#1e1e1f] flex items-center justify-center gap-2 text-xs font-bold tracking-wide transition-all duration-300 shadow-md hover:-translate-y-0.5"
                  >
                    <Icon name="ExternalLink" size={14} />
                    <span>Launch Project</span>
                  </a>
                )}
              </div>
            </div>

            {/* Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left description details */}
              <div className="lg:col-span-2 space-y-4">
                <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider">
                  Project Case-Study
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed font-light whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Right Sidebar Metadata */}
              <div className="bg-[#212123]/60 border border-[#303031] rounded-2xl p-6 space-y-6 self-start shadow-sm">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-[#383838] pb-3">
                  Project Specs
                </h4>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider block">
                      Client Partner
                    </span>
                    <span className="text-xs text-gray-200 font-medium">
                      {project.client}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider block">
                      Release Date
                    </span>
                    <span className="text-xs text-gray-200 font-medium">
                      {project.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider block">
                      Stack & Libraries
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-medium text-gray-300 bg-[#2b2b2c] border border-[#383838] px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
