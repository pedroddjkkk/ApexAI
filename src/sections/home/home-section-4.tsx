import { FaCheck } from "react-icons/fa6";

export default function HomeSection4() {
  return (
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
  )
}