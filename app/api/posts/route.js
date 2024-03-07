// *GET: Get all posts in desc order
// *GET: Get (x) amount of posts in desc order
// *POST: Create a new post

import { NextResponse } from "next/server";
import { getPosts } from "@/lib/data";
// *IF NO "LIMIT" IS DEFINED AS SEARCH PARAMS, IT WILL FETCH ALL POSTS
export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit");
    const post = await getPosts(limit);
    return NextResponse.json(post, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    return NextResponse.json("Error fetching post(s):", error);
  }
}
