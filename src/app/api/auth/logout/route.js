import { NextResponse } from "next/server";

export async function GET(req) {
  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set("userToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
    path: "/",
  });

  return response;
}
