import { getProfileRet, getProfiles } from "@/model/profile";
import ProfilesView from "@/sections/profiles-view";
import { User, } from "@prisma/client";

export const metadata = {
  title: 'Perfis | AIpex',
};

export default async function ProfilesPage() {

  const profiles = await getProfiles() as getProfileRet[];

  return <ProfilesView User={profiles} />;
}
