"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

import { blogPosts } from "../../../lib/data";

import { ArrowLeft } from "lucide-react";

const page = () => {
  const router = useRouter();
  const params = useParams();

  const slug = Number(params.slug);

  const blog = blogPosts.find((post) => post.id === slug);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-white">Blog not found</h1>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1 text-[#ffdb70] hover:text-[#ffdb70] transition-colors mb-4  bg-[#252526] border border-[#383838] text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer hover:bg-[#ffdb70]/10"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
      <div className=" flex items-center justify-center">
        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full"
        >
          {/* Banner */}
          <div className="relative w-full aspect-21/9 overflow-hidden border-b border-[#383838]">
            <Image
              src={blog.image}
              alt="Article Banner"
              width={100}
              height={100}
              className="w-full h-full object-cover"
              layout="responsive"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1e1e1f] to-transparent opacity-50" />
          </div>

          {/* Content */}
          <div className="space-y-6 mt-5">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-semibold">
              <span className="text-[#ffdb70] uppercase bg-[#ffdb70]/5 border border-[#ffdb70]/20 px-2 py-1 rounded-lg">
                {blog.category}
              </span>

              <span>•</span>

              <span>{blog.date}</span>

              <span>•</span>

              <span>{blog.readTime}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-white">{blog.title}</h2>

            <div className="w-full h-px bg-[#383838]" />

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#383838]">
                <Image
                  width={40}
                  height={40}
                  src={blog.author.avatar}
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-white font-semibold">{blog.author.name}</p>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </div>

            {/* Article */}
            <div className="space-y-5 text-gray-300 leading-8 text-justify">
              <p>
                This project was built using Next.js, React, TypeScript, and
                Tailwind CSS. The goal was to create a clean, modern, and
                responsive portfolio website that showcases projects, skills,
                and experience.
              </p>

              <p>
                The website includes smooth animations using Framer Motion,
                reusable UI components, responsive layouts, dark mode styling,
                and optimized performance for a better user experience.
              </p>

              <h3 className="text-xl font-semibold text-white">Key Features</h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>Modern UI Design</li>
                <li>Responsive Layout</li>
                <li>Framer Motion Animations</li>
                <li>Reusable Components</li>
                <li>SEO Friendly</li>
                <li>Fast Performance</li>
              </ul>

              <h3 className="text-xl font-semibold text-white">
                Technologies Used
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>

              <p>
                This portfolio is designed to be scalable and easy to maintain.
                New projects and sections can be added with minimal effort while
                keeping the codebase clean and reusable.
              </p>
            </div>

            <div className="w-full h-px bg-[#383838]" />

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-gray-500 font-semibold">Tags:</span>

              <span className="px-3 py-1 rounded-lg bg-[#2b2b2c] border border-[#383838] text-sm text-gray-300">
                #NextJS
              </span>

              <span className="px-3 py-1 rounded-lg bg-[#2b2b2c] border border-[#383838] text-sm text-gray-300">
                #React
              </span>

              <span className="px-3 py-1 rounded-lg bg-[#2b2b2c] border border-[#383838] text-sm text-gray-300">
                #TailwindCSS
              </span>

              <span className="px-3 py-1 rounded-lg bg-[#2b2b2c] border border-[#383838] text-sm text-gray-300">
                #TypeScript
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
