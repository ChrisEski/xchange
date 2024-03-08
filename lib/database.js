import mongoose from "mongoose";

export const connectToDb = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "xchange",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    throw Error("Connection error: " + error);
  }
};
