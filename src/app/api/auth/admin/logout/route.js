import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set("adminToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
    path: "/",
  });

  return response;
}
