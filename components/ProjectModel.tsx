import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ProjectItem } from "../lib/types";
import Icon from "./Icon";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer bg-canvas/80 backdrop-blur-md"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="card scrollbar-none relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-y-auto rounded-t-[2rem] sm:rounded-[2rem]"
          >
            <button
              id="close-project-modal-btn"
              type="button"
              onClick={onClose}
              className="btn btn-ghost absolute top-4 right-4 z-20 size-10 bg-canvas/60! px-0 backdrop-blur-md"
              aria-label="Close"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="relative aspect-16/8 w-full shrink-0 overflow-hidden bg-overlay">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                placeholder="blur"
                sizes="(min-width: 896px) 896px, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/20 to-transparent" />
            </div>

            <div className="-mt-16 relative space-y-8 p-6 md:p-10">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="space-y-3">
                  <span className="eyebrow text-accent!">{project.category}</span>
                  <h3
                    id="project-modal-title"
                    className="font-serif text-4xl tracking-tight text-fg md:text-5xl"
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      id="project-github-link"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                    >
                      <Icon name="Github" size={15} />
                      Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      id="project-live-link"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visit site
                      <Icon name="ArrowUpRight" size={15} />
                    </a>
                  )}
                </div>
              </div>

              <div className="hairline" />

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="space-y-3 lg:col-span-2">
                  <p className="eyebrow">Overview</p>
                  <p className="text-[15px] leading-relaxed whitespace-pre-line text-muted">
                    {project.description}
                  </p>
                </div>

                <dl className="card-raised space-y-5 self-start rounded-3xl p-6">
                  <div className="space-y-1">
                    <dt className="eyebrow text-[10px]!">Client</dt>
                    <dd className="text-sm text-fg">{project.client}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="eyebrow text-[10px]!">Released</dt>
                    <dd className="text-sm text-fg">{project.date}</dd>
                  </div>
                  <div className="space-y-2">
                    <dt className="eyebrow text-[10px]!">Stack</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
