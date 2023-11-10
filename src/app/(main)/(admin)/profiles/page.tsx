
// ----------------------------------------------------------------------

import { getServerSideSession } from "@/lib/session";
import { getCompanysConfig } from "@/model/company-config";
import ProfilesView from "@/sections/profilesView";

export const metadata = {
  title: 'Perfis | AIpex',
};

export default async function ProfilesPage() {

  const user = await getServerSideSession();

  const empresas = await getCompanysConfig(user.user.userId);

  console.log("empresas", empresas);

  return <ProfilesView empresas={empresas} />;
}
