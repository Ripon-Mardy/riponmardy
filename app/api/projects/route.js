import { connectDB } from "@/lib/db";
import Projects from "@/lib/models/Projects";
import { NextResponse } from "next/server";

// GET route / get all projects
export async function GET() {
  await connectDB();
  const projects = await Projects.find().sort({ createdAt: -1 });
  return NextResponse.json(projects);
}

// POST route / insert projects
export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description, image, github, live, tags } = body;

    const newProject = {
      id: Date.now(),
      title,
      description,
      image,
      github,
      live,
      tags,
    };
    
    Projects.create(newProject);

    return NextResponse.json(
      { message: "Project added sucessfully" },
      { projects: newProject },
      { status: 201 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse({ message: "Internal server error" }, { status: 500 });
  }
}
