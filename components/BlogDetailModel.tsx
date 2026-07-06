import { useEffect } from "react";
import { BlogPost } from "../lib/types";
import Icon from "./Icon";
import { motion, AnimatePresence } from "motion/react";

interface BlogDetailModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogDetailModal({
  post,
  isOpen,
  onClose,
}: BlogDetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !post) return null;

  // Simple and safe text parser to map custom markdown contents in data.ts to styled elements
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("### ")) {
        return (
          <h4
            key={idx}
            className="text-lg font-bold text-white tracking-tight pt-5 pb-2"
          >
            {trimmed.replace("### ", "")}
          </h4>
        );
      }
      if (trimmed.startsWith("- ")) {
        const itemText = trimmed.replace("- ", "");
        // Support bolding within items
        const parts = itemText.split("**");
        return (
          <ul
            key={idx}
            className="list-disc pl-5 my-1 text-xs md:text-sm text-gray-300 leading-relaxed font-light"
          >
            <li>
              {parts.map((part, pIdx) =>
                pIdx % 2 === 1 ? (
                  <strong key={pIdx} className="font-bold text-gray-100">
                    {part}
                  </strong>
                ) : (
                  part
                ),
              )}
            </li>
          </ul>
        );
      }
      if (trimmed === "") {
        return <div key={idx} className="h-3" />;
      }
      return (
        <p
          key={idx}
          className="text-gray-300 text-xs md:text-sm leading-relaxed font-light"
        >
          {line}
        </p>
      );
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0c0d0e]/92 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-[#1e1e1f] border border-[#383838] w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-y-auto shadow-2xl flex flex-col z-10 scrollbar-none select-text"
        >
          {/* Close Header */}
          <button
            id="close-blog-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-[#252526] border border-[#383838] hover:border-[#ffdb70] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-md cursor-pointer z-20"
            aria-label="Close article"
          >
            <Icon name="X" size={16} />
          </button>

          {/* Banner cover */}
          <div className="relative w-full aspect-21/9 bg-[#141415] overflow-hidden border-b border-[#383838]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1e1e1f] to-transparent opacity-50" />
          </div>

          {/* Content area */}
          <div className="p-6 md:p-10 space-y-6">
            {/* Meta headers */}
            <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs text-gray-500 font-semibold tracking-wide">
              <span className="text-[#ffdb70] uppercase bg-[#ffdb70]/5 border border-[#ffdb70]/20 px-2 py-0.5 rounded-lg">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">
              {post.title}
            </h3>

            <div className="w-full h-px bg-[#383838] my-4" />

            {/* Author box */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#383838] bg-gray-800">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-200">
                  {post.author.name}
                </p>
                <p className="text-[10px] text-gray-500 font-medium">
                  Author & Publisher
                </p>
              </div>
            </div>

            {/* Rendered content */}
            <div className="space-y-4 pt-4 text-justify">
              {renderContent(post.content)}
            </div>

            <div className="w-full h-px bg-[#383838] my-6" />

            {/* Tags footer */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mr-1">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium text-gray-300 bg-[#2b2b2c] border border-[#383838] px-2.5 py-1 rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
