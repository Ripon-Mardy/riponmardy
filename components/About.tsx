"use client";
import { useState } from "react";
import Image from "next/image";
import { personalInfo, services, testimonials, clients } from "../lib/data";
import Icon from "./Icon";

export default function AboutTab() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[activeTestimonialIdx];
  if (!currentTestimonial) return null;

  return (
    <div className="space-y-10">
      {/* Bio / Heading */}
      <section className="space-y-5 animate-fade-in">
        <header className="relative pb-5">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="absolute bottom-0 left-0 w-10 h-1 bg-linear-to-t from-[#ffdb70] to-[#f59e0b] rounded-full" />
        </header>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
          {personalInfo.bio}
        </p>
      </section>

      {/* Services Grid ("What I'm Doing") */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-white tracking-tight">
          What I'm Doing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#212123]/60 border border-[#303031] rounded-2xl p-6 flex gap-4 hover:border-[#ffdb70]/30 hover:bg-[#212123]/80 transition-all duration-300 shadow-md group hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#252526] border border-[#383838] flex items-center justify-center text-[#ffdb70] group-hover:bg-[#ffdb70]/5 group-hover:border-[#ffdb70]/40 transition-all duration-300 shadow-inner">
                <Icon
                  name={service.icon}
                  size={22}
                  className="text-[#ffdb70]"
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-[#ffdb70] transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Testimonials
          </h3>

          {/* Slider controls */}
          <div className="flex items-center gap-2">
            <button
              id="prev-testimonial-btn"
              onClick={prevTestimonial}
              className="w-8 h-8 rounded-lg bg-[#252526] border border-[#383838] hover:border-[#ffdb70] flex items-center justify-center text-gray-400 hover:text-[#ffdb70] transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Previous testimonial"
            >
              <Icon name="ArrowLeft" size={14} />
            </button>
            <button
              id="next-testimonial-btn"
              onClick={nextTestimonial}
              className="w-8 h-8 rounded-lg bg-[#252526] border border-[#383838] hover:border-[#ffdb70] flex items-center justify-center text-gray-400 hover:text-[#ffdb70] transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Next testimonial"
            >
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="relative min-h-40 bg-[#212123]/60 border border-[#303031] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-center md:items-start shadow-md overflow-hidden">
          <div className="absolute top-4 right-6 text-[#ffdb70]/10 pointer-events-none font-serif text-8xl leading-none">
            “
          </div>

          {/* Testimonial Avatar */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl overflow-hidden border border-[#383838] bg-[#2b2b2c] shadow-md">
            <Image
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              width={60}
              height={60}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content */}
          <div className="space-y-3 min-w-0 flex-1 text-center md:text-left">
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight">
                {currentTestimonial.name}
              </h4>
              <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase mt-0.5">
                {currentTestimonial.role}
              </p>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed font-light italic">
              "{currentTestimonial.text}"
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTestimonialIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeTestimonialIdx === idx
                  ? "w-5 bg-[#ffdb70]"
                  : "w-1.5 bg-[#383838] hover:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Clients Brand Partners */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Partners
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-[#212123]/40 border border-[#2d2d2f] rounded-xl py-5 px-4 flex items-center justify-center hover:bg-[#212123]/80 hover:border-[#ffdb70]/20 transition-all duration-300 shadow-sm group cursor-pointer"
            >
              <div className="text-sm font-semibold text-gray-500 group-hover:text-[#ffdb70] transition-colors duration-300 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-800 shrink-0 border border-gray-700 group-hover:border-[#ffdb70]/40 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover filter grayscale opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
