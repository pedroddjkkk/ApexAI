import { getServerSideSession } from "@/lib/session";
import { NextResponse } from "next/server";
import { createRole } from "../../../model/role";

  export const POST = async (request: Request) => {
    
  const body = await request.json();

  const user = await getServerSideSession();

  if (!user) {
    return NextResponse.redirect("/login");
  }
  
  // body.user_id = user.user.userId;

  const ret = await createRole(body)

  return NextResponse.json({ ret });
}