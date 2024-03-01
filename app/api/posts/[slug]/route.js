// *GET: Get a specific post by Slug
// *PUT: Update an existing post by Slug
// *DELETE: Delete an existing post by Slug

import { getSinglePost } from "@/lib/data";
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
