import { getAiConfigById } from "@/model/ai-config";
import AiConfigEditView, { AIConfigInFiles } from "@/sections/ai-config-edit-view";

export default async function page({ params: { id }, }: { params: { id: string; }; }) {

  const aiConfig = await getAiConfigById(id) as AIConfigInFiles;

  console.log("aiConfig", aiConfig);

  return (
    <AiConfigEditView aiConfig={aiConfig} />
  )
}