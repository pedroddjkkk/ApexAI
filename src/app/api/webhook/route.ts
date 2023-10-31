import { verifyWebhook } from "@/lib/webhook/verify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const valid = await verifyWebhook(req);

  if (!valid) {
    return NextResponse.json("Invalid signature", { status: 401 });
  }

  return NextResponse.json(body);
}
