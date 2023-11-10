import prisma from "@/lib/db";
import { Role, Views, } from "@prisma/client";


type PropsCreate = {
  name: string;
  views: {
    name: string;
    create: boolean;
    edit: boolean;
    delete: boolean;
    view: boolean;
  }[];
}

export function createRole(data: PropsCreate): Promise<Role> {
  return prisma.role.create({
    data: {
      name: data.name,
      views: {
        create: data.views.map(view => ({
          name: view.name,
          create: view.create,
          edit: view.edit,
          delete: view.delete,
          view: view.view,
        }))
      }
    }
  });
}