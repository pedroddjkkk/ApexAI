import { Button } from "@/components/ui/button";
import { FaArrowRight, FaCheck } from "react-icons/fa";

export default function HomeSection1() {
  return (
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
  )
}