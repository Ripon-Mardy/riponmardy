import { connectDB } from "@/lib/db";
import Contact from "@/lib/models/Contact";
import { NextResponse } from "next/server";

// email check
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    await connectDB();

    // chect content type
    const contentType = request.headers.get("content-type");
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { message: "Invalid Content Type" },
        { status: 415 }
      );
    }

    const { name, email, message } = await request.json();

    // validation 
    if(!name || !email || !message) {
        return NextResponse.json(
            { message: "All fields are required" },
            { status: 400 }
        )
    }

    if(!isValidEmail(email)) {
        return NextResponse.json(
            {message : 'Invalid email format'},
            {status : 400}
        )
    }

    // limit input size 
    if(name.length > 100 || email.length > 100 || message.length > 1000) {
        return NextResponse.json(
            {message : 'input too long'},
            {status : 400}
        )
    }

    await Contact.create({
        name : name.trim(),
        email : email.toLowerCase().trim(),
        message : message.trim()
    })

    return NextResponse.json(
        {message : 'message received successfully'},
        {status : 201}
    )


  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
