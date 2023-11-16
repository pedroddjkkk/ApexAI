import { getServerSideSession } from "@/lib/session";
import { getCompanysConfig } from "@/model/company-config";
import { getProfileById } from "@/model/profile";
import { getRoles } from "@/model/role";
import ProfilesEditView from "@/sections/profiles-edit-view";
import { AIConfig, User, Views } from "@prisma/client";

export default async function page({ params: { id }, }: { params: { id: string; }; }) {

  const user = await getServerSideSession();

  const profile = await getProfileById(id) as User;

  const empresas = await getCompanysConfig(user.user.userId);

  const roles = await getRoles() as {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    views: Views[];
  }[];

  return <ProfilesEditView empresas={empresas} roles={roles} user={profile} />;
}