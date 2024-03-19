import { connectToDb } from "@/lib/database";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error fetching posts" });
  }
}
