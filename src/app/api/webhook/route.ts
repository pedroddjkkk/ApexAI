import { verifyWebhook } from "@/lib/webhook/verify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { valid, body } = await verifyWebhook(req);

  if (!valid) {
    return NextResponse.json("Invalid signature", { status: 200 });
  }

  return NextResponse.json(body);
}
