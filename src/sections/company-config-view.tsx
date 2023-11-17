'use client';
import React, { useEffect } from 'react';

// components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Company } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Delete, Edit, Plus } from 'lucide-react';
import Link from 'next/link';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import axios from 'axios';
import { formatDate } from '@/lib/utils';
import { CompanyEndereco } from '@/model/company-config';

type Props = {
  Data: CompanyEndereco[];
};

export default function CompanyConfig({ Data }: Props) {

  const [data, setData] = React.useState(Data);

  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    // update list
    const ret = await axios.get('/api/company-config');
    setData(ret.data);
  }

  const handleDelete = async (id: string) => {
    // delete
    const ret = await axios.post(`/api/company-config`,
      { id: id, action: 'delete' }
    ).then((e) => {
      if (e.status === 200) {
        // update list
        updateData();
      }
    });
  }
  return (
    <main className='px-[calc(8px+1rem)] lg:px-28 xl:px-32 max-h-[calc(100vh-100px)] flex flex-col'>
      <div className='flex 
      lg:flex-row 
      md:flex-row 
      flex-col 
      justify-between gap-4 text-center '>
        <h1 className='lg:text-4xl md:text-4xl font-bold text-2xl'>Empresas</h1>
        <Link href='/company-config/register'>
          <Button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full items-center w-full'>
            <Plus size={24} />
            Criar
          </Button>
        </Link>
      </div>
      <div className='border-2 border-gray-200 rounded-lg mt-4'>
        <Accordion type="single" collapsible>
          <Command>
            <CommandInput placeholder={"Select..."} className='text-base' />
            <CommandEmpty>Não encontrado.</CommandEmpty>
            <CommandGroup className='p-0'>
              {data.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.name}
                  className='p-0 m-0'
                >
                  <AccordionItem
                    className='w-full'
                    value={item.id}
                    key={item.id}>
                    <AccordionTrigger className='px-4 text-xl'>
                      {item.name}
                    </AccordionTrigger>
                    <AccordionContent className='px-4'>
                      <div className='flex justify-between'>
                        <div className='flex flex-col text-neutral-500'>
                          <span><span className='text-neutral-950'>Criado em:</span>{formatDate(item.created_at)}</span>
                          <span><span className='text-neutral-950'>Editado em:</span> {formatDate(item.updated_at)}</span>
                          <span><span className='text-neutral-950'>CNPJ:</span> {item.cnpj}</span>
                          <span><span className='text-neutral-950'>Inscrição Estadual:</span> {item.inscricao_estadual}</span>
                          <span><span className='text-neutral-950'>Área de Atividade:</span> {item.area_atividade}</span>
                          <span><span className='text-neutral-950'>Razão Social:</span> {item.razao_social}</span>
                          {item.endereco && <span><span className='text-neutral-950'>Endereço:</span> {item.endereco[0].rua}, {item.endereco[0].numero}, {item.endereco[0].cidade}, {item.endereco[0].estado}</span>}
                        </div>
                        <div className='gap-4 flex flex-col lg:flex-row mg:flex-row'>
                          <Link href={`/company-config/edit/${item.id}`}>
                            <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full items-center flex gap-2'>
                              <Edit size={24} />
                              Editar
                            </Button>
                          </Link>
                          <Button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full items-center flex gap-2'
                            onClick={() => handleDelete(item.id)}
                          >
                            <Delete size={24} />
                            Excluir
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </Accordion>
      </div>
    </main >
  );
}

