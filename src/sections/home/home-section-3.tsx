
import { FaCheck } from "react-icons/fa6";

export default function HomeSection3() {
  return (
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
  )
}