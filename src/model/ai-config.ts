import prisma from "@/lib/db";
import { AIConfig } from "@prisma/client";
import axios from "axios";
import { string } from "zod";

export type PropsCreateAiConfig = {
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
  faq: string;
  files: {
    name: string;
    url: string;
  }[];
};

export function createAiConfig(data: PropsCreateAiConfig): Promise<AIConfig> {
  return prisma.aIConfig.create({
    data: {
      ...data,
      files: {
        create: data.files,
      },
    },
  });
}

export function getAiConfigs(id: string): Promise<AIConfig[] | null> {
  return prisma.aIConfig.findMany({
    where: {
      user_id: id,
    },
  });
}

export function getAiConfig(id: string): Promise<AIConfig | null> {
  return prisma.aIConfig.findUnique({
    where: {
      id,
    },
  });
}

export function deleteAiConfig(id: string): Promise<AIConfig | null> {
  return prisma.aIConfig.delete({
    where: {
      id,
    },
  });
}

export function updateAiConfig(
  id: string,
  data: PropsCreateAiConfig
): Promise<AIConfig | null> {
  return prisma.aIConfig.update({
    where: {
      id,
    },
    data: {
      ...data,
      files: {
        create: data.files,
      },
    },
  });
}

export async function getAiConfigById(id: string): Promise<AIConfig | null> {
  const ret = await prisma.aIConfig.findUnique({
    where: {
      id,
    },
    include: {
      files: true,
    },
  });

  return ret;
}
