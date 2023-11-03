'use client';
import React, { useState } from 'react';

// components
import { ImputLabel } from '@/components/inputs/imput-label';
import { Button } from '@/components/ui/button';
import { TextAreaLabel } from '../company-config/page';
import SwitchLabel from '@/components/inputs/switch-label';

// hook form
import { useForm } from 'react-hook-form';

// zod
import { z } from 'zod';

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
  } = useForm<Inputs>()

  const onSubmit = (data: Inputs) => {

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
          <ImputLabel
            label='Nome AI'
            placeholder='Nome'
            description='Nomeie sua AI.'
            value=''
            name='name'
          />
        </div>
        <TextAreaLabel
          label='Comfiguração AI'
          placeholder='System'
          description='Este será o contexto que a AI usara para interagir.'
          value=''
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
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
            name='model'
            label='Modelo'
            placeholder='Modelo'
            description='Escolha o modelo de AI que deseja usar, este parametro reflete no preço por tokens'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            name='max_tokens'
            label='Max Tokens Atendimento'
            placeholder='Tokens'
            description='Limite de tamanho da resposta para o cliente. '
            value=''
            type='number'
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            name='temperature'
            label='Temperatura AI'
            placeholder='Temperatura'
            description=' Controla a aleatoriedade das respostas geradas.'
            value=''
            type='number'
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            name='top_p'
            label='Qualidade'
            placeholder='Qualidade'
            description='Isso permite que você gere respostas de alta qualidade, eliminando tokens menos relevantes.'
            value=''
            type='number'
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            name='stop'
            label='Black List'
            placeholder='Black List'
            description='Permite que você especifique uma string para indicar ao modelo quando parar a geração da resposta, separe as palavras com uma “,”.'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            name='presence_penalty'
            label='Presença'
            placeholder='Presença'
            description='Reduz a probabilidade de o modelo incluir palavras específicas na resposta.'
            type='number'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            name='frequency_penalty'
            label='Frequencia'
            placeholder='Frequencia'
            description='Aumenta ou diminui a frequência de uso de palavras.'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <div></div>
          <div></div>
          <Button
            className='w-full bg-primary-500 hover:bg-secondary-500'
            onClick={() => {
              console.log('click');
            }}
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </main>
  );
}

