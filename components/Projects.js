"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Copyright from "./Copyright";

const Projects = ({ projectsData }) => {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-5">
        <h2 className="text-2xl font-semibold text-gray-900 ">Projects</h2>

        <div className="mt-5 grid md:grid-cols-2 gap-4">
          {projectsData?.projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-md p-4 bg-gray-50 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-gray-800 font-semibold text-lg">
                  {project?.title}
                </h2>
                <div className="space-x-5">
                  <Link
                    href={project?.github}
                    target="_blank"
                    className="text-sm text-gray-800 hover:underline font-medium"
                  >
                    Github
                  </Link>
                  <Link
                    href={project?.live}
                    target="_blank"
                    className="text-sm text-gray-800 hover:underline font-medium"
                  >
                    Live
                  </Link>
                </div>
              </div>
              <p className="text-gray-800 text-sm">{project?.description}</p>
              {/* <div>
                <span className="text-gray-900 bg-gray-300 text-xs p-1 px-2 rounded-md font-light">
                  HTML
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <Copyright />
    </>
  );
};

export default Projects;
