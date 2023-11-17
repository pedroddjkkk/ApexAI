import { getServerSideSession } from "@/lib/session";
import { getAiConfigsByCompanyId } from "@/model/ai-config";
import { getCompanysConfig } from "@/model/company-config";
import CompanyConfig from "@/sections/company-config-view";
import { Endereco } from "@prisma/client";
import { CompanyEndereco } from "@/model/company-config";

export default async function page() {

  const user = await getServerSideSession();

  const data = await getCompanysConfig() as CompanyEndereco[];

  return (
    <CompanyConfig Data={data} />
  )
}