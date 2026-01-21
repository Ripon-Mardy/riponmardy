import { connectDB } from "@/lib/db";
import Projects from "@/lib/models/Projects";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    const total = await Projects.countDocuments();

    const projects = await Projects.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      success: true,
      projects,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.log("error", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

// POST route / insert projects
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, description, github, live } = body;

    if (!title || !description || !github || !live) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const newProject = await Projects.create({
      title,
      description,
      github,
      live,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully",
        project: newProject,
      },
      { status: 201 },
    );
  } catch (err) {
    console.log("error", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
