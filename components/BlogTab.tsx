import { useState } from "react";
import { blogPosts } from "../lib/data";
import { BlogPost } from "../lib/types";
import BlogDetailModal from "../components/BlogDetailModel";
import Icon from "./Icon";

export default function BlogTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const handleOpenModal = (post: BlogPost) => {
    setActivePost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Title */}
      <section className="space-y-5">
        <header className="relative pb-5">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Blog Articles
          </h2>
          <div className="absolute bottom-0 left-0 w-10 h-1 bg-linear-to-t from-[#ffdb70] to-[#f59e0b] rounded-full" />
        </header>
      </section>

      {/* Search and Filters panel */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <input
            id="blog-search-input"
            type="text"
            placeholder="Search articles, tags, topic guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-11 pr-4 bg-[#252526] border border-[#383838] focus:border-[#ffdb70] rounded-xl text-xs text-gray-200 placeholder-gray-500 focus:outline-none transition-all duration-300 shadow-inner"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            <Icon name="Search" size={14} />
          </div>
          {searchQuery && (
            <button
              id="clear-blog-search-btn"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
            >
              <Icon name="X" size={12} />
            </button>
          )}
        </div>

        {/* Dynamic Tag Pills list */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
          <button
            id="blog-tag-all"
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
              !selectedTag
                ? "bg-[#ffdb70]/15 border border-[#ffdb70]/30 text-[#ffdb70]"
                : "bg-[#252526] border border-[#383838] text-gray-400 hover:text-gray-100"
            }`}
          >
            All Topics
          </button>
          {allTags.map((tag) => (
            <button
              id={`blog-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedTag === tag
                  ? "bg-[#ffdb70]/15 border border-[#ffdb70]/30 text-[#ffdb70]"
                  : "bg-[#252526] border border-[#383838] text-gray-400 hover:text-gray-100"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => handleOpenModal(post)}
            className="group cursor-pointer bg-[#1a1a1b] border border-[#303031] hover:border-[#ffdb70]/30 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full"
          >
            {/* Thumbnail */}
            <div className="relative aspect-16/10 overflow-hidden bg-gray-900 shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[9px] font-bold tracking-wider text-[#ffdb70] bg-[#1e1e1f]/90 border border-[#383838]/80 px-2.5 py-1 rounded-lg uppercase shadow-md">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Card Info */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                {/* Meta details */}
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-semibold tracking-wide">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-gray-100 tracking-tight leading-snug group-hover:text-[#ffdb70] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              {/* Tags and Read more indicators */}
              <div className="flex items-center justify-between pt-3 border-t border-[#383838]/40">
                <div className="flex gap-1.5 overflow-hidden">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-medium text-gray-400 bg-[#252526] px-2 py-0.5 rounded border border-[#383838]/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] font-bold text-[#ffdb70] flex items-center gap-1 group-hover:underline uppercase tracking-wider">
                  <span>Read Article</span>
                  <Icon
                    name="ArrowRight"
                    size={10}
                    className="text-[#ffdb70]"
                  />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty Search State */}
      {filteredPosts.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#252526] border border-[#383838] flex items-center justify-center text-gray-500 mx-auto">
            <Icon name="AlertCircle" size={20} />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white tracking-tight">
              No Articles Found
            </h4>
            <p className="text-xs text-gray-400 font-light">
              We couldn't find any articles matching your filters or query.
            </p>
          </div>
        </div>
      )}

      {/* Full detail modal */}
      <BlogDetailModal
        post={activePost}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
