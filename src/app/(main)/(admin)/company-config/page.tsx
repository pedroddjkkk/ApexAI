'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Text } from '@tremor/react';
import React from 'react';


export default function CompanyConfig() {
  return (
    <main>
      <div className='px-8'>
        <h1 className='font-bold text-3xl'>Configurações da Empresa</h1>
      </div>
      <form className='flex flex-col px-[calc(8px+1rem)] lg:px-28 xl:px-32 mt-4 gap-y-8 py-8 '>
        <div className='
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8'>
          <ImputLabel
            label='Nome da Empresa'
            placeholder='Nome'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            label='Razao Social'
            placeholder='Razao social'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            label='CNPJ'
            placeholder='CNPJ'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            label='Inscrição Estadual'
            placeholder='Inscrição estadual'
            type='number'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            label='Area de Atividade'
            placeholder='Area de atividade'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            label='Categoria da Empresa'
            placeholder='Categoria da empresa'
            value=''
            description='MEI, ME, EPP, EIRELI, LTDA, S.A'
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <TextAreaLabel
          label='Descrição da Empresa'
          placeholder='Conte um pouco sobre a empresa.'
          description='Misão, visão, valores...'
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
            label='CEP'
            placeholder='CEP'
            value=''
            type='number'
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            label='Estado'
            placeholder='Estado'
            value=''
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            label='Endereço'
            placeholder='Endereço'
            value=''
            type='number'
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <ImputLabel
            label='Cidade'
            placeholder='Cidade'
            value=''
            type='number'
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
  type = 'text',
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