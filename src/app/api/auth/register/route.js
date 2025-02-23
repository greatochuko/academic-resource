import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Student from "@/models/Student";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { email, password, firstName, lastName } = await req.json();

    await connectDB();

    const userExists = await Student.findOne({ email });

    if (userExists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const newStudent = new Student({
      firstName,
      lastName,
      email,
      password,
    });

    await newStudent.save();

    const cookieStore = await cookies();
    cookieStore.set({
      name: "userToken",
      value: newStudent._id,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: `Error: ${error.message}` },
      { status: 500 }
    );
  }
}
