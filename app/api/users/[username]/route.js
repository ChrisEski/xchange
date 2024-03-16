import { connectToDb } from "@/lib/database";
import { NextResponse } from "next/server";
import { User } from "@/lib/models/Post";

export async function GET(request, { params }) {
  try {
    const { username } = params;
    await connectToDb();
    const user = await User.findOne({ username: username }).populate("posts");
    return Response.json(user);
  } catch (error) {
    console.log(error);
  }
}
