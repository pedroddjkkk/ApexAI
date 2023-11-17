import { getCompanysConfigById } from "@/model/company-config";
import CompanyConfigEdit from "@/sections/company-config-edit-view";


export default async function page({ params: { id }, }: { params: { id: string; }; }) {
  const data = await getCompanysConfigById(id);
  return (
    <CompanyConfigEdit data={data} />
  )
}