import { connectToDb } from "@/lib/database";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { username } = params;
    await connectToDb();
    const user = await User.findOne({ username: username }).populate("posts");
    // console.log("User from API:", user);
    return NextResponse.json(user, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error fetching user" });
  }
}
