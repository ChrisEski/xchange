import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { username } = params;
  return NextResponse.json(
    { status: 200 },
    { message: "Request OK" },
    { paramsUsername: username }
  );
}
