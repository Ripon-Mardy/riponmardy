"use client";
import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Copyright from "./Copyright";

const Projects = ({ projectsData }) => {

    if(!Array.isArray(projectsData?.projects)) {
        return [];
    }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-5">
        <h2 className="text-2xl font-semibold text-gray-900 ">Projects</h2>

        <div className="mt-5 grid md:grid-cols-2 gap-4">
          {projectsData.projects.length > 0 ? (
            projectsData?.projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-md p-4 bg-gray-50 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-gray-800 font-semibold text-lg">
                  {project?.title}
                </h2>
                <div className="space-x-5">
                  <Link target="_blank" href={project?.github} className="text-sm font-medium text-gray-600 hover:underline" >Github</Link>
                  <Link target="_blank" href={project?.live} className="text-sm font-medium text-gray-600 hover:underline">Live</Link>
                </div>
              </div>
              <p className="text-gray-800 text-sm">{project?.description}</p>
            </div>
          ))
          ) : (
            <p className="text-gray-600 text-base">projects not available</p>
          )}
        </div>
      </div>

      <Copyright />
    </>
  );
};

export default Projects;
