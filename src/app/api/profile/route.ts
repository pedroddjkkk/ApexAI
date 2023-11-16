import { auth } from "@/auth/lucia";
import { getServerSideSession } from "@/lib/session";
import { deleteProfile, getProfiles, getProfilesByCompanyId, updateProfile } from "@/model/profile";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: Request) => {
    
  const body = await request.json();

  const user = await getServerSideSession();

  if(!user.user) return NextResponse.json({ ret: "not found" });

  if (body.action === "delete") {
    const ret = await auth.deleteUser(body.id);
    return NextResponse.json({ ret });
  }

  if (body.action === "update") {
    delete body.action;
    const ret = await auth.updateUserAttributes(
      body.id,
      {
        username: body.username,
        email: body.email,
        role_id: body.role_id,
        company_id: body.company_id,
      }
    );
    return NextResponse.json({ ret });
  }

  return NextResponse.json({ ret: "not found" });
}

export const GET = async (request: NextRequest) => {
  
  const user = await getServerSideSession();

  if (!user.user) return NextResponse.json({ ret: "not found" });

  const ret = await getProfilesByCompanyId(user.user.company_id);

  return NextResponse.json(ret);
}