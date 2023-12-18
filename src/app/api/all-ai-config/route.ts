import { getServerSideSession } from "@/lib/session";
import {
  PropsCreateAiConfig,
  createAiConfig,
  deleteAiConfig,
  getAiConfigs,
  getAllAiConfigs,
  saveFiles,
  updateAiConfig,
} from "@/model/ai-config";
import { NextRequest, NextResponse } from "next/server";

type PropsForm = {
  id?: string;
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
  action?: string;
};

export const GET = async (request: NextRequest) => {
  const user = await getServerSideSession();

  if (!user.user) return NextResponse.json({ ret: "not found" });

  const ret = await getAllAiConfigs(user.user.userId);

  return NextResponse.json(ret);
};
