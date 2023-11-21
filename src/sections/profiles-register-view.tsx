'use client';
import React, { useEffect, useState } from 'react';

// components
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combobox';

// hook form
import { useForm } from 'react-hook-form';

// zod
import { zodResolver } from '@hookform/resolvers/zod';

// axios
import axios from 'axios';
import { Company, Views } from '@prisma/client';
import { InputLabel } from '@/components/inputs/imput-label';
import { Input } from '@/components/ui/input';
import { createUser } from '@/lib/schema/createUser';
import { InputPassword } from '@/components/ui/inputPassword';
import { Undo2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// types
type Inputs = {
  name: string;
  company_id: string;
  password: string;
  confirmPassword: string;
  role_id: string;
  username: string;
  email: string;
};

type Props = {
  empresas: Company[];
  roles: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    views: Views[];
  }[];
};

export default function ProfilesRegisterView({ empresas, roles }: Props) {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createUser),
    defaultValues: {
      company_id: '',
      password: '',
      confirmPassword: '',
      role_id: '',
      username: '',
      email: '',
    }
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = async (data: Inputs) => {
    const ret = await axios.post('/api/auth/signupInterno', data);
    if (ret.data.field) {
      const field = ret.data.field as "company_id" | "role_id" | "username" | "email" | "password" | "confirmPassword" | "name" | "root";
      setError(`${field}`, {
        type: 'manual',
        message: `${ret.data.message}`,
      });
      return;
    }
    if (ret.status === 200) {
      router.back();
    }
  };

  return (
    <main>
      <div className='flex 
      lg:flex-row 
      md:flex-row 
      flex-col 
      justify-between gap-4 text-center px-[calc(8px+1rem)] lg:px-28 xl:px-32'>
        <h1 className='lg:text-4xl md:text-4xl font-bold text-2xl'>Cadastro de Usuario</h1>
        <Link href='/profiles'>
          <Button className='bg-primary-500 hover:bg-secondary-500 text-white font-bold py-2 px-4 rounded-full items-center w-full'>
            <Undo2 size={24} />
            Voltar
          </Button>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col px-[calc(8px+1rem)] lg:px-28 xl:px-32 mt-4 gap-y-8 py-8 w-full'>
        <div className='
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8'>
          <InputLabel
            label='Empresa'
            description='Selecione a empresa do usuario.'
          >
            <Combobox
              placeholder='Empresa'
              options={empresas.map((empresa) => {
                return {
                  value: empresa.id,
                  label: empresa.name,
                };
              })}
              onSelect={(value) => {
                setValue('company_id', value);
              }}
            />
            {/* errors will return when field validation fails  */}
            {errors.company_id && <span className='text-danger-500'>{errors.company_id.message}</span>}
          </InputLabel>
          <InputLabel
            label='Permissão'
            description='Selecione a permissão do usuario.'
          >
            <Combobox
              placeholder='Permissão'
              options={roles.map((empresa) => {
                return {
                  value: empresa.id,
                  label: empresa.name,
                };
              })}
              onSelect={(value) => {
                setValue('role_id', value);
              }}
            />
            {/* errors will return when field validation fails  */}
            {errors.role_id && <span className='text-danger-500'>{errors.role_id.message}</span>}
          </InputLabel>
          <InputLabel
            label='Nome Usuario'
            description='Digite o nome de usuario.'
          >
            <Input {...register("username", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.username && <span className='text-danger-500'>{errors.username.message}</span>}
          </InputLabel>
          <InputLabel
            label='Email'
            description='Digite o email do usuario.'
          >
            <Input {...register("email", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.email && <span className='text-danger-500'>{errors.email.message}</span>}
          </InputLabel>
          <InputLabel
            label='Senha'
            description='Digite a senha do usuario.'
          >
            <InputPassword {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.password && <span className='text-danger-500'>{errors.password.message}</span>}
          </InputLabel>
          <InputLabel
            label='Confirmar Senha'
            description='Digite a senha do usuario novamente.'
          >
            <InputPassword {...register("confirmPassword", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.confirmPassword && <span className='text-danger-500'>{errors.confirmPassword.message}</span>}
          </InputLabel>
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
    </main >
  );
}

