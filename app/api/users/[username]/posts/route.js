import { connectToDb } from "@/lib/database";
import { Post, User } from "@/lib/models";
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
