// *GET: Get all posts by a specific user

// import { NextResponse } from "next/server";
// import { Post, User } from "@/lib/models";

// export async function GET(request, { params }) {
//   try {
//     const { username } = params;
//     const searchParams = request.nextUrl.searchParams;
//     const limit = searchParams.get("limit");

//     // Get the params user's mongodb id in order to fetch the posts created by him
//     const user = await User.findOne({ username: username });
//     const userId = user._id;

//     // Find all posts published by this user
//     const posts = await Post.find({ author: userId }).sort({ createdAt: -1 }).limit(limit);

//     return NextResponse.json(posts);
//   } catch (error) {
//     console.log(error);
//   }
// }
