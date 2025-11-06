import { connectDB } from "@/lib/db";
import Projects from "@/lib/models/Projects";
import { NextResponse } from "next/server";


// Delete projects route 
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = params;
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
        const body = request.json();

        const updateProject = await Projects.findByIdAndUpdate(id, body, {
            new : true,
            runValidators : true
        })

        if(!updateProject) {
            return NextResponse.json(
                {message : "project not found"},
                {status : 404}
            )
        }

        return NextResponse.json({
            message : "Project update sucessfully",
            project : updateProject
        })

    } catch (error) {
        console.log('error', error);
        return NextResponse.json(
            {message : "Error updating prject"},
            {status : 500}
        )
    }
}