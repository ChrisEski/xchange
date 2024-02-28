import { NextResponse } from "next/server";
import { getSingleUser } from "@/lib/data";

export async function GET(request, { params }) {
  try {
    const { userId } = params;
    const user = await getSingleUser(userId);
    // console.log("User from API:", typeof user);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
}
