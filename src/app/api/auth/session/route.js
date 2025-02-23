import Student from "@/models/Student";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const userId = request.headers.get("Authorization")?.split(" ")[1];
    if (!userId || userId === "undefined") {
      console.log("No user");
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
      console.log("No user");
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
    console.log("Error getting session: ", error.message);
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}
