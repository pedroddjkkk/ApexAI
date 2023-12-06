import { getServerSideSession } from "@/lib/session";
import { createAiConfig, deleteAiConfig, getAiConfigs, updateAiConfig } from "@/model/ai-config";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { existsSync } from "fs";
import fs from "fs/promises";
import { array } from "zod";

type Body = {
  id?: string;
  name: string;
  sistema: {
    id: string;
    quest: string;
    response: string;
  }[];
  max_tokens: number;
  model: string;
  temperature: number;
  stop: string;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  faq: {
    id: string;
    quest: string;
    response: string | File;
  }[];
  files: {
    name: string;
    url: string;
  }[];
  action?: string;
  user_id?: string;
};

export const POST = async (request: NextRequest) => {

  const form = await request.formData() as FormData;
  // console.log(form);


  // recebe um array de files
  const files = form.getAll("file") as File[];
  const user = await getServerSideSession();

  saveFile(files)

  // const body = {
  //   name: form.get("name") as string,
  //   sistema: JSON.parse(form.get("sistema") as string),
  //   max_tokens: Number(form.get("max_tokens")),
  //   model: form.get("model") as string,
  //   temperature: Number(form.get("temperature")),
  //   stop: form.get("stop") as string,
  //   top_p: Number(form.get("top_p")),
  //   frequency_penalty: Number(form.get("frequency_penalty")),
  //   presence_penalty: Number(form.get("presence_penalty")),
  //   faq: JSON.parse(form.get("faq") as string),
  //   files: saveFile(files),
  //   action: form.get("action") as string,
  //   user_id: user.user.userId,
  // } as Body;

  // console.log(body);
  // if (!user.user) return NextResponse.json({ ret: "not found" });

  // if (!files) {
  //   return NextResponse.json({}, { status: 400 });
  // }

  // if (body.action === "delete" && body.id) {
  //   const ret = await deleteAiConfig(body.id.toString());
  //   return NextResponse.json({ ret });
  // }

  // if (body.action === "update" && body.id) {
  //   delete body.action;
  //   const ret = await updateAiConfig(body.id.toString(), body);
  //   return NextResponse.json({ ret });
  // }

  // console.log("body",body);

  // console.log("file",body.file);
  // delete body.file;

  // const ret = await createAiConfig(body)

  return NextResponse.json({});
}

export const GET = async (request: NextRequest) => {
  const user = await getServerSideSession();

  if (!user.user) return NextResponse.json({ ret: "not found" });

  const ret = await getAiConfigs(user.user.userId);

  return NextResponse.json(ret);
}

export  function saveFile(files: File[]) {

  var ret = Array( files.length ).fill({
    name: "",
    url: ""
  });

  files.map( async (file) => {

    const destinationDirPath = path.join(process.cwd(), "files");

    const fileArrayBuffer = await file.arrayBuffer();

    if (!existsSync(destinationDirPath)) {
      fs.mkdir(destinationDirPath, { recursive: true });
    }
    fs.writeFile(
      path.join(destinationDirPath, `${Date.now()} - ${file.name}`),
      Buffer.from(fileArrayBuffer)
    );
    
    return({
      name:  `${Date.now()} - ${file.name}`,
      url: `files/${file.name}`
    })
  })

      console.log("ret", ret);
  
      return ret;
    

}