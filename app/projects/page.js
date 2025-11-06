import Projects from '@/components/Projects'
import React from 'react'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getProjects() {
  const res = await fetch(`${baseUrl}/api/projects`, {next : {revalidate : 60}});
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