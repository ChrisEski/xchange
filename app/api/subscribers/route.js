import { connectToDb } from "@/lib/database";
import { NewsletterEmail } from "@/lib/models";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDb();
    const subscribers = await NewsletterEmail.find();
    return NextResponse.json(subscribers);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error fetching subscribers" });
  }
}
