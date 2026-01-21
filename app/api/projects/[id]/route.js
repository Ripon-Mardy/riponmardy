import { connectDB } from "@/lib/db";
import Projects from "@/lib/models/Projects";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


// Delete projects route 
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid project id" },
        { status: 400 }
      );
    }
    const deleteProject = await Projects.findByIdAndDelete(id);

    if (!deleteProject) {
      return NextResponse.json(
        { message: "Project not found "},
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Project deleted sucessfully" },
      { project: deleteProject },
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}



// edit project route 
export async function PUT(request, {params}) {
    try {
        await connectDB();

        const {id} = params;

        // valid mongodb id check 
        if(!mongoose.Types.ObjectId.isValid(id)) {
          return NextResponse.json(
            {message : "Invalid project id"},
            {status : 400}
          )
        }

        const body = await request.json();
        const {title, description, github, live} = body;

        if(!title || !description || !github || !live) {
          return NextResponse.json(
            {message : "All fields are required"},
            {status : 400}
          )
        }

        const updateProject = await Projects.findByIdAndUpdate(
          id,
          {
            title : title.trim(),
            description : description.trim(),
            github : github.trim(),
            live : live.trim(),
          },
          {new : true, runValidators : true}
        )

        if(!updateProject) {
            return NextResponse.json(
                {message : "project not found"},
                {status : 404}
            )
        }

        return NextResponse.json(
          {
            message : 'Project updated successfully',
            project : updateProject
          },
          {status : 200}
        )

    } catch (error) {
        console.log('error', error);
        return NextResponse.json(
            {message : "Error updating prject"},
            {status : 500}
        )
    }
}