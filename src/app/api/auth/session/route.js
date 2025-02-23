import Student from "@/models/Student";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const userId = request.headers.get("Authorization")?.split(" ")[1];
    console.log({ userId });

    if (!userId || userId === "undefined") {
      return NextResponse.json(
        { error: "Invalid Token" },
        {
          status: 401,
        }
      );
    }

    await connectDB();
    const user = await Student.findById(userId);

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json(
      { user },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}
