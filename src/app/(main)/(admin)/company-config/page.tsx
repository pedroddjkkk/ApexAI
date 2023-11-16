import { getServerSideSession } from "@/lib/session";
import { getAiConfigsByCompanyId } from "@/model/ai-config";
import AiConfigView from "@/sections/ai-config-view";
import { AIConfig } from "@prisma/client";

export default async function page() {

  const user = await getServerSideSession();

  const AiConfigs = await getAiConfigsByCompanyId(user.user.company_id) as AIConfig[];

  return (
    <AiConfigView AiConfigs={AiConfigs} />
  )
}