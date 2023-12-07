import { getServerSideSession } from "@/lib/session";
import {
  PropsCreateAiConfig,
  createAiConfig,
  getAiConfigs,
} from "@/model/ai-config";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { existsSync } from "fs";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

type PropsForm = {
  user_id: string;
  name: string;
  sistema: string;
  max_tokens: number;
  model: string;
  temperature: number;
  stop: string;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  faq:
    | {
        id: string;
        quest: string;
        response: string | File;
      }[]
    | string;
  files: {
    name: string;
    url: string;
  }[];
};

export const POST = async (request: NextRequest) => {
  const form = (await request.formData()) as FormData;

  const data = JSON.parse(form.get("data") as string) as PropsForm;

  const filesFaq = form.get("fileFaq") as File;

  // recebe um array de files
  const files = form.getAll("file") as File[];
  const user = await getServerSideSession();

  const faqFiles = await saveFiles([filesFaq]);

  console.log("faqFiles", faqFiles);

  data.faq =
    typeof data.faq !== "string"
      ? data.faq
          .map((item) => {
            if (faqFiles.find((file) => file.name === item.response)) {
              const file = faqFiles.find((file) => file.name === item.response);
              item.response = file?.url;
            }
            return `${item.quest}: ${item.response}`;
          })
          .join("\n")
          .trim()
      : data.faq;

  data.files = await saveFiles(files);
  data.user_id = user.user.userId;

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

  const ret = await createAiConfig({
    ...data,
    faq: data.faq,
  } as PropsCreateAiConfig);

  return NextResponse.json({});
};

export const GET = async (request: NextRequest) => {
  const user = await getServerSideSession();

  if (!user.user) return NextResponse.json({ ret: "not found" });

  const ret = await getAiConfigs(user.user.userId);

  return NextResponse.json(ret);
};

export async function saveFiles(files: File[]) {
  const ret = [] as any[];

  await Promise.all(
    files.map(async (file) => {
      // pegas  typo da / para frente do file (application\pdf)
      const name = `${uuidv4()}.${file.type.split("/")[1]}`;

      const destinationDirPath = path.join(process.cwd(), "files");

      const fileArrayBuffer = await file.arrayBuffer();

      if (!existsSync(destinationDirPath)) {
        fs.mkdir(destinationDirPath, { recursive: true });
      }
      await fs.writeFile(
        path.join(destinationDirPath, name),
        Buffer.from(fileArrayBuffer)
      );

      ret.push({
        name: file.name,
        url: `files/${name}`,
      });
    })
  );

  console.log("ret", ret);

  return ret;
}
