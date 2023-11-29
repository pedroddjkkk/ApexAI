import { getAiConfigById } from "@/model/ai-config";
import AiConfigEditView from "@/sections/ai-config-edit-view";
import { AIConfig } from "@prisma/client";

export default async function page({ params: { id }, }: { params: { id: string; }; }) {

  const aiConfig = await getAiConfigById(id) as AIConfig;

  return (
    <AiConfigEditView aiConfig={aiConfig} />
  )
}