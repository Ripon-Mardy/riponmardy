import { connectDB } from "@/lib/db";
import Projects from "@/lib/models/Projects";
import { NextResponse } from "next/server";

// GET route / get all projects
export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const skip = (page - 1) * limit;

  const total = await Projects.countDocuments();

  console.log("serachParams", searchParams);

  const projects = await Projects.find().sort({ createdAt: -1 }).skip(skip).limit(limit);

  return NextResponse.json({
    projects,
    success : true,
    total,
    page,
    limit,
    totalPages : Math.ceil(total / limit),
  })
}

// POST route / insert projects
export async function POST(req) {
  try {
    // check method
    if (req.method !== "POST") {
      return NextResponse.json(
        {
          success: false,
          message: "Method not allowed yer",
          error: "Use POST method for this endpoint",
        },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { title, description, github, live, tags } = body;

    const newProject = {
      id: Date.now(),
      title,
      description,
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
