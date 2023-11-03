'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Text } from '@tremor/react';
import React from 'react';


export default function AiConfig() {
  return (
    <main>
      <div className='px-8'>
        <h1 className='font-bold text-3xl'>Configuração AIs</h1>
      </div>
      <form className='flex flex-col px-[calc(8px+1rem)] lg:px-28 xl:px-32 mt-4 gap-y-8 py-8'>
        <div className='
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8'>
          <ImputLabel
            label='Nome AI'
            placeholder='Nome'
            description='Nomeie sua AI.'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            label='Rede Social'
            placeholder='Rede Social'
            description='Escolha uma rede social.'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
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
        <div className='
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8
        gap-y-8'>
          <ImputLabel
            label='Max Gasto Tokens'
            placeholder='Tokens'
            description='Limite geral de gasta da AI.'
            value=''
            type='number'
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            label='Modelo'
            placeholder='Modelo'
            description='Escolha o modelo de AI que deseja usar, este parametro reflete no preço por tokens'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
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
            label='Black List'
            placeholder='Black List'
            description='Permite que você especifique uma string para indicar ao modelo quando parar a geração da resposta, separe as palavras com uma “,”.'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
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
            label='Frequencia'
            placeholder='Frequencia'
            description='Aumenta ou diminui a frequência de uso de palavras.'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
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

type InputLabelProps = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  description?: string
}
export function ImputLabel({
  label,
  value,
  onChange,
  placeholder,
  type,
  description
}: InputLabelProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label className='font-bold text-neutrals-500' >{label}</label>
      <Input value={value} type={type} placeholder={placeholder} onChange={(e) => onChange(e)} />
      <Text>{description}</Text>
    </div>
  );
}

type TextAreaLabelProps = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  description?: string
}
export function TextAreaLabel({
  label,
  value,
  onChange,
  placeholder,
  description
}: TextAreaLabelProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label className='font-bold' >{label}</label>
      <Textarea className='h-[200px]' value={value} placeholder={placeholder} onChange={(e) => onChange(e)} />
      <Text>{description}</Text>
    </div>
  );
}