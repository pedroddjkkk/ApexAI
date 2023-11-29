import prisma from "@/lib/db";
import { getServerSideSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await getServerSideSession();

  if (!user) {
    return NextResponse.redirect("/login");
  }

  const whatsappClient = await prisma.whatsappClient.findFirst({
    where: {
      
    }
  })

  return NextResponse.json({
    message: "Hello World",
  });
}
