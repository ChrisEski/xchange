// *GET: Get the last (most recent) post
import { NextResponse } from "next/server";
import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/database";

export async function GET(request) {
  try {
    await connectToDb();
    const post = await Post.findOne().sort({ createdAt: -1 }).populate("author");
    // console.log("Post from api:", post);
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
  }
}
