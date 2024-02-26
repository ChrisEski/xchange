import { getPosts, getSinglePost } from "@/lib/data";
import { connectToDb } from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const post = await getSinglePost(slug);
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
  }
}
