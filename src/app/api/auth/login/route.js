import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Student from "@/models/Student";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await connectDB();

    const user = await Student.findOne({ email });

    if (!user)
      return NextResponse.json(
        { error: "Invalid email and password combination" },
        { status: 401 }
      );

    if (user.password !== password)
      return NextResponse.json(
        { error: "Invalid email and password combination" },
        { status: 401 }
      );

    const cookieStore = await cookies();
    cookieStore.set({
      name: "userToken",
      value: user._id,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error signing in:", error);
    return NextResponse.json(
      { error: `Error: ${error.message}` },
      { status: 500 }
    );
  }
}
