import { NextResponse } from "next/server";

const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === adminUsername && password === adminPassword) {
    const res = NextResponse.json({ message: "Login sucessfully" });
    
    res.cookies.set('token', 'admin_token', {
        httpOnly : true,
        path : '/'
    })
    return res;
  } else {
    return NextResponse.json(
      { message: "invalid credentials" },
      { status: 401 }
    );
  }
}
