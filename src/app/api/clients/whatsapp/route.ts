import { createWhatsappClientSchema } from "@/app/(main)/(admin)/whats-config/page";
import prisma from "@/lib/db";
import { getServerSideSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSideSession();

  if (!session) {
    return NextResponse.json({
    }, { status: 401 });
  }

  const unsafeBody = await req.json();

  const body = createWhatsappClientSchema.safeParse(unsafeBody);

  if (body.success === false) {
    return NextResponse.json({
      message: "Invalid Inputs"
    }, { status: 400 })
  }

  const whatsappConfig = await prisma.whatsappClient.create({
    data: {
      ai_config_id: body.data.configId,
      user_id: session.user.userId,
      name: body.data.name,
    }
  })

  return NextResponse.json({
    message: "Whatsapp Client Created",
    whatsappConfig
  })
}