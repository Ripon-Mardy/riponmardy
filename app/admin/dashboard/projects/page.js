"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Pencil, Trash2,  X  } from 'lucide-react';


const page = () => {
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';


  const [formData, setFormdData] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
    tags: [],
  });
  const [projects, setProjects ] = useState([]);
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editProjectData, setEditProjectData] = useState(null);
  console.log('editProjectData', editProjectData)
  

// ============
// get all projects data 
// ===================
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(`${apiUrl}/api/projects`);

      if(!res.ok) setError('failed to fetch projects');
      const projectData = await res.json();
      setProjects(projectData?.projects || [])
    }

    fetchProjects();
  }, [])

  // handle input chagne 
  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setFormdData((prev) => ({
      ...prev,
      [name] : value
    }))
  }; 

  // handle project submit button 
  const handleProjectSubmitButton = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/api/projects`, {
        method : 'POST',
        headers : {'Accept' : 'application/json'},
        body : JSON.stringify(formData)
      })

      if(res.ok) {
        setSuccess('Project added successfully');

        // const newProject = await res.json();
        // setProjects((prev) => ([...prev, newProject?.project]));


        setFormdData({
          title : '',
          description : '',
          github : '',
          live : ''
        })
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false);
    }
  }

  // remove success message after 1 min 
  useEffect(() => {
    if(!success) return;

    const timer = setTimeout(() => {
      setSuccess(null)
    },60000);

    return () => clearTimeout(timer);
  }, [success]);

  // =============
  // handle edit popup 
  // ======================= 
  const handleEditPopup = (project) => {
    setEditProjectData(project);
    setShowEditPopup(true);
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl">Projects</h2>

      <div className="grid grid-cols-2 gap-10 mt-5">
        <div className=" bg-white rounded-md p-5">
        <form action="#" onSubmit={handleProjectSubmitButton} className="space-y-5">
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
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
            type="submit"
            className="text-sm bg-blue-600 text-white  p-2 rounded-md"
          >
            {loading ? 'Adding...' : 'Add Project'}
          </button>

          {success && (
            <p className="text-sm text-green-600">{success}</p>
          )}
        </form>
      </div>

      {/* projects details  */}
      <div className="bg-white p-5 rounded-md space-y-3">
        {/* <h2>Projects Details</h2> */}

        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={index} className="border border-gray-100 rounded-md p-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-medium"> {project?.title} </h2>
            <div className="flex items-center justify-center gap-2">
              <Pencil onClick={() => handleEditPopup(project)} className="w-4 h-4 text-gray-600 text-sm cursor-pointer hover:text-gray-800 transition duration-100"/>
              <Trash2 className="w-4 h-4 text-gray-600 text-sm cursor-pointer hover:text-gray-800 transition duration-100" />
            </div>
          </div>
          <p className="text-sm mt-2 text-gray-600"> {project?.description} </p>
          <div className="space-x-2 mt-1">
            <Link href={project?.github} target="_blank" className="text-gray-900 font-medium text-sm border border-gray-200 rounded px-4">github</Link>
            <Link href={project?.live} target="_blank" className="text-gray-900 font-medium text-sm border border-gray-200 rounded px-4">Live</Link>
          </div>
        </div>
          ))
           
        ): (
          <span className="text-sm text-gray-600"> Projects not available </span>
        )}
       


      </div>
      </div>

      {/* ========= show edit popup ============== */}
      {showEditPopup && (
        <div className="inset-0 absolute flex items-center justify-center bg-black/45 ">
        <div className="bg-white p-5 rounded-md w-1/3">

        <div className="flex items-center justify-between gap-2">
          <h2 className="font-semibold text-lg">Edit Project</h2>
          < X onClick={() => setShowEditPopup(false)} size={10} className="w-5 h-5 cursor-pointer" />
        </div>


          <form action="#" className="space-y-5 mt-5 ">


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
              type="text"
              value={editProjectData?.title}
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
              type="text"
              value={editProjectData?.description}
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
              type="text"
              value={editProjectData?.github}
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
              value={editProjectData?.live}
              className="p-2 rounded-md outline-none border border-gray-200 text-sm text-gray-800 resize-none"
              placeholder="Project live link"
              required
            />
          </div>

          <button
            type="submit"
            className="text-sm bg-blue-600 text-white  p-2 rounded-md"
          >
            Submit
          </button>

        </form>
        </div>
      </div>
      )}


    </div>
  );
};

export default page;
