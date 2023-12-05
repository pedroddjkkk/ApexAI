import { getServerSideSession } from "@/lib/session";
import { createAiConfig, deleteAiConfig, getAiConfigs, updateAiConfig } from "@/model/ai-config";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: Request) => {

  const body = await request.json();

  const user = await getServerSideSession();

  if (!user.user) return NextResponse.json({ ret: "not found" });

  if (body.action === "delete") {
    const ret = await deleteAiConfig(body.id);
    return NextResponse.json({ ret });
  }

  if (body.action === "update") {
    delete body.action;
    const ret = await updateAiConfig(body.id, body);
    return NextResponse.json({ ret });
  }

  body.user_id = user.user.userId;
  delete body.file;

  const ret = await createAiConfig(body)

  return NextResponse.json({ ret });
}

export const GET = async (request: NextRequest) => {
  const user = await getServerSideSession();

  if (!user.user) return NextResponse.json({ ret: "not found" });

  const ret = await getAiConfigs(user.user.userId);

  return NextResponse.json(ret);
}