'use client';
import React, { useEffect } from 'react';

// components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AIConfig } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Delete, Edit, Plus } from 'lucide-react';
import Link from 'next/link';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import axios from 'axios';
import { formatDate } from '@/lib/utils';

type Props = {
  AiConfigs: AIConfig[];
};

export default function AiConfigView({ AiConfigs }: Props) {

  const [aiConfigs, setAiConfigs] = React.useState<AIConfig[]>(AiConfigs);

  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    // update list
    const ret = await axios.get('/api/ai-config');
    setAiConfigs(ret.data);
  }

  const handleDelete = async (id: string) => {
    // delete
    const ret = await axios.post(`/api/ai-config`,
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
        <h1 className='lg:text-4xl md:text-4xl font-bold text-2xl'>Configurações de IA</h1>
        <Link href='/ai-config/register'>
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
              {aiConfigs.map((AiConfig) => (
                <CommandItem
                  key={AiConfig.id}
                  value={AiConfig.name}
                  className='p-0 m-0'
                >
                  <AccordionItem
                    className='w-full'
                    value={AiConfig.id}
                    key={AiConfig.id}>
                    <AccordionTrigger className='px-4 text-xl'>
                      {AiConfig.name}
                    </AccordionTrigger>
                    <AccordionContent className='px-4'>
                      <div className='flex justify-between'>
                        <div className='flex flex-col text-neutral-500'>
                          <span><span className='text-neutral-950'>Criado em:</span>{formatDate(AiConfig.created_at)}</span>
                          <span><span className='text-neutral-950'>Editado em:</span> {formatDate(AiConfig.updated_at)}</span>
                          <span><span className='text-neutral-950'>Model:</span> {AiConfig.model}</span>
                          <span><span className='text-neutral-950'>Max Tokens:</span> {AiConfig.max_tokens}</span>
                          <span><span className='text-neutral-950'>Frequencia:</span> {AiConfig.frequency_penalty}</span>
                          <span><span className='text-neutral-950'>Presença:</span> {AiConfig.presence_penalty}</span>
                          <span><span className='text-neutral-950'>Temperatura:</span> {AiConfig.temperature}</span>
                          <span><span className='text-neutral-950'>Qualidade:</span> {AiConfig.top_p}</span>
                          <span><span className='text-neutral-950'>Black List:</span> {AiConfig.stop}</span>
                        </div>
                        <div className='gap-4 flex flex-col lg:flex-row mg:flex-row'>
                          <Link href={`/ai-config/edit/${AiConfig.id}`}>
                            <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full items-center flex gap-2'>
                              <Edit size={24} />
                              Editar
                            </Button>
                          </Link>
                          <Button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full items-center flex gap-2'
                            onClick={() => handleDelete(AiConfig.id)}
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

