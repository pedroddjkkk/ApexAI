import { NextRequest } from "next/server";
import bcrypt from "bcrypt";

export function verifyWebhook(signature: string | NextRequest) {
  const signatureHeader =
    typeof signature === "string"
      ? signature
      : signature.headers.get("x-signature");

  if (!signatureHeader) {
    throw new Error("No signature header provided");
  }

  return new Promise((resolve, reject) => {
    bcrypt.compare(
      process.env.SECRET_WEBHOOK_KEY ?? "",
      signatureHeader,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}
