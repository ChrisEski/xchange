import { connectToDb } from "@/lib/database";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDb();
    const users = await User.find();
    return NextResponse.json(users, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error fetching users" });
  }
}
