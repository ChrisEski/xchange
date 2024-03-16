import { connectToDb } from "@/lib/database";
import { NextResponse } from "next/server";
import { User } from "@/lib/models/Post";

export async function PATCH(request, { params }) {
  const { username } = params;
  return NextResponse.json(
    { status: 200 },
    { message: "Request OK" },
    { paramsUsername: username }
  );
}
