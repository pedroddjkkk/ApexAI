import prisma from "@/lib/db";
import { AIConfig } from "@prisma/client";

type PropsCreate = {
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
}

export function create(data: PropsCreate): Promise<AIConfig> {
  return prisma.aIConfig.create({
    data
  });
}