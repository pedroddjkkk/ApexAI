import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

export default function HomeSection6() {
  return (
    <div className='flex p-16 flex-col items-start gap-2 self-stretch rounded-[16px] bg-primary-500'>
      <div className='flex flex-col items-start gap-8 '>
        <div className='flex flex-col items-start gap-2 w-1/2'>

          <span className='text-white text-[14px]'>Identificação de Problemas Recorrentes</span>

          <span className='text-white text-[40px] font-bold'>Converta visitantes em clientes mesmo enquanto você dorme</span>

          <Button className='rounded-full bg-white text-black'>Contate-nos</Button>
          
        </div>

      </div>
      
    </div>
  )
}