import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { username } = params;
  return NextResponse.json(username, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
