import { FaCheck } from "react-icons/fa";
import { PiBirdBold } from "react-icons/pi";
import { PiSealWarning } from "react-icons/pi";
import { LuRocket } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuBuilding2 } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function HomeSection5() {
  return (
    <div className="bg-white p-16 rounded-xl flex gap-16 flex-col xl:flex-row justify-center xl:justify-between items-center">
      <div className="flex p-16 flex-col justify-end items-start gap-16 self-stretch rounded-2xl bg-white">
        <div className="flex items-end gap-16 self-stretch">
          <div className="flex p-8 flex-col items-center flex-1 bg-zinc-200/40 rounded-2xl shadow-lg">
            <div>
            <div className="flex flex-row items-center gap-2">
              <PiBirdBold size={25} className="text-primary-500" />
              <span className="text-[24px] leading-[45px] font-bold">Free</span>
            </div>

            <div className="flex flex-row items-baseline">
              <div className="font-bold leading-10 ">
                <span className="text-[40px]">R$0</span>
              </div>
              <div className="text-[24px] font-bold leading-6">
                <span>/mês</span>
              </div>
            </div>
            </div>
            <div className="w-[221.333px] h-[0.5px] bg-black"></div>

            <div className="flex flex-col gap-1 text-[14px]">
              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>5.000 mensagens incluídas por mês</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>50 leads por mês</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>5 IA bots</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>Modelo Avançado (GPT-4)</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>5 IA bots</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>50 leads por mês</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>Modelo Avançado (GPT-4)</span>
              </div>

              <div className="mt-6">
                <div className="flex flex-row items-center gap-1">
                  <PiSealWarning size={24} className="text-primary-500" />
                  <span>R$ 0,50 por mensagem adicional</span>
                </div>
              </div>

              <Button className="bg-primary-500 text-white rounded-full w-[233.333px] h-[45px] mt-6 flex justify-center items-center">
                Iniciar Plano
              </Button>
            </div>
          </div>

          <div className="flex p-8 flex-col items-center flex-1 bg-teal-200/20 rounded-2xl shadow-lg">
            <div>
            <div className="flex flex-row items-center gap-2">
              <LuRocket size={25} className="text-primary-500" />
              <span className="text-[24px] leading-[45px] font-bold">Pro</span>
            </div>

            <div className="flex flex-row items-baseline">
              <div className="font-bold leading-10 ">
                <span className="text-[40px]">R$300</span>
              </div>
              <div className="text-[24px] font-bold leading-6">
                <span>/mês</span>
              </div>
            </div>
            </div>
            <div className="w-[221.333px] h-[0.5px] bg-black"></div>

            <div className="flex flex-col gap-1 text-[14px]">
              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>
                  5.000 mensagens incluídas por mês
                </span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>50 leads por mês</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>5 IA bots</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>Modelo Avançado (GPT-4)</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>5 IA bots</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>50 leads por mês</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>Modelo Avançado (GPT-4)</span>
              </div>

              <div className="mt-6">
                <div className="flex flex-row items-center gap-1">
                  <PiSealWarning size={24} className="text-primary-500" />
                  <span>
                    R$ 0,50 por mensagem adicional
                  </span>
                </div>
              </div>

              <Button className="bg-primary-500 text-white rounded-full w-[233.333px] h-[45px] mt-6 flex justify-center items-center">
                Iniciar Plano
              </Button>
            </div>
          </div>

          <div className="flex p-8 flex-col items-center flex-1 bg-zinc-200/40 rounded-2xl shadow-lg">
            <div>
            <div className="flex flex-row items-center gap-2 justify-start">
              <AiOutlineThunderbolt size={25} className="text-primary-500" />
              <span className="text-[24px] leading-[45px] font-bold">
                Pro-Plus
              </span>
            </div>

            <div className="flex flex-row items-baseline">
              <div className="font-bold leading-10 ">
                <span className="text-[40px]">R$450</span>
              </div>
              <div className="text-[24px] font-bold leading-6">
                <span>/mês</span>
              </div>
            </div>
            </div>
            <div className="w-[221.333px] h-[0.5px] bg-black"></div>

            <div className="flex flex-col gap-1 text-[14px]">
              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>
                  5.000 mensagens incluídas por mês
                </span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>50 leads por mês</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>5 IA bots</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>Modelo Avançado (GPT-4)</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>5 IA bots</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>50 leads por mês</span>
              </div>

              <div className="flex flex-row items-center gap-1">
                <FaCheck size={24} className="text-primary-500" />
                <span>Modelo Avançado (GPT-4)</span>
              </div>

              <div className="mt-6">
                <div className="flex flex-row items-center gap-1">
                  <PiSealWarning size={24} className="text-primary-500" />
                  <span>
                    R$ 0,50 por mensagem adicional
                  </span>
                </div>
              </div>

              <Button className="bg-primary-500 text-white rounded-full w-[233.333px] h-[45px] mt-6 flex justify-center items-center">
                Iniciar Plano
              </Button>
            </div>
          </div>
        </div>

        <div className="flex p-8 justify-between items-center self-stretch rounded-[32px] bg-zinc-200/40 shadow-lg">
          <div className="flex flex-col gap-8 items-start self-stretch">
            <div className='flex flex-col gap-4'>
            <div className="flex flex-row items-center gap-2">
              <LuBuilding2 size={24} className='text-primary-500'/>
              <span className="text-[24px] leading-[45px] font-bold">
                Empresa
              </span>
            </div>
            <span className="text-[16px] font-normal">5.000 mensagens incluídas por mês</span>
            </div>

            <Button className="bg-primary-500 text-white rounded-full w-[233.333px] h-[45px] flex justify-center items-center">
            Contate-nos
            </Button>

          </div>

          <div className='flex items-start gap-10'>
            
            <div className='flex flex-col gap-1 flex-start'>

              <div className='flex items-center gap-2 self-stretch'>
                <FaCheck size={16} className='text-primary-500'/>
                <span className='text-[14px]'>5.000 mensagens incluídas por mês</span>
              </div>

              <div className='flex items-center gap-2 self-stretch'>
                <FaCheck size={16} className='text-primary-500'/>
                <span className='text-[14px]'>5 IA bots</span>
              </div>

              <div className='flex items-center gap-2 self-stretch'>
                <FaCheck size={16} className='text-primary-500'/>
                <span className='text-[14px]'>5.000 mensagens incluídas por mês</span>
              </div>

              <div className='flex items-center gap-2 self-stretch'>
                <FaCheck size={16} className='text-primary-500'/>
                <span className='text-[14px]'>Modelo Avançado (GPT-4)</span>
              </div>

            </div>
            <div className='flex flex-col gap-1 flex-start'>
              
              <div className='flex items-center gap-2 self-stretch'>
                <FaCheck size={16} className='text-primary-500'/>
                <span className='text-[14px]'>5.000 mensagens incluídas por mês</span>
              </div>

              <div className='flex items-center gap-2 self-stretch'>
                <FaCheck size={16} className='text-primary-500'/>
                <span className='text-[14px]'>5 IA bots</span>
              </div>

              <div className='flex items-center gap-2 self-stretch'>
                <FaCheck size={16} className='text-primary-500'/>
                <span className='text-[14px]'>Modelo Avançado (GPT-4)</span>
              </div>

              <div className='flex items-center gap-2 self-stretch'>
                <FaCheck size={16} className='text-primary-500'/>
                <span className='text-[14px]'>50 leads por mês</span>
              </div>

              <div className='flex items-center gap-2 self-stretch'>
                <FaCheck size={16} className='text-primary-500'/>
                <span className='text-[14px]'>Modelo Avançado (GPT-4)</span>
              </div>

            </div>
          </div>

        </div>
      </div>
      {/* <div className=' bg-neutral-500/10 rounded-tl-3xl rounded-br-3xl h-[300px] w-[300px]' style={{
        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/b89e/86de/f53057d9116696815bad80ae98eae58d?Expires=1702252800&Signature=Hp2qajRSuzDmgzHyrc8oq7SFagOdyv5pTsxwPV9zxPz4i90vR0j5-TIOXOAEc75KgpNhnc4X8NKryuxkmKmXb5ylX2xMRI-OSjnc-3f4ZEQ8i8EEJEvbPMr9farLtoBUg1qM1rdUbI47Sjwh-~de8LNAhj9pZeIiROgq3VBFrLYl~wMXG1U~PUYQq9sKYAUqbMb4jPmIEAjCZRwHGbn2L75WOl4UO7IbRF-koSbv948ywCJi3Ujnxw3TFZdFr4raWrSRNUWZ9OacS~jivJc2LlRSpceZJ~XC-COjASp982cTy1wo0L71vhPlxcUMvw1-FFTM8VyWK-DUC5AW1VPJcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      </div> */}
    </div>
  );
}
