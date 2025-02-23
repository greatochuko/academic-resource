import mongoose from "mongoose";

const MONGO = process.env.MONGO;

const connectDB = async () => {
  if (mongoose.connection?.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGO, {
      dbName: "academicResourceDB",
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
