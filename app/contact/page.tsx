"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { contactInfo, personalInfo, socialLinks } from "../../lib/data";
import Icon from "../../components/Icon";
import SectionHeading from "../../components/SectionHeading";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormFields, string>>;

const emptyFields: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const whatsapp = socialLinks.find((l) => l.name === "WhatsApp");

const channels = [
  {
    icon: "Mail",
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  ...(whatsapp
    ? [
        {
          icon: "Whatsapp",
          label: "WhatsApp",
          value: contactInfo.phone,
          href: whatsapp.url,
        },
      ]
    : []),
  { icon: "MapPin", label: "Based in", value: contactInfo.location },
];

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="eyebrow block text-[10px]!">
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="flex items-center gap-1.5 text-xs text-red-300"
        >
          <Icon name="AlertCircle" size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactTab() {
  const [fields, setFields] = useState<FormFields>(emptyFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!fields.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!fields.subject.trim()) next.subject = "Please add a subject.";
    if (!fields.message.trim()) next.message = "Please write a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleInputChange = (key: keyof FormFields, val: string) => {
    setFields((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (formStatus === "error") setFormStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus("submitting");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { ...fields },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setFormStatus("success");
      setFields(emptyFields);
      setErrors({});
      setTimeout(() => setFormStatus("idle"), 6000);
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  const busy = formStatus === "submitting";
  const fieldProps = (key: keyof FormFields) => ({
    id: `contact-${key}`,
    value: fields[key],
    disabled: busy,
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      handleInputChange(key, e.target.value),
  });

  return (
    <div className="space-y-12 animate-fade-in">
      <SectionHeading
        index="05"
        label="Contact"
        title={
          <>
            Let&apos;s build something{" "}
            <em className="text-gradient pr-1">together</em>
          </>
        }
        description="Have a project, a role, or just an idea? Send a note and I'll get back to you."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {/* Channels */}
        <div className="stagger flex flex-col gap-3 lg:col-span-2">
          {channels.map((c, i) => {
            const inner = (
              <>
                <span className="icon-tile size-11">
                  <Icon name={c.icon} size={17} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow text-[10px]!">{c.label}</p>
                  <p className="truncate text-sm text-fg">{c.value}</p>
                </div>
                {c.href && (
                  <Icon
                    name="ArrowUpRight"
                    size={16}
                    className="text-subtle transition-all duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                )}
              </>
            );
            const className = `card-raised group flex items-center gap-4 rounded-3xl p-5 ${
              c.href ? "card-hover" : ""
            }`;
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{ "--i": i } as React.CSSProperties}
                className={className}
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                style={{ "--i": i } as React.CSSProperties}
                className={className}
              >
                {inner}
              </div>
            );
          })}

          {personalInfo.availableForWork && (
            <div className="card-raised relative mt-auto hidden overflow-hidden rounded-3xl p-6 lg:block">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -bottom-16 size-48 rounded-full bg-accent/10 blur-3xl"
              />
              <p className="relative font-serif text-xl leading-snug text-fg/90">
                Open to freelance projects and full-time roles.
              </p>
            </div>
          )}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="card-raised space-y-5 rounded-3xl p-6 md:p-8 lg:col-span-3"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field id="contact-name" label="Name" error={errors.name}>
              <input
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                className="field"
                {...fieldProps("name")}
              />
            </Field>
            <Field id="contact-email" label="Email" error={errors.email}>
              <input
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="field"
                {...fieldProps("email")}
              />
            </Field>
          </div>

          <Field id="contact-subject" label="Subject" error={errors.subject}>
            <input
              type="text"
              placeholder="Project enquiry"
              className="field"
              {...fieldProps("subject")}
            />
          </Field>

          <Field id="contact-message" label="Message" error={errors.message}>
            <textarea
              rows={6}
              placeholder="Tell me a little about what you're building…"
              className="field resize-none"
              {...fieldProps("message")}
            />
          </Field>

          <div className="flex flex-col-reverse items-stretch gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
            <p role="status" className="text-xs">
              {formStatus === "success" && (
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <Icon name="CheckCircle2" size={14} /> Thanks! Your message is
                  on its way.
                </span>
              )}
              {formStatus === "error" && (
                <span className="flex items-center gap-1.5 text-red-300">
                  <Icon name="AlertCircle" size={14} /> Couldn&apos;t send.
                  Please try again or email me directly.
                </span>
              )}
            </p>
            <button
              id="submit-contact-btn"
              type="submit"
              disabled={busy}
              className="btn btn-primary"
            >
              {busy ? (
                <>
                  <span className="size-4 animate-spin rounded-full border-2 border-accent-ink/80 border-t-transparent" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Icon name="ArrowUpRight" size={15} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
