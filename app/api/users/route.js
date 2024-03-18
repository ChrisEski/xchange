import { connectToDb } from "@/lib/database";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDb();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error fetching users" });
  }
}
