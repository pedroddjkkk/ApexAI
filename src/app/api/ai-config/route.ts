import { createAiConfig } from "@/model/ai-config";
import { NextResponse } from "next/server";

  export const POST = async (request: Request) => {
    
  const body = await request.json();

  body.user_id = "3nltbejhgsk29sf";

  console.log(body);

  const ret = await createAiConfig(body)

  return NextResponse.json({ ret });
}