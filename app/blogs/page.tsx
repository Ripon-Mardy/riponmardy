"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { blogPosts } from "../../lib/data";
import Icon from "../../components/Icon";
import SectionHeading from "../../components/SectionHeading";

export default function BlogTab() {
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query),
  );

  return (
    <div className="space-y-10 animate-fade-in">
      <SectionHeading
        index="04"
        label="Journal"
        title={
          <>
            Notes &amp; <em className="text-gradient pr-1">writing</em>
          </>
        }
        description="Thoughts on architecture, interface craft and the tooling behind modern web apps."
      />

      <div className="relative max-w-md">
        <Icon
          name="Search"
          size={15}
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-subtle"
        />
        <input
          id="blog-search-input"
          type="search"
          aria-label="Search articles"
          placeholder="Search articles…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="field rounded-full! pr-10 pl-11"
        />
        {searchQuery && (
          <button
            id="clear-blog-search-btn"
            type="button"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
            className="absolute top-1/2 right-3 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-subtle hover:bg-overlay hover:text-fg"
          >
            <Icon name="X" size={12} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {filteredPosts.map((post, i) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            style={{ "--i": i } as React.CSSProperties}
            className={`card-raised card-hover group flex flex-col overflow-hidden rounded-[1.75rem] animate-fade-in ${
              i === 0 && !query ? "md:col-span-2 md:flex-row" : ""
            }`}
          >
            <div
              className={`relative aspect-16/10 shrink-0 overflow-hidden bg-overlay ${
                i === 0 && !query ? "md:aspect-auto md:w-1/2" : ""
              }`}
            >
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-1000 ease-premium group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-raised/70 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-7">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-subtle">
                  <span className="eyebrow text-accent!">{post.category}</span>
                  <span aria-hidden>·</span>
                  <time>{post.date}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-fg transition-colors duration-300 group-hover:text-accent-soft">
                  {post.title}
                </h3>
                <p className="line-clamp-3 text-[13px] leading-relaxed text-muted">
                  {post.excerpt}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-fg">
                Read article
                <Icon
                  name="ArrowRight"
                  size={14}
                  className="transition-transform duration-500 ease-premium group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="card-raised space-y-2 rounded-3xl py-14 text-center">
          <p className="text-sm text-fg">No articles match “{searchQuery}”.</p>
          <p className="text-xs text-subtle">Try a different keyword.</p>
        </div>
      )}
    </div>
  );
}
