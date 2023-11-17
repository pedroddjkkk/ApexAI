import { getServerSideSession } from "@/lib/session";
import { createCompanyConfig, deleteCompanyConfig, getCompanysConfig, updateCompanyConfig } from "@/model/company-config";
import { NextResponse } from "next/server";

  export const POST = async (request: Request) => {
    
  const body = await request.json();

  const user = await getServerSideSession();

  if (!user) {
    return NextResponse.redirect("/login");
  }

  if (body.action === "delete") {
    const ret = await deleteCompanyConfig(body.id);
    return NextResponse.json({ ret });
  }

  if (body.action === "update") {
    delete body.action;
    const ret = await updateCompanyConfig(body.id, body);
    console.log("ret", ret);
    return NextResponse.json({ ret });
  }

  body.user_id = user.user.userId;

  const ret = await createCompanyConfig(body)

  return NextResponse.json({ ret });
}

export const GET = async (request: Request) => {
  const user = await getServerSideSession();

  if (!user) {
    return NextResponse.redirect("/login");
  }

  const ret = await getCompanysConfig();

  return NextResponse.json(ret);
}