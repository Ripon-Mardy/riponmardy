"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { personalInfo, services, testimonials, projects, skills } from "../lib/data";
import Icon from "./Icon";
import SectionHeading, { SubHeading } from "./SectionHeading";

const stats = [
  { value: "2+", label: "Years experience" },
  { value: "1.5", label: "Years remote" },
  { value: String(projects.length), label: "Projects built" },
  { value: String(skills.length), label: "Technologies" },
];

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

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Intro */}
      <section className="space-y-10">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              I design, build &amp; ship{" "}
              <em className="text-gradient pr-1">modern web</em> applications.
            </>
          }
          description={personalInfo.bio}
        />

        <dl className="stagger grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4 [&>*]:bg-surface">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{ "--i": i } as React.CSSProperties}
              className="flex flex-col gap-1 p-5 md:p-6"
            >
              <dt className="order-2 text-xs text-subtle">{stat.label}</dt>
              <dd className="order-1 font-serif text-4xl tracking-tight text-fg">
                {stat.value}
                <span className="text-accent">.</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="space-y-7">
        <div className="flex items-baseline justify-between gap-4">
          <SubHeading>What I do</SubHeading>
          <span className="eyebrow">{String(services.length).padStart(2, "0")} services</span>
        </div>

        <div className="stagger grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <article
              key={service.id}
              style={{ "--i": i } as React.CSSProperties}
              className="card-raised card-hover group flex flex-col gap-5 rounded-3xl p-6 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <span className="icon-tile size-12 transition-colors duration-500 group-hover:border-accent/40">
                  <Icon name={service.icon} size={20} />
                </span>
                <span className="font-mono text-[11px] text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="text-[15px] font-medium tracking-tight text-fg">
                  {service.title}
                </h4>
                <p className="text-[13px] leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {currentTestimonial && (
        <section className="space-y-7">
          <div className="flex items-center justify-between gap-4">
            <SubHeading>Kind words</SubHeading>
            <div className="flex items-center gap-2">
              <button
                id="prev-testimonial-btn"
                type="button"
                onClick={prevTestimonial}
                className="btn btn-ghost size-10 px-0"
                aria-label="Previous testimonial"
              >
                <Icon name="ArrowLeft" size={15} />
              </button>
              <button
                id="next-testimonial-btn"
                type="button"
                onClick={nextTestimonial}
                className="btn btn-ghost size-10 px-0"
                aria-label="Next testimonial"
              >
                <Icon name="ArrowRight" size={15} />
              </button>
            </div>
          </div>

          <figure className="card-raised relative overflow-hidden rounded-3xl p-7 md:p-10">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 right-6 font-serif text-[10rem] leading-none text-accent/10 select-none"
            >
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative space-y-8"
              >
                <blockquote className="font-serif text-xl leading-snug text-fg/90 md:text-2xl">
                  {currentTestimonial.text}
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-line-strong">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-xs text-subtle">{currentTestimonial.role}</p>
                  </div>
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </figure>

          <div className="flex items-center justify-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTestimonialIdx(idx)}
                className={`h-1 cursor-pointer rounded-full transition-all duration-500 ${
                  activeTestimonialIdx === idx
                    ? "w-8 bg-accent"
                    : "w-3 bg-line-strong hover:bg-subtle"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={activeTestimonialIdx === idx}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
