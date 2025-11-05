import Projects from '@/components/Projects'
import React from 'react'

async function getProjects() {
  const res = await fetch('http://localhost:3000/api/projects', {next : {revalidate : 60}});
  if(!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

const page = async () => {

  const data  = await getProjects();

  return (
    <div>
      <Projects projectsData={data || []} />
    </div>
  )
}

export default page