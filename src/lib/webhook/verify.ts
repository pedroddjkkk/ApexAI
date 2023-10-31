import { NextRequest } from "next/server";
import bcrypt from "bcrypt";

export async function verifyWebhook(req: NextRequest) {
  const signatureHeader = req.headers.get("x-signature");

  if (!signatureHeader) {
    throw new Error("No signature header provided");
  }

  const valid = await bcrypt.compare(
    process.env.SECRET_WEBHOOK_KEY ?? "",
    signatureHeader
  );

  const body = await req.json();

  return { valid, body };
}
