'use client';
import React, { useEffect, useState } from 'react';

// components
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combobox';

// hook form
import { useForm } from 'react-hook-form';
import { createAiConfigSchema } from '@/lib/schema/ai-config';

// zod
import { zodResolver } from '@hookform/resolvers/zod';

// axios
import axios from 'axios';
import { Company } from '@prisma/client';

// types
type Inputs = {
  name: string;
  sistema: string;
  max_tokens: number;
  model: string;
  temperature: number;
  stop: string;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
};

type Props = {
  empresas: Company[];
};

export default function ProfilesView({ empresas }: Props) {

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createAiConfigSchema),
    defaultValues: {

    }
  });

  const onSubmit = async (data: Inputs) => {
    const ret = await axios.post('/api/ai-config', data);
    console.log(ret);
  };

  const [advanced, setAdvanced] = useState(false);

  return (
    <main>
      <div className='px-8'>
        <h1 className='font-bold text-3xl'>Cadastro de Usuario</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col px-[calc(8px+1rem)] lg:px-28 xl:px-32 mt-4 gap-y-8 py-8 w-full'>
        <div className='
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8'>
          <div>
            <Combobox
              placeholder='Empresa'
              options={empresas.map((empresa) => {
                return {
                  value: empresa.id,
                  label: empresa.name,
                };
              })}
              onSelect={(value) => {
                console.log(value);

              }}
            />
          </div>
        </div>
        <div className='
        grid md:grid-cols-2 grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8
        gap-y-8 '>
          <div />
          <Button
            type='submit'
            className='w-full bg-primary-500 hover:bg-secondary-500'
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </main>
  );
}

