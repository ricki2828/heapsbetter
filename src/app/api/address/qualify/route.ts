import { mockQualifyAddress } from "@/lib/mock-address-data";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { address } = await request.json();

  if (!address) {
    return Response.json({ error: "Address is required" }, { status: 400 });
  }

  const result = await mockQualifyAddress(address);
  return Response.json(result);
}
