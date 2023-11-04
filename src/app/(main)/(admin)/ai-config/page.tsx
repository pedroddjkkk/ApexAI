'use client';
import React, { useState } from 'react';

// components
import { ImputLabel } from '@/components/inputs/imput-label';
import { Button } from '@/components/ui/button';
import SwitchLabel from '@/components/inputs/switch-label';
import { Input } from '@/components/ui/input';

// hook form
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createAiConfigSchema } from '@/lib/schema/ai-config';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';

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

export default function AiConfig() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createAiConfigSchema),
    defaultValues: {
      name: '',
      sistema: '',
      max_tokens: 0,
      model: '',
      temperature: 0,
      stop: '',
      top_p: 0,
      frequency_penalty: 0,
      presence_penalty: 0,
    }
  })

  const onSubmit = async (data: Inputs) => {
    const ret = await axios.post('/api/ai-config', data);
    console.log(ret);
  };

  const [advanced, setAdvanced] = useState(false);

  return (
    <main>
      <div className='px-8'>
        <h1 className='font-bold text-3xl'>Configuração AIs</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col px-[calc(8px+1rem)] lg:px-28 xl:px-32 mt-4 gap-y-8 py-8'>
        <div className='
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8'>
          <div>
            <ImputLabel
              label='Nome da AI'
              description='Nomeie sua AI.'
            >
              <Input {...register("name", { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.name && <span className='text-danger-500'>{errors.name.message}</span>}
            </ImputLabel>
          </div>
        </div>
        <ImputLabel
          label='Comfiguração AI'
          description='Este será o contexto que a AI usara para interagir.'
        >
          <Textarea className='h-[200px]'
            placeholder='System'
            {...register("sistema", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.sistema && <span className='text-danger-500'>{errors.sistema.message}</span>}
        </ImputLabel>
        <SwitchLabel
          label="Configurações avançadas"
          value={advanced}
          onChange={(e) => {
            setAdvanced(e);
          }}
        />
        <div style={{ display: advanced ? 'grid' : 'none' }}
          className='
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8
        gap-y-8'>
          <ImputLabel
            label='Modelo'
            description='Escolha o modelo de AI que deseja usar, este parametro reflete no preço por tokens'
          >
            <Input {...register("model", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.model && <span className='text-danger-500'>{errors.model.message}</span>}
          </ImputLabel>
          <ImputLabel
            label='Max Tokens Atendimento'
            description='Limite de tamanho da resposta para o cliente. '
          >
            <Input {...register("max_tokens", { required: true, valueAsNumber: true })} type='number'
            />
            {/* errors will return when field validation fails  */}
            {errors.max_tokens && <span className='text-danger-500'>{errors.max_tokens.message}</span>}
          </ImputLabel>
          <ImputLabel
            label='Temperatura AI'
            description=' Controla a aleatoriedade das respostas geradas.'
          >
            <Input {...register("temperature", { required: true, valueAsNumber: true })} type='number' />
            {/* errors will return when field validation fails  */}
            {errors.temperature && <span className='text-danger-500'>{errors.temperature.message}</span>}
          </ImputLabel>
          <ImputLabel
            label='Qualidade'
            description='Isso permite que você gere respostas de alta qualidade, eliminando tokens menos relevantes.'
          >
            <Input {...register("top_p", { required: true, valueAsNumber: true })} type='number' />
            {/* errors will return when field validation fails  */}
            {errors.top_p && <span className='text-danger-500'>{errors.top_p.message}</span>}
          </ImputLabel>
          <ImputLabel
            label='Black List'
            description='Permite que você especifique uma string para indicar ao modelo quando parar a geração da resposta, separe as palavras com uma “,”.'
          >
            <Input {...register("stop", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.stop && <span className='text-danger-500'>{errors.stop.message}</span>}
          </ImputLabel>
          <ImputLabel
            label='Presença'
            description='Reduz a probabilidade de o modelo incluir palavras específicas na resposta.'
          >
            <Input {...register("presence_penalty", { required: true, valueAsNumber: true })} type='number' />
            {/* errors will return when field validation fails  */}
            {errors.presence_penalty && <span className='text-danger-500'>{errors.presence_penalty.message}</span>}
          </ImputLabel>
          <ImputLabel
            label='Frequencia'
            description='Aumenta ou diminui a frequência de uso de palavras.'
          >
            <Input {...register("frequency_penalty", { required: true, valueAsNumber: true })} type='number' />
            {/* errors will return when field validation fails  */}
            {errors.frequency_penalty && <span className='text-danger-500'>{errors.frequency_penalty.message}</span>}
          </ImputLabel>
        </div>
        <div className='
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8
        gap-y-8 justify-end'>
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

