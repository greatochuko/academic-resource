import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Material from "@/models/Materials";

export const GET = async (request) => {
  try {
    await connectDB();

    const materials = await Material.find();
    return new NextResponse(materials, {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
    await connectDB(); // Ensure DB connection
    const { file, fileName, fileType, level } = await request.json();

    const newMaterial = new Material({
      file,
      fileName,
      fileType,
      level, // Storing plain text password (not recommended for production)
    });

    await newMaterial.save();

    return new NextResponse("material has been created", { status: 201 });
  } catch (error) {
    console.error("Error creating material:", error);
    return new NextResponse(`Error: ${error.message}`, { status: 500 });
  }
};
