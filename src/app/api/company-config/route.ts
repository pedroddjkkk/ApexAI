import { getServerSideSession } from "@/lib/session";
import { createCompanyConfig } from "@/model/company-config";
import { NextResponse } from "next/server";

  export const POST = async (request: Request) => {
    
  const body = await request.json();

  const user = await getServerSideSession();

  body.user_id = user.user.userId;

  const ret = await createCompanyConfig(body)

  return NextResponse.json({ ret });
}