import { connectToDb } from "@/lib/database";
import { Post } from "@/lib/models/Post";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { username } = params;
    await connectToDb();
    const user = await User.findOne({ username: username });
    const posts = await Post.find({ author: user._id });
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error fetching user's posts" });
  }
}
