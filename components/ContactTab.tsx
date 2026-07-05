import React, { useState } from "react";
import Icon from "./Icon";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactTab() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!fields.name.trim()) tempErrors.name = "Full Name is required.";

    if (!fields.email.trim()) {
      tempErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!fields.subject.trim())
      tempErrors.subject = "Subject line is required.";
    if (!fields.message.trim()) {
      tempErrors.message = "Message content is required.";
    } else if (fields.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (key: keyof FormFields, val: string) => {
    setFields((prev) => ({ ...prev, [key]: val }));
    // Clear error for that field incrementally
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus("submitting");

    // Simulate form submission to server
    setTimeout(() => {
      setFormStatus("success");
      setFields({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      // Reset back to idle after a period
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }, 1800);
  };

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Title */}
      <section className="space-y-5">
        <header className="relative pb-5">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Contact
          </h2>
          <div className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-[#ffdb70] to-[#f59e0b] rounded-full" />
        </header>
      </section>

      {/* Styled Interactive Dark Map Illustration */}
      <section className="space-y-4">
        <div className="relative w-full h-64 rounded-3xl overflow-hidden border border-[#383838] bg-[#0c0d0e] shadow-inner">
          {/* Futuristic Map Blueprint Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(56,56,56,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(56,56,56,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Abstract vector map continents */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover"
            >
              {/* Simplistic stylized landscape shapes */}
              <path
                d="M150 120 C 180 140, 240 100, 290 150 C 340 200, 390 170, 420 220 C 450 270, 490 310, 520 290 C 550 270, 600 320, 650 280 C 700 240, 750 200, 780 230"
                stroke="#383838"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M50 280 Q 150 220, 250 310 T 450 240 T 650 330"
                stroke="#ffdb70"
                strokeWidth="1"
                strokeOpacity="0.1"
              />
              {/* Radial grids */}
              <circle
                cx="400"
                cy="200"
                r="120"
                stroke="#383838"
                strokeWidth="0.5"
                strokeDasharray="3 6"
              />
              <circle
                cx="400"
                cy="200"
                r="180"
                stroke="#383838"
                strokeWidth="0.5"
                strokeDasharray="2 4"
              />
            </svg>
          </div>

          {/* Technical Scope Markers */}
          <div className="absolute bottom-4 left-6 font-mono text-[9px] text-gray-500 space-y-0.5">
            <p>LOC: 37.7749° N, 122.4194° W</p>
            <p>SYS: SECURE PORTAL ONLINE</p>
          </div>

          {/* Glowing Pinpoint Node over San Francisco (centered for beautiful layout) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            {/* Pulsing ring animation */}
            <div className="absolute w-12 h-12 rounded-full bg-[#ffdb70]/10 border border-[#ffdb70]/20 animate-ping" />
            <div className="absolute w-6 h-6 rounded-full bg-[#ffdb70]/20 border border-[#ffdb70]/40 animate-pulse" />

            {/* The Pin Container */}
            <div className="relative w-8 h-8 rounded-xl bg-[#252526] border border-[#ffdb70] flex items-center justify-center text-[#ffdb70] shadow-xl z-10 animate-bounce">
              <Icon name="MapPin" size={16} />
            </div>

            {/* Tooltip Popup */}
            <div className="absolute top-[-44px] bg-[#1e1e1f] border border-[#ffdb70]/30 rounded-lg px-2.5 py-1 text-[10px] font-bold text-[#ffdb70] tracking-wide whitespace-nowrap shadow-xl">
              San Francisco Studio
            </div>
          </div>
        </div>
      </section>

      {/* Form and info split */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Contact Form
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Email Inputs (Flex row on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name field */}
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block"
              >
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Marcus Vance"
                value={fields.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full h-11 px-4 bg-[#252526] border ${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#383838] focus:border-[#ffdb70]"
                } rounded-xl text-xs text-gray-200 placeholder-gray-600 focus:outline-none transition-all duration-300`}
                disabled={formStatus === "submitting"}
              />
              {errors.name && (
                <p className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                  <Icon name="AlertCircle" size={10} />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                value={fields.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full h-11 px-4 bg-[#252526] border ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#383838] focus:border-[#ffdb70]"
                } rounded-xl text-xs text-gray-200 placeholder-gray-600 focus:outline-none transition-all duration-300`}
                disabled={formStatus === "submitting"}
              />
              {errors.email && (
                <p className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                  <Icon name="AlertCircle" size={10} />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject input */}
          <div className="space-y-2">
            <label
              htmlFor="contact-subject"
              className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              placeholder="Collaboration Opportunity"
              value={fields.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className={`w-full h-11 px-4 bg-[#252526] border ${
                errors.subject
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#383838] focus:border-[#ffdb70]"
              } rounded-xl text-xs text-gray-200 placeholder-gray-600 focus:outline-none transition-all duration-300`}
              disabled={formStatus === "submitting"}
            />
            {errors.subject && (
              <p className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                <Icon name="AlertCircle" size={10} />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message input */}
          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Hi Marcus, I would love to connect to discuss a website architecture project we are launching..."
              value={fields.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`w-full p-4 bg-[#252526] border ${
                errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#383838] focus:border-[#ffdb70]"
              } rounded-xl text-xs text-gray-200 placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none`}
              disabled={formStatus === "submitting"}
            />
            {errors.message && (
              <p className="text-[10px] font-semibold text-red-500 flex items-center gap-1">
                <Icon name="AlertCircle" size={10} />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submission and Feedback Button */}
          <div className="flex items-center justify-end">
            <button
              id="submit-contact-btn"
              type="submit"
              disabled={formStatus === "submitting"}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ffdb70] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#1e1e1f] flex items-center justify-center gap-2 text-xs font-bold tracking-wide transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
            >
              {formStatus === "idle" && (
                <>
                  <Icon name="Send" size={14} />
                  <span>Send Message</span>
                </>
              )}
              {formStatus === "submitting" && (
                <>
                  <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  <span>Sending Message...</span>
                </>
              )}
              {formStatus === "success" && (
                <>
                  <Icon name="Check" size={14} className="text-emerald-950" />
                  <span>Message Sent Successfully!</span>
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
