import prisma from "@/lib/db";
import { Company, Endereco, User } from "@prisma/client";

type PropsCreate = {
    user_id: string;
    name: string;
    razao_social: string;
    cnpj: string;
    inscricao_estadual: string;
    area_atividade: string;
    categoria_empresa: string;
    descricao: string;
    endereco: {
      cep: string;
      cidade: string;
      estado: string;
      rua: string;
      numero: string;
    }
}

export function createCompanyConfig(data: PropsCreate): Promise<Company> {
  return prisma.company.create({
    data: {
      ...data,
      endereco: {
        create: {
          ...data.endereco
        }
      }
    }
  });
}

export function getCompanysConfig(): Promise<Company[]> {
  return prisma.company.findMany({
    include: {
      endereco: true,
      users: true
    }
  })
}

export function deleteCompanyConfig(id: string): Promise<Company> {
  return prisma.company.delete({
    where: {
      id
    }
  })
}

type PropsUpdate = {
  name?: string;
  razao_social?: string;
  cnpj?: string;
  inscricao_estadual?: string;
  area_atividade?: string;
  categoria_empresa?: string;
  descricao?: string;
  endereco: any;
}

export function updateCompanyConfig(id: string, data: PropsUpdate): Promise<Company> {

  console.log("data", data);
  

  return prisma.company.update({
    where: {
      id
    },
    data: {
      ...data,
      endereco: {
        update: {
          where: {
            id: data.endereco.id
          },
          data: data.endereco
        }
      }
    }
  })
}

export type CompanyEndereco = {
  id: string;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  name: string;
  razao_social: string;
  cnpj: string;
  inscricao_estadual: string;
  area_atividade: string;
  categoria_empresa: string;
  descricao: string;
  endereco: {
    id: string;
    created_at: Date;
    updated_at: Date;
    company_config_id: string;
    cep: string;
    estado: string;
    cidade: string;
    numero: string;
    rua: string;
  }[];
  users: User[];
} 

export function getCompanysConfigById(id: string): Promise<any> {
  return prisma.company.findUnique({
    where: {
      id
    },
    include: {
      endereco: true
    }
  })
}