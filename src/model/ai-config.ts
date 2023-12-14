import prisma from "@/lib/db";
import { AIConfig } from "@prisma/client";
import path from "path";
import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";

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

export async function saveFiles(files: File[], id?: string) {
  const ret = [] as { name: string; url: string }[];

  await Promise.all(
    files.map(async (file) => {
      const name = `${uuidv4()}.${file.type.split("/")[1]}`;

      const destinationDirPath = path.join(process.cwd(), "public/files");

      const fileArrayBuffer = await file.arrayBuffer();

      if (!existsSync(destinationDirPath)) {
        await mkdir(destinationDirPath, { recursive: true });
      }

      await writeFile(
        path.join(destinationDirPath, name),
        Buffer.from(fileArrayBuffer)
      );

      ret.push({
        name: `${id ? id : ""}${file.name}`,
        url: `files/${name}`,
      });
    })
  );

  return ret;
}
