"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

type Props = {

}

export default function HomeView({ }: Props) {

  const [openNav, setOpenNav] = useState(false)

  return (
    <main className='min-h-screen bg-[#f0f0f3] flex justify-center'>
      <div className='lg:w-2/3 h-full w-11/12 flex flex-col'>
        {/* Top nav */}
        <div className='flex flex-row justify-between items-center py-4 bg-[#f0f0f381] backdrop-blur-md fixed lg:w-2/3 w-11/12 px-4'>
          <div className="h-[66px] w-[250px]" style={{
            backgroundImage: "url('https://cdn.discordapp.com/attachments/1048010244795678771/1169737777072590969/AIPEX_LOGO_light.png?ex=65567e32&is=65440932&hm=c5661bf76a5eefe78815e6821382ada234a600cf63469015c12599c68a586890&')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }} />
          <div className='flex gap-8 font-semibold text-neutrals-500'>
            <Link href="/">
              Preços
            </Link>
            <Link href="/">
              Sobre
            </Link>
            <div className='flex gap-1'>
              <span>
                Mais
              </span>
              <div onClick={() => { setOpenNav(!openNav) }} className='justify-center items-center flex p-1' >
                {openNav ? <FaChevronDown /> :
                  <FaChevronUp />}
              </div>
            </div>
          </div>
          <div className='flex gap-3'>
            <Button className='rounded-full bg-white text-neutrals-500 hover:bg-primary-500/10'>
              Entrar
            </Button>
            <Button className='rounded-full bg-primary-500 hover:bg-secondary-500'>
              Cadastrar
            </Button>
          </div>
        </div>
        <div className=' gap-16 flex flex-col mt-32'>
          {/* apresentação */}
          {/* Section 1 */}
          <div className='bg-white p-16 rounded-xl gap-32 flex flex-col'>
            <div className='flex flex-col gap-8 xl:flex-row'>
              <div className='gap-8 flex flex-col'>
                <div className='flex flex-col gap-2'>
                  <span className='text-primary-500 text-sm'>Converta visitantes em clientes</span>
                  <span className='text-[42px] leading-[45px] '>Atendente PERSONALIZADO para Vendas e Suporte alimentado por IA</span>
                  <div className='text-primary-500 gap-2 flex flex-col'>
                    <div className='flex items-center gap-2'>
                      <div className='p-2 bg-primary-500/20 flex rounded-full'>
                        <FaCheck />
                      </div>
                      <span>Configure em 5 min. Suporta mais de 175 idiomas</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='p-2 bg-primary-500/20 flex rounded-full'>
                        <FaCheck />
                      </div>
                      <span>Redução de Custos</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='p-2 bg-primary-500/20 flex rounded-full'>
                        <FaCheck />
                      </div>
                      <span>Atendimento Personalizado</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='p-2 bg-primary-500/20 flex rounded-full'>
                        <FaCheck />
                      </div>
                      <span>Respostas Rápidas e Precisas</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='p-2 bg-primary-500/20 flex rounded-full'>
                        <FaCheck />
                      </div>
                      <span>Disponibilidade 24/7</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button className='rounded-full bg-primary-500 hover:bg-secondary-500 gap-2'>
                    <span>Configurar IA</span>
                    <FaArrowRight size={16} />
                  </Button>
                </div>
              </div>
              <div className='flex justify-center items-center min-w-[280px]'>
                <div className='bg-neutral-500/10 rounded-xl w-[280px] h-[400px]'>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-16'>
              <div className='flex flex-col text-center gap-2'>
                <span className='text-primary-500 text-sm'>Tempo é precioso. Comece na frente com a AIPex</span>
                <span className='text-[42px] leading-[45px] '>Tudo pronto em 5 Minutos</span>
                <span className='text-neutrals-500 text-sm'>Para criar a IA perfeita para o seu negócio</span>
              </div>
              <div className='bg-neutral-500/10 rounded-xl w-full h-[500px]' ></div>
            </div>
          </div>
          {/* vantagens */}
          {/* section 2 */}
          <div className='bg-white p-16 rounded-xl flex gap-16 flex-col xl:flex-row justify-center xl:justify-between items-center'>
            <div className='flex flex-col gap-3  flex-1'>
              <div className='flex flex-col gap-3'>
                <span className='text-[42px] leading-[45px]'>Vantagens para os funcionários</span>
                <span className='text-neutrals-500 text-sm'> Implementar chatbots com Inteligência Artificial (IA) em uma empresa pode trazer vantagens significativas para os funcionários</span>
              </div>
              <div className='text-primary-500 gap-3 flex flex-col'>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Acesso Rápido à Informação</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Suporte Interno</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Alívio de Tarefas Repetitivas</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Treinamento e Capacitação</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Automação de Processos Internos</span>
                </div>
              </div>
            </div>
            <div className=' bg-neutral-500/10 rounded-tl-3xl rounded-br-3xl h-[300px] w-[300px]' style={{
              backgroundImage: "url('https://s3-alpha-sig.figma.com/img/2b53/2ebc/7178b03e555aff7c597f3e0d8a9a015d?Expires=1702252800&Signature=dMEI~CWwDDuFMYiv6OaC5QZCk5S80wvRLgMCRcZ1nxU2JRlDnXTQVcNh4OOJ7ASh~dZv4DVrbZH4G46jSl6OjF1QqOe9rOC5yfjOBCmT5LZrWTzd-Kbgt3RxLdEyxUV5Njc6GGs6S5GvMFLvhKoVi3kyORvxaJ7UiuCUuWrZGThXTZYP-ATVzmOxra4x6bbtK~1za4gR~q0PoiLvR45~JUGuXYWRpcwZ0rR~HbUnaos-ECjFEvEMkk~EwvUFCWfpbfkUTZT1bhrdRrusd8BkFzkBp9fn6P8qoVDDhZeSkzQbW79KfMQJo7AI6wyfRzMuxzoyPPn7d0su0wxtYREvNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}>
            </div>
          </div>
          {/* section 3 */}
          <div className='bg-white p-16 rounded-xl flex gap-16 flex-col xl:flex-row-reverse justify-center xl:justify-between items-center'>
            <div className='flex flex-col gap-3  flex-1'>
              <div className='flex flex-col gap-3'>
                <span className='text-[42px] leading-[45px]'>Vantagens econômicas</span>
                <span className='text-neutrals-500 text-sm'> Chatbots podem lidar com um grande volume de consultas e tarefas sem a necessidade de contratar uma equipe adicional</span>
              </div>
              <div className='text-primary-500 gap-3 flex flex-col'>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Redução de Custos Operacionais</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Eficiência no Atendimento ao Cliente</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Análise de Dados e Insights</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Escala e Flexibilidade</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Atendimento Multicanal</span>
                </div>
              </div>
            </div>
            <div className=' bg-neutral-500/10 rounded-tl-3xl rounded-br-3xl h-[300px] w-[300px]' style={{
              backgroundImage: "url('https://s3-alpha-sig.figma.com/img/cdf9/deb5/cf391cf225d76c5561c494c6d3751e14?Expires=1702252800&Signature=PKU3~dPunCmAGQbWQD~~kuF768F0jIoz8zA7wdvw38mSjaeO~B4gEtG9hp~GsEQQZ1vpp~N0HA7hIdX0~ndkm9SjbTrcwNqKcZyo5vjbivmfXwoeLuChE4rGn5ys6AfRZDLz8wNc-FRXbhu~Xn6FRvVMYGx~rc~1t5hwrqZc5PdKHeFW9U8pP7udJBemRGkwooS2yNd-dLn97QUCRMDV1H7s0UTLKlYXMnujgDfUXreKUvMAtBhx4LnUJZeATlTECsyMr88rJEnGFqG4dbBrNcF14jtOhj-QZqcV8Fxg~1gDM0X2RQxY6vVB1UEy1J6uEoxlWQaiDmJxv1kq0L-dmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}>
            </div>
          </div>
          {/* section 4 */}
          <div className='bg-white p-16 rounded-xl flex gap-16 flex-col xl:flex-row justify-center xl:justify-between items-center'>
            <div className='flex flex-col gap-3  flex-1'>
              <div className='flex flex-col gap-3'>
                <span className='text-[42px] leading-[45px]'>Melhoria contínua</span>
                <span className='text-neutrals-500 text-sm'>  Chatbots podem coletar feedback dos clientes ou usuários internos em tempo real. Isso proporciona uma fonte constante de dados para identificar áreas que precisam de melhorias imediatas.</span>
              </div>
              <div className='text-primary-500 gap-3 flex flex-col'>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Feedback em Tempo Real</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Análise de Dados Precisa</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Identificação de Problemas Recorrentes</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Atualizações Contínuas</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-primary-500/20 flex rounded-full'>
                    <FaCheck />
                  </div>
                  <span>Personalização Aperfeiçoada</span>
                </div>
              </div>
            </div>
            <div className=' bg-neutral-500/10 rounded-tl-3xl rounded-br-3xl h-[300px] w-[300px]' style={{
              backgroundImage: "url('https://s3-alpha-sig.figma.com/img/b89e/86de/f53057d9116696815bad80ae98eae58d?Expires=1702252800&Signature=Hp2qajRSuzDmgzHyrc8oq7SFagOdyv5pTsxwPV9zxPz4i90vR0j5-TIOXOAEc75KgpNhnc4X8NKryuxkmKmXb5ylX2xMRI-OSjnc-3f4ZEQ8i8EEJEvbPMr9farLtoBUg1qM1rdUbI47Sjwh-~de8LNAhj9pZeIiROgq3VBFrLYl~wMXG1U~PUYQq9sKYAUqbMb4jPmIEAjCZRwHGbn2L75WOl4UO7IbRF-koSbv948ywCJi3Ujnxw3TFZdFr4raWrSRNUWZ9OacS~jivJc2LlRSpceZJ~XC-COjASp982cTy1wo0L71vhPlxcUMvw1-FFTM8VyWK-DUC5AW1VPJcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}>
            </div>
          </div>
        </div>
      </div>
    </main>
  )

}