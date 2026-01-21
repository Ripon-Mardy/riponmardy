  "use client";
  import React, { useEffect, useState } from "react";
  import Link from "next/link";

  import { Pencil, Trash2,  X  } from 'lucide-react';


  const Page = () => {
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
    const [selectedProject, setselectedProject] = useState(null);
    const [deletePopup, setDeletePopup] = useState(false);
    const [deleteSelectedProject, setDeleteSelectedProject] = useState(null);

    const [editFormData, setEditFormData] = useState({
      title : selectedProject?.title,
      description : selectedProject?.description,
      github : selectedProject?.github,
      live : selectedProject?.live
    });
    

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

        const data = await res.json();

        if(!res.ok) {
          setError('Failed to add project');
          return;
        }

        setProjects((prev) => [data?.project, ...prev]);
        setSuccess('Project added successfully');
        setFormdData({
          title: "",
          description: "",
          github: "",
          live: "",
          tags: [],
        })

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
    // OPEN EDIT POPUP
    // ======================= 
    const openEditPopup = (project) => {
      setselectedProject(project);
      setEditFormData({
        title : project?.title,
        description : project?.description,
        github : project?.github,
        live : project?.live
      })
      setShowEditPopup(true);
    }

    // ============= 
    // HANDLE EDIT INPUT CHNAGE 
    // ===================== 
    const handleEditInputChange = (e) => {
      const {name, value} = e.target;

      setEditFormData((prev) => ({
        ...prev,
        [name] : value
      }))
    }

    // ================ 
    // HANDLE EDIT SUBMIT BUTTON
    // =================== 
    const handleEditSubmitButton = async (e) => {
      e.preventDefault();

      try {
        const res = await fetch(`/api/projects/${selectedProject?._id}`, {
          method : 'PUT',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify(editFormData)
        })

        const data = await res.json();

        if(!res.ok) {
          setError(data?.message || 'Failed to update project');
          return;
        }

        setProjects((prev) => prev.map((p) => p._id === selectedProject._id ? data?.project : p))
        setShowEditPopup(false);


      } catch (error) {
        console.log('error', error);
        setError('Failed to update project');
      }
    }

    // ============= 
    // HANDLE DELETE BUTTON
    const handleDeleteButton = (project) => {
      setDeleteSelectedProject(project);
      setDeletePopup(true);
    };



    // ================= 
    // HANDLE DELETE PROJECT
    // ================== 
    const handleDeleteProject = async () => {
      if(!deleteSelectedProject._id) return;


      try {
        const res = await fetch(`/api/projects/${deleteSelectedProject._id}`, {
          method : 'DELETE'
        });

        const data = await res.json();

        if(!res.ok) {
          setError(data?.message || 'Failed to delete project');
          return;
        }

        setProjects((prev) => prev.filter((p) => p._id !== deleteSelectedProject._id))

        setDeletePopup(false);


      } catch (error) {
        console.log('error', error);
        setError('Failed to delete project');
      }
    };


    // ============= 
    // REMOVE SUCCESS MESSAGE AFTER 1 MIN 
    // ======================== 
    useEffect(() => {
      if(!success) return;

      const timer = setTimeout(() => {
        setSuccess(null)
      }, [60000]);

      return () => clearTimeout(timer)
    }, [success])

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
                <Pencil onClick={() => openEditPopup(project)} className="w-4 h-4 text-gray-600 text-sm cursor-pointer hover:text-gray-800 transition duration-100"/>
                <Trash2 onClick={() => handleDeleteButton(project)} className="w-4 h-4 text-gray-600 text-sm cursor-pointer hover:text-gray-800 transition duration-100" />
              </div>
            </div>
            <p className="text-sm mt-2 text-gray-600"> {project?.description} </p>
            <div className="space-x-2 mt-1">
              {project?.github && (
                <Link href={project?.github} target="_blank" className="text-gray-900 font-medium text-sm border border-gray-200 rounded px-4">github</Link>
              )}
             {project?.live && (
               <Link href={project?.live} target="_blank" className="text-gray-900 font-medium text-sm border border-gray-200 rounded px-4">Live</Link>
             )}
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


            <form onSubmit={handleEditSubmitButton} className="space-y-5 mt-5">


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
                value={editFormData?.title}
                onChange={handleEditInputChange}
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
                value={editFormData?.description}
                onChange={handleEditInputChange}
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
                value={editFormData?.github}
                onChange={handleEditInputChange}
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
                value={editFormData?.live}
                onChange={handleEditInputChange}
                className="p-2 rounded-md outline-none border border-gray-200 text-sm text-gray-800 resize-none"
                placeholder="Project live link"
                required
              />
            </div>

            <button
              type="submit"
              className="text-sm bg-blue-600 text-white  p-2 rounded-md"
            >
              Update
            </button>

          </form>
          </div>
        </div>
        )}


        {/* ============== delete popup ============== */}
        {deletePopup && (
          <div className="inset-0 absolute flex items-center justify-center bg-black/45">
            <div className="bg-white p-5 rounded-md w-1/3">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-semibold text-lg">Delete Project</h2>
                <X onClick={() => setDeletePopup(false)} size={10} className="w-5 h-5 cursor-pointer" />
              </div>
              <p className="mt-4">Are you sure you want to delete this project?</p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                onClick={() => setDeletePopup(false)}
                  className="text-sm bg-gray-600 text-white p-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteProject}
                  className="text-sm bg-red-600 text-white p-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  };

  export default Page;
