"use client";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "motion/react";

import { blogPosts, personalInfo } from "../../../lib/data";
import Icon from "../../../components/Icon";

// Inline markdown: **bold** and `code`
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-fg">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded-md border border-line bg-overlay px-1.5 py-0.5 font-mono text-[0.85em] text-accent-soft"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

// Block markdown used by the posts in lib/data.ts: ### headings, "- " lists, paragraphs
function ArticleBody({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/);
  return (
    <div className="space-y-6 text-[16px] leading-[1.8] text-muted">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        const nodes: React.ReactNode[] = [];
        let list: string[] = [];
        const flushList = () => {
          if (!list.length) return;
          nodes.push(
            <ul key={`ul-${nodes.length}`} className="space-y-2 pl-1">
              {list.map((item, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-[0.8em] size-1 shrink-0 rounded-full bg-accent" />
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ul>,
          );
          list = [];
        };

        lines.forEach((line, j) => {
          if (line.startsWith("### ")) {
            flushList();
            nodes.push(
              <h3
                key={`h-${j}`}
                className="pt-4 font-serif text-[1.75rem] leading-tight tracking-tight text-fg"
              >
                {line.slice(4)}
              </h3>,
            );
          } else if (line.startsWith("- ")) {
            list.push(line.slice(2));
          } else if (line.trim()) {
            flushList();
            nodes.push(<p key={`p-${j}`}>{renderInline(line)}</p>);
          }
        });
        flushList();
        return <Fragment key={i}>{nodes}</Fragment>;
      })}
    </div>
  );
}

export default function BlogPostPage() {
  const params = useParams();
  const blog = blogPosts.find((post) => post.id === Number(params.slug));

  if (!blog) {
    return (
      <div className="space-y-6 py-20 text-center">
        <h1 className="font-serif text-4xl text-fg">Article not found</h1>
        <Link href="/blogs" className="btn btn-ghost">
          <Icon name="ArrowLeft" size={15} />
          All articles
        </Link>
      </div>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.id !== blog.id).slice(0, 2);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-3xl space-y-10"
    >
      <Link href="/blogs" className="btn btn-ghost h-9 px-4 text-xs">
        <Icon name="ArrowLeft" size={14} />
        All articles
      </Link>

      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-subtle">
          <span className="eyebrow text-accent!">{blog.category}</span>
          <span aria-hidden>·</span>
          <time>{blog.date}</time>
          <span aria-hidden>·</span>
          <span>{blog.readTime}</span>
        </div>
        <h1 className="font-serif text-4xl leading-[1.08] tracking-tight text-fg md:text-[3.25rem]">
          {blog.title}
        </h1>
        <p className="text-lg leading-relaxed text-muted">{blog.excerpt}</p>
        <div className="flex items-center gap-3">
          <div className="relative size-10 overflow-hidden rounded-full border border-line-strong">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-fg">{blog.author.name}</p>
            <p className="text-xs text-subtle">{personalInfo.title}</p>
          </div>
        </div>
      </header>

      <div className="relative aspect-21/10 overflow-hidden rounded-[1.75rem] border border-line">
        <Image
          src={blog.image}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <ArticleBody content={blog.content} />

      {otherPosts.length > 0 && (
        <footer className="space-y-5 pt-6">
          <div className="hairline" />
          <p className="eyebrow pt-4">Keep reading</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.id}`}
                className="card-raised card-hover group space-y-2 rounded-3xl p-5"
              >
                <p className="text-[11px] text-subtle">
                  {post.category} · {post.readTime}
                </p>
                <p className="font-serif text-xl leading-snug text-fg group-hover:text-accent-soft">
                  {post.title}
                </p>
              </Link>
            ))}
          </div>
        </footer>
      )}
    </motion.article>
  );
}
