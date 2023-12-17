import { getServerSideSession } from "@/lib/session";
import { getAiConfigs } from "@/model/ai-config";
import AiVendaView from "@/sections/ai-venda/ai-venda-view";
import { AIConfig } from "@prisma/client";

export default async function page() {

  const user = await getServerSideSession();

  const AiConfigs = await getAiConfigs(user.user.userId, "V") as AIConfig[];

  return (
    <AiVendaView AiConfigs={AiConfigs} />
  )
}