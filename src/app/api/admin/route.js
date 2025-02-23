import { NextResponse } from "next/server"
import connectDB from "@/utils/db"
import Admin from "@/models/Admin";

export const GET = async (request) => {
    //fetch

    try {
        await connectDB();

        
        const admins = await Admin.find();
        return new NextResponse(admins, {
            status: 200
        })


    } catch (error) {
        return new NextResponse(error, {
            status: 500
        })
    }
    
}

export const POST = async (request) => {
    try {
        const {  adminName,  password } = await request.json();

        await connectDB();  // Ensure DB connection

        
        const newAdmin = new Admin({
            adminName,
            password  // Storing plain text password (not recommended for production)
        });

        await newAdmin.save();

        return new NextResponse("Admin has been created", { status: 201 });

    } catch (error) {
        console.error("Error creating Admin:", error);
        return new NextResponse(`Error: ${error.message}`, { status: 500 });
    }
};
