'use client';
import React, { useEffect, useState } from 'react';

// components
import { Button } from '@/components/ui/button';
import { InputLabel } from '@/components/inputs/imput-label';
import { Input } from '@/components/ui/input';
import { Table, TableCell, TableRow } from '@/components/ui/table';
import { TableBody, TableHead } from '@tremor/react';
import { Checkbox } from '@/components/ui/checkbox';

// hook form
import { set, useForm } from 'react-hook-form';
import { roleSchema } from '@/lib/schema/role';

// zod
import { zodResolver } from '@hookform/resolvers/zod';

// axios
import axios from 'axios';

// types
type Inputs = {
  name: string;
  views: {
    name: string;
    create: boolean;
    edit: boolean;
    delete: boolean;
    view: boolean;
  }[];
};

const views = [
  {
    name: 'Cadastro da Empresa',
  },
  {
    name: 'Perfis',
  },
  {
    name: 'AIs Configs ',
  },
  {
    name: 'Whatsapp Configs',
  },
]

type Props = {
};

export default function RoleView({ }: Props) {

  const viewsRole = views.map((view) => {
    return {
      name: view.name,
      create: false,
      edit: false,
      delete: false,
      view: false,
    }
  })

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      name: '',
      views: viewsRole,
    }
  });

  const onSubmit = async (data: Inputs) => {
    const ret = await axios.post('/api/role', data);
  };

  const onCheckedChangeCheckbox = (e: string | boolean, view: { name: string }, type: string) => {
    const values = getValues().views.filter((v) => v.name !== view.name);
    const selectedValue = getValues().views.find((v) => v.name === view.name);
    if (!selectedValue) return;
    setValue(`views`, [...values, { ...selectedValue, [type]: e }]);
  }

  return (
    <main>
      <div className='px-8'>
        <h1 className='font-bold text-3xl'>Cadastro de Permição</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col px-[calc(8px+1rem)] lg:px-28 xl:px-32 mt-4 gap-y-8 py-8 w-full'>
        <div className='flex flex-col justify-center items-center gap-16'>
          <div className='w-full lg:w-1/2 xl:w-1/2 md:w-1/2'>
            <InputLabel
              label='Nome da Empresa'
            >
              <Input {...register("name", { required: true })} placeholder='Nome' />
              {/* errors will return when field validation fails  */}
              {errors.name && <span className='text-danger-500'>{errors.name.message}</span>}
            </InputLabel>
          </div>
          <div className='w-full border-solid border-neutral-200 border-[1px] rounded-md'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className='w-4/12'>
                    Telas
                  </TableCell>
                  <TableCell className='w-2/12 text-center'>
                    Create
                  </TableCell>
                  <TableCell className='w-2/12 text-center'>
                    Edit
                  </TableCell>
                  <TableCell className='w-2/12 text-center'>
                    Delete
                  </TableCell>
                  <TableCell className='w-2/12 text-center'>
                    View
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {views.map((view, index) => (
                  <TableRow key={view.name}>
                    <TableCell>
                      {view.name}
                    </TableCell>
                    <TableCell className='px-0'>
                      <Checkbox className='w-[25px] h-[25px] mx-[calc(50%-25px)]'
                        onCheckedChange={(e) => onCheckedChangeCheckbox(e, view, "create")} />
                    </TableCell>
                    <TableCell className='px-0'>
                      <Checkbox className='w-[25px] h-[25px] mx-[calc(50%-25px)]'
                        onCheckedChange={(e) => onCheckedChangeCheckbox(e, view, "edit")} />
                    </TableCell>
                    <TableCell className='px-0'>
                      <Checkbox className='w-[25px] h-[25px] mx-[calc(50%-25px)]'
                        onCheckedChange={(e) => onCheckedChangeCheckbox(e, view, "delete")} />
                    </TableCell>
                    <TableCell className='px-0'>
                      <Checkbox className='w-[25px] h-[25px] mx-[calc(50%-25px)]'
                        onCheckedChange={(e) => onCheckedChangeCheckbox(e, view, "view")} />
                    </TableCell>
                  </TableRow>))}
              </TableBody>
            </Table>
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

