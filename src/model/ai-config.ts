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

export function createAiConfig(data: PropsCreate): Promise<AIConfig> {
  return prisma.aIConfig.create({
    data
  });
}

export function getAiConfigs(id: string): Promise<AIConfig[] | null> {
  return prisma.aIConfig.findMany({
    where: {
      user_id: id
    }
  });
}

export function getAiConfig(id: string): Promise<AIConfig | null> {
  return prisma.aIConfig.findUnique({
    where: {
      id
    }
  });
}

export function deleteAiConfig(id: string): Promise<AIConfig | null> {
  return prisma.aIConfig.delete({
    where: {
      id
    }
  });
}

export function updateAiConfig(id: string, data: PropsCreate): Promise<AIConfig | null> {
  return prisma.aIConfig.update({
    where: {
      id
    },
    data
  });
}

export function getAiConfigById( id: string ): Promise<AIConfig | null> {
  return prisma.aIConfig.findUnique({
    where: {
      id
    }
  });
}