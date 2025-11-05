"use client";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormdData] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
    tags: [],
  });

  // handle input chagne 
  const handleInputChange = (e) => {
    
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl">Projects</h2>

      <div className="mt-5 bg-white rounded-md max-w-md p-5">
        <form action="#" className="space-y-5">
          {/* project name  */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="project_name"
              className="text-sm text-gray-700 font-medium"
            >
              Project Name *
            </label>
            <input
              id="project_name"
              name="title"
              onChange={handleInputChange}
              value={formData?.title}
              type="text"
              className="p-2 rounded-md outline-none border border-gray-200 text-sm text-gray-800"
              placeholder="Project Name"
              required
            />
          </div>
          {/* project descripton  */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="project_description"
              className="text-sm text-gray-700 font-medium"
            >
              Project Description *
            </label>
            <textarea
              id="project_description"
              rows={5}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              type="text"
              className="p-2 rounded-md outline-none border border-gray-200 text-sm text-gray-800 resize-none"
              placeholder="write project description..."
              required
            />
          </div>
          {/* github link  */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="project_github_link"
              className="text-sm text-gray-700 font-medium"
            >
              Project Github Link *
            </label>
            <input
              id="project_github_link"
              name="github"
              value={formData.github}
              onChange={handleInputChange}
              type="text"
              className="p-2 rounded-md outline-none border border-gray-200 text-sm text-gray-800 resize-none"
              placeholder="Project github link"
              required
            />
          </div>
          {/* project live link  */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="project_live_link"
              className="text-sm text-gray-700 font-medium"
            >
              Project Live Link *
            </label>
            <input
              id="project_live_link"
              type="text"
              name="live"
              value={formData?.live}
              onChange={handleInputChange}
              className="p-2 rounded-md outline-none border border-gray-200 text-sm text-gray-800 resize-none"
              placeholder="Project live link"
              required
            />
          </div>

          <button
            type="button"
            className="text-sm bg-blue-600 text-white  p-2 rounded-md"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
