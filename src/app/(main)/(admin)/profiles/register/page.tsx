
// ----------------------------------------------------------------------

import { getServerSideSession } from "@/lib/session";
import { getCompanysConfig } from "@/model/company-config";
import { getRoles } from "@/model/role";
import ProfilesRegisterView from "@/sections/profiles-register-view";
import { Views } from "@prisma/client";

export const metadata = {
  title: 'Perfis | AIpex',
};

export default async function ProfilesPage() {

  const user = await getServerSideSession();

  const empresas = await getCompanysConfig(user.user.userId);

  const roles = await getRoles() as {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    views: Views[];
  }[];

  return <ProfilesRegisterView empresas={empresas} roles={roles} />;
}
