'use client';
import React from 'react';

// hook form
import { useForm } from 'react-hook-form';

// components
import { Textarea } from '@/components/ui/textarea';
import { InputLabel } from '@/components/inputs/imput-label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// zod
import { zodResolver } from '@hookform/resolvers/zod';
import { createCompanyConfigSchema } from '@/lib/schema/company-config';

// axius 
import axios from 'axios';
import { type } from 'os';
import { Company } from '@prisma/client';
import { CompanyEndereco } from '@/model/company-config';
import Link from 'next/link';
import { Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

// types
type Inputs = {
  id: string;
  name: string;
  razao_social: string;
  cnpj: string;
  inscricao_estadual: string;
  area_atividade: string;
  categoria_empresa: string;
  descricao: string;
  endereco: {
    id: string;
    cep: string;
    estado: string;
    endereco: string;
    cidade: string;
    numero: string;
    rua: string;
  };
};

type Props = {
  data: CompanyEndereco
};

export default function CompanyConfigEdit({ data }: Props) {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createCompanyConfigSchema),
    defaultValues: {
      id: data?.id,
      name: data?.name,
      razao_social: data?.razao_social,
      cnpj: data?.cnpj,
      inscricao_estadual: data?.inscricao_estadual,
      area_atividade: data?.area_atividade,
      categoria_empresa: data?.categoria_empresa,
      descricao: data?.descricao,
      endereco: {
        id: data?.endereco[0].id,
        cep: data?.endereco[0].cep,
        estado: data?.endereco[0].estado,
        cidade: data?.endereco[0].cidade,
        numero: data?.endereco[0].numero,
        rua: data?.endereco[0].rua,
      },
    }
  });

  const onSubmit = async (data: Inputs) => {
    const ret = await axios.post('/api/company-config', {
      ...data,
      action: 'update'
    });
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
        <h1 className='lg:text-4xl md:text-4xl font-bold text-2xl'>Edição de Empresa</h1>
        <Link href='/company-config'>
          <Button className='bg-primary-500 hover:bg-secondary-500 text-white font-bold py-2 px-4 rounded-full items-center w-full'>
            <Undo2 size={24} />
            Voltar
          </Button>
        </Link>
      </div>
      <form className='flex flex-col px-[calc(8px+1rem)] lg:px-28 xl:px-32 mt-4 gap-y-8 py-8 ' onSubmit={handleSubmit(onSubmit)}>
        <div className='
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8'>
          <InputLabel
            label='Nome da Empresa'
          >
            <Input {...register("name", { required: true })} placeholder='Nome' />
            {/* errors will return when field validation fails  */}
            {errors.name && <span className='text-danger-500'>{errors.name.message}</span>}
          </InputLabel>
          <InputLabel
            label='Razao Social'
          >
            <Input {...register("razao_social", { required: true })} placeholder='Razao social' />
            {/* errors will return when field validation fails  */}
            {errors.razao_social && <span className='text-danger-500'>{errors.razao_social.message}</span>}
          </InputLabel>
          <InputLabel
            label='CNPJ'
          >
            <Input {...register("cnpj", { required: true })} placeholder='CNPJ' />
            {/* errors will return when field validation fails  */}
            {errors.cnpj && <span className='text-danger-500'>{errors.cnpj.message}</span>}
          </InputLabel>
          <InputLabel
            label='Inscrição Estadual'
          >
            <Input {...register("inscricao_estadual", { required: true })} placeholder='Inscrição estadual' />
            {/* errors will return when field validation fails  */}
            {errors.inscricao_estadual && <span className='text-danger-500'>{errors.inscricao_estadual.message}</span>}
          </InputLabel>
          <InputLabel
            label='Area de Atividade'
          >
            <Input {...register("area_atividade", { required: true })} placeholder='Area de atividade' />
            {/* errors will return when field validation fails  */}
            {errors.area_atividade && <span className='text-danger-500'>{errors.area_atividade.message}</span>}
          </InputLabel>
          <InputLabel
            label='Categoria da Empresa'
            description='MEI, ME, EPP, EIRELI, LTDA, S.A'
          >
            <Input {...register("categoria_empresa", { required: true })} placeholder='Categoria da empresa' />
            {/* errors will return when field validation fails  */}
            {errors.categoria_empresa && <span className='text-danger-500'>{errors.categoria_empresa.message}</span>}
          </InputLabel>
        </div>
        <InputLabel
          label='Descrição da Empresa'
        >
          <Textarea className='h-[200px]'
            placeholder='Conte um pouco sobre a empresa.'
            {...register("descricao", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.descricao && <span className='text-danger-500'>{errors.descricao.message}</span>}
        </InputLabel>
        <div className='
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8
        gap-y-8'>
          <InputLabel
            label='CEP'
          >
            <Input {...register("endereco.cep", { required: true })} placeholder='CEP' />
            {/* errors will return when field validation fails  */}
            {errors.endereco?.cep && <span className='text-danger-500'>{errors.endereco?.cep.message}</span>}
          </InputLabel>
          <InputLabel
            label='Estado'
          >
            <Input {...register("endereco.estado", { required: true })} placeholder='Estado' />
            {/* errors will return when field validation fails  */}
            {errors.endereco?.estado && <span className='text-danger-500'>{errors.endereco?.estado.message}</span>}
          </InputLabel>
          <InputLabel
            label='Cidade'
          >
            <Input {...register("endereco.cidade", { required: true })} placeholder='Cidade' />
            {/* errors will return when field validation fails  */}
            {errors.endereco?.cidade && <span className='text-danger-500'>{errors.endereco?.cidade.message}</span>}
          </InputLabel>
          <InputLabel
            label='Numero'
          >
            <Input {...register("endereco.numero", { required: true })} placeholder='Numero' />
            {/* errors will return when field validation fails  */}
            {errors.endereco?.numero && <span className='text-danger-500'>{errors.endereco?.numero.message}</span>}
          </InputLabel>
          <InputLabel
            label='Rua'
          >
            <Input {...register("endereco.rua", { required: true })} placeholder='Rua' />
            {/* errors will return when field validation fails  */}
            {errors.endereco?.rua && <span className='text-danger-500'>{errors.endereco?.rua.message}</span>}
          </InputLabel>
          <div />
          <div />
          <Button
            className='w-full bg-primary-500 hover:bg-secondary-500'
          >
            Editar
          </Button>
        </div>
      </form>
    </main >
  );
}
