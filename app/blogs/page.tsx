"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { blogPosts } from "../../lib/data";
import Icon from "../../components/Icon";

export default function BlogTab() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  console.log(
    filteredPosts.map((post) => ({ id: post.id, title: post.title })),
  );

  return (
    <div className="space-y-5 animate-fade-in">
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
      </div>

      {/* Blog Cards list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer bg-[#1a1a1b] border border-[#303031] hover:border-[#ffdb70]/30 rounded-3xl overflow-hidden shadow-md hover:shadow-xl flex flex-col h-full"
          >
            {/* Thumbnail */}
            <div className="relative aspect-16/10 overflow-hidden bg-gray-900 shrink-0">
              <Image
                width={100}
                height={100}
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                layout="responsive"
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

                <Link
                  href={`/blogs/${post.id}`}
                  className="text-base font-bold text-gray-100 tracking-tight leading-snug group-hover:text-[#ffdb70] transition-colors duration-300"
                >
                  {post.title}
                </Link>

                <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
