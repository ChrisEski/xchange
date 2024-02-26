import mongoose from "mongoose";

export const connectToDb = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "xchange" });
    console.log("Connected to database");
  } catch (error) {
    throw new Error("Connection error: " + error);
  }
};
