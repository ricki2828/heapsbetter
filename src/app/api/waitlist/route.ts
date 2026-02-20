import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email, address } = await request.json();

  if (!email) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }

  // In production: store in DB, send confirmation email
  console.log(`Waitlist signup: ${email} for ${address}`);

  return Response.json({ success: true });
}
