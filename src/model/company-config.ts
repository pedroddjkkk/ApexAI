import prisma from "@/lib/db";
import { Company, Endereco } from "@prisma/client";

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