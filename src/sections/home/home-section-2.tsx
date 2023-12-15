import { FaCheck } from "react-icons/fa6";

export default function HomeSection2() {
  return (
    <div className='bg-white/60 p-16 rounded-xl flex gap-16 flex-col xl:flex-row justify-center xl:justify-between items-center'>
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
  )
}