// *GET: Get all posts by a specific user

import { NextResponse } from "next/server";
import { User } from "@/lib/models";

export async function GET(request, { params }) {
  try {
    // FIXME: FETCH POST TO ADD LIMIT AND SKIP, NOT USER
    const { username } = params;
    const user = await User.findOne({ username: username }).populate("posts");
    const posts = await user.posts;
    // console.log("User's posts from API:", posts);
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
  }
}
