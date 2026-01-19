import Projects from "@/components/Projects";
import React from "react";

async function getProjects() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(`${baseUrl}/api/projects`, {
      next: { revalidate: 60 },
    });
    if(!res.ok) {
      console.log('Api Error', res.status);
      return [];
    }
    const data = await res.json();

    return data;

  } catch (error) {
    console.log('error', error);
    return []
  }
}

const page = async () => {
  const data = await getProjects();

  return (
    <div>
      <Projects projectsData={data}/>
    </div>
  );
};

export default page;
