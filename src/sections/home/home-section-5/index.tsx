import { FaCheck } from "react-icons/fa";
import { PiBirdBold } from "react-icons/pi";
import { PiSealWarning } from "react-icons/pi";
import { LuBuilding2, LuRocket } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuBird } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Precos from "./preco-desconto";

export default function HomeSection5() {
  return (
    <div className="md:p-16 p-4 bg-white bg-opacity-50 rounded-2xl flex-col justify-center items-center gap-16 inline-flex">
      <div className="grid grid-cols-1 xl:grid-cols-2
      2xl:grid-cols-3 gap-16 w-full">
        <Precos valor={0} name="Free" lista={[
          "20 mensagens incluídas por mês",
          "1000 palavras de treinamento",
          "Modelo básico (GPT-3)"
        ]} />
        <Precos valor={700} desconto={16.858} name="Pro-Plus" destaque="Mais Popular" lista={[
          "15.000 mensagens incluídas por mês",
          "3000 palavras de treinamento",
          "Treinamento modular por",
          "perguntas e respostas",
          "3 WhatsApp bot",
          "Treinamento por WebSite",
          "5 Configurações",
          "Modelo avançado (GPT-4 Turbo)",
          "Treinamento por documentos",
          "Respostas com documentos",
        ]} adicional="R$ 0,30 por mensagem adicional" />
        <Precos valor={289} name="Pro" lista={[
          "8.000 mensagens incluídas por mês",
          "2000 palavras de treinamento",
          "1 WhatsApp bot",
          "3 Configurações",
          "Modelo Avançado (GPT-4 Turbo)"
        ]} adicional="R$ 0,20 por mensagem adicional" className="xl:col-span-2 2xl:col-span-1" />
      </div>
      <div className="mt-5 p-8 bg-neutral-50 rounded-[32px] shadow-md flex-col  flex gap-4 w-full h-full">
        <div className="w-full lg:w-1/3">
          <div className="flex flex-row gap-2">
            <LuBuilding2 className="text-primary-500" size={25} />
            <span className="text-black text-2xl font-bold leading-normal">Empresa</span>
          </div>
          <span>Entre em contato conosco para criar um plano expeifico para você</span>
        </div>
        <div>
          <Button className="bg-primary-500 text-white rounded-full hover:bg-primary-600	">Contate-nos</Button>
        </div>
      </div>
    </div>
  );
}
