// *GET: Get user details by ID
// *PUT: Update user details by ID
// *DELETE: Delete user account by ID

import { NextResponse } from "next/server";
import { getSingleUser } from "@/lib/data";

export async function GET(request, { params }) {
  try {
    const { username } = params;
    const user = await getSingleUser(username);
    console.log("User from API:", typeof user);
    // console.log("User from API:", user);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
}
