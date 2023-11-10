import { getServerSideSession } from "@/lib/session";
import { createAiConfig } from "@/model/ai-config";
import { NextResponse } from "next/server";

  export const POST = async (request: Request) => {
    
  const body = await request.json();

  const user = await getServerSideSession();
  
  body.user_id = user.user.userId;

  const ret = await createAiConfig(body)

  return NextResponse.json({ ret });
}