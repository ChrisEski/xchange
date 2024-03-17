import { connectToDb } from "@/lib/database";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { username } = params;
    await connectToDb();
    const user = await User.findOne({ username: username }).populate("posts");
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error fetching user" });
  }
}
