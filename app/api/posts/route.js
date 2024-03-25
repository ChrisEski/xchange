import { connectToDb } from "@/lib/database";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDb();
    const posts = await Post.find().populate("author");
    return NextResponse.json(posts, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error fetching posts" });
  }
}

export async function POST(request, response) {
  try {
    const data = await request.json();
    // console.log("Submitted Data:", data);

    const newPost = await Post.create(data);
    newPost.save();

    return NextResponse.json("Post created successfully", newPost);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error creating post" });
  }
}
