import prisma from "@/lib/db";
import { Company, Role, User } from "@prisma/client";

type PropsCreate = {
  id: string;
  company_id: string | null;
  username: string;
  role_id: string | null;
  email: string;
}

export type getProfileRet = {
  id: string;
  company_id?: string | null;
  username: string;
  role_id?: string | null;
  email: string;
  company?: Company | null;
  role?: Role | null;
}

export function getProfiles(): Promise<getProfileRet[] | null> {
  return prisma.user.findMany({
    include: {
      company: true,
      role: true
    }
  });
}

export function getProfilesByCompanyId(company_id: string): Promise<getProfileRet[] | null> {
  return prisma.user.findMany({
    where: {
      company_id
    },
    include: {
      company: true,
      role: true
    }
  });
}

export function getProfile(id: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      id
    }
  });
}

export function deleteProfile(id: string): Promise<User | null> {
  return prisma.user.delete({
    where: {
      id
    }
  });
}

export function updateProfile(id: string, data: PropsCreate): Promise<User | null> {
  return prisma.user.update({
    where: {
      id
    },
    data
  });
}

export function getProfileById( id: string ): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      id
    }
  });
}