"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import profileCV from "@/public/profile.jpg";

export default function Resume() {
    return (
        <main className="min-h-screen bg-gray-50 p-6 md:p-12">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none print:bg-white">
                <div className="md:flex">
                    {/* Left column */}
                    <aside className="md:w-1/3 bg-gradient-to-b from-white to-gray-100 p-6 md:p-8">
                        <div className="flex items-center flex-wrap gap-4">
                            <div className="flex-none w-20 h-20 rounded-full text-white flex items-center justify-center text-3xl font-bold">
                                <Image
                                    src={profileCV}
                                    className="w-full rounded-md"
                                    layout="responsive"
                                    width={30}
                                    height={30}
                                    alt="Ripon-Mardy"
                                />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Ripon Mardy
                                </h1>
                                <p className="text-sm text-gray-600">
                                    Full Stack Web Developer
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xs uppercase text-gray-500 tracking-wide">
                                Contact
                            </h3>
                            <ul className="mt-2 text-sm text-gray-700 space-y-2">
                                <li>
                                    Email:
                                    <a
                                        className="text-blue-600"
                                        href="mailto:mardyripon10@gmail.com"
                                    >
                                        mardyripon10@gmail.com
                                    </a>
                                </li>
                                <li>
                                    Phone:
                                    <a className="text-blue-600" href="tel:+8801320585642">
                                        +8801320585642
                                    </a>
                                </li>
                                <li>Location: Dhaka, Bangladesh</li>
                                <li>
                                    GitHub:
                                    <a
                                        className="text-blue-600"
                                        href="https://github.com/Ripon-Mardy"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        github.com/Ripon-Mardy
                                    </a>
                                </li>
                                <li>
                                    Portfolio:{" "}
                                    <a
                                        className="text-blue-600"
                                        href="https://riponmardy.vercel.app"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        riponmardy.vercel.app
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xs uppercase text-gray-500 tracking-wide">
                                Profile
                            </h3>
                            <p className="mt-2 text-sm text-gray-700">
                                Motivated full stack developer with 2 year of remote experience
                                and freelance work. I build responsive, scalable web apps and
                                enjoy learning new technologies and improving processes.
                            </p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xs uppercase text-gray-500 tracking-wide">
                                Skills
                            </h3>
                            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                                <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
                                    Next.js
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
                                    React
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
                                    Tailwind CSS
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
                                    Node.js
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
                                    Express
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
                                    MongoDB
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
                                    Javascript
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
                                    TypeScript
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xs uppercase text-gray-500 tracking-wide">
                                Tools
                            </h3>
                            <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                <li>Git & GitHub</li>
                                <li>Postman / Thunder Client</li>
                                <li>MongoDB Compass</li>
                                <li>Figma (UI collaboration)</li>
                                <li>Vercel (Deployment)</li>
                                <li>Docker (basic)</li>
                                <li>Nginx (Server setup & hosting)</li>
                                <li>Hostinger / VPS Management</li>
                                <li>Firebase (Auth & storage)</li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xs uppercase text-gray-500 tracking-wide">
                                Languages
                            </h3>
                            <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                <li>English — Intermediate</li>
                                <li>Bengali — Native</li>
                            </ul>
                        </div>
                    </aside>

                    {/* Right column */}
                    <section className="md:flex-1 p-6 md:p-8">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Resume</h2>
                                <p className="text-sm text-gray-500">
                                    Full Stack Web Developer
                                </p>
                            </div>
                            <div className="hidden print:block">
                                <small className="text-xs text-gray-400">
                                    Last updated: {new Date().toLocaleDateString()}
                                </small>
                            </div>
                        </div>

                        <div className="mt-6 space-y-6">
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-1">
                                    Work Experience
                                </h3>
                                <hr />

                                <div className="mt-3 space-y-4">
                                    <div>
                                        <div className="flex flex-col items-start justify-between">
                                            <div className="flex items-center justify-between w-full">
                                                <h4 className="font-semibold">
                                                    Full Stack Web Developer (Remote)
                                                </h4>
                                                <span className="text-sm text-gray-500">
                                                    Jan 2023 – Sept 2025
                                                </span>
                                            </div>
                                            <span className="text-gray-700 text-sm mt-1">
                                                Mathmozo It | Remote
                                            </span>
                                        </div>
                                        <div className="pl-3 mt-3">
                                            <ul className="list-disc space-y-1">
                                                <li className="text-sm text-gray-700">
                                                    Developed and maintained full-stack web applications
                                                    using Next.js, React, Node.js, and MongoDB.
                                                </li>
                                                <li className="text-sm text-gray-700">
                                                    Built responsive UI components with Tailwind CSS,
                                                    Bootstrap and improved site performance.
                                                </li>
                                                <li className="text-sm text-gray-700">
                                                    Integrated and consumed REST APIs to support real-time
                                                    data updates.
                                                </li>
                                                <li className="text-sm text-gray-700">
                                                    Worked with authentication, form handling, and secure
                                                    data storage.
                                                </li>
                                                <li className="text-sm text-gray-700">
                                                    Deployed and managed applications on Vercel and VPS
                                                    using Nginx.
                                                </li>
                                                <li className="text-sm text-gray-700">
                                                    Collaborated via GitHub, managed branches, and
                                                    followed clean code practices.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex flex-col items-start justify-between">
                                            <div className="flex items-start justify-between gap-2 w-full">
                                                <h4 className="font-semibold">
                                                    Freelance Web Developer — Clients projects
                                                </h4>
                                                <span className="text-sm text-gray-500">
                                                    Jun 2023 – Present
                                                </span>
                                            </div>
                                            <span className="text-gray-700 text-sm mt-1">
                                                Platforms: Local & Online Clients
                                            </span>
                                        </div>
                                        <div className="pl-3 mt-3">
                                            <ul className="list-disc space-y-1">
                                                <li className="text-sm text-gray-700">
                                                    Built custom websites for small businesses and
                                                    personal brands.
                                                </li>
                                                <li className="text-sm text-gray-700">
                                                    Converted client ideas into working UI with clean and
                                                    modern design.
                                                </li>
                                                <li className="text-sm text-gray-700">
                                                    Integrated admin functionality and dynamic content
                                                    using APIs.
                                                </li>
                                                <li className="text-sm text-gray-700">
                                                    Hosted websites and provided basic maintenance and
                                                    support.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* projects  */}

                            {/* <div>
                <h3 className="text-lg font-medium text-gray-800">Projects</h3>
                <div className="mt-3 grid gap-4">
                  <div className="p-4 border rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">E-commerce Demo</h4>
                        <p className="text-sm text-gray-600 mt-1">Product listing, cart, checkout (mock), built with Next.js and Tailwind. Deployed on Vercel.</p>
                      </div>
                      <div className="text-sm text-gray-500">GitHub</div>
                    </div>
                  </div>

                  <div className="p-4 border rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">Job Board / Marketplace</h4>
                        <p className="text-sm text-gray-600 mt-1">Category listings, user profiles, search and filters, REST API backend with Node.js and MongoDB.</p>
                      </div>
                      <div className="text-sm text-gray-500">Live</div>
                    </div>
                  </div>
                </div>
              </div> */}

                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-1">Education</h3>
                                <hr />
                                <div className="mt-3">
                                    <p className="text-sm text-gray-700">
                                        Diploma in CSE
                                    </p>
                                </div>
                            </div>


                            <div>
                                <h3 className="text-lg font-medium text-gray-800">
                                    Achievements & Certificates
                                </h3>
                                <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                                    <li>
                                        Completed several real-world client projects as a freelancer
                                    </li>
                                    <li>
                                        Practical experience deploying projects with Vercel and
                                        Nginx
                                    </li>
                                </ul>
                            </div>

                            {/* availability and goal  */}
                            {/* <div>
                                <h3 className="text-lg font-medium text-gray-800">
                                    Availability & Goal
                                </h3>
                                <p className="text-sm text-gray-700 mt-2">
                                    Available for a 3–6 month internship. Looking to transition
                                    into a full-time role after demonstrating strong performance.
                                    Seeking a salary that covers living expenses upon hire.
                                </p>
                            </div> */}
                        </div>

                        <div className="mt-8 flex gap-3">
                            <Link
                                href="/"
                                className="inline-flex items-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
                            >
                                Back
                            </Link>
                            <button
                                // href="/resume.pdf"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                onClick={() => window.open('/resume-of-Ripon-Mardy.pdf')}
                            >
                                Download PDF
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
