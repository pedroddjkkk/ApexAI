"use client";
import React, { useEffect, useState } from "react";

// components
import { InputLabel } from "@/components/inputs/imput-label";
import { Button } from "@/components/ui/button";
import SwitchLabel from "@/components/inputs/switch-label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Combobox } from "@/components/ui/combobox";

// hook form
import { useForm } from "react-hook-form";
import { createAiConfigSchema } from "@/lib/schema/ai-config";

// zod
import { zodResolver } from "@hookform/resolvers/zod";

// axios
import axios from "axios";
import TabsForm from "@/components/inputs/trabs-form";
import { Backpack, Plus, SendToBack, SkipBack, Undo2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PopoverFormFaq } from "@/components/form/popoverFormFaq";

// types
type Inputs = {
  name: string;
  sistema: {
    id: string;
    quest: string;
    response: string;
  }[];
  max_tokens: number;
  model: string;
  temperature: number;
  stop: string;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  faq: {
    id: string;
    quest: string;
    response: string;
  }[];
};

export default function AiConfigRegisterView() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createAiConfigSchema),
    defaultValues: {
      name: "",
      sistema: [],
      max_tokens: 2048,
      model: "gpt-4-1106-preview",
      temperature: 1,
      stop: "",
      top_p: 0.5,
      frequency_penalty: 1,
      presence_penalty: 1,
      faq: [],
    },
  });

  const onSubmit = async (data: Inputs) => {
    // trsforma o array em uma string com pegunta e respostas
    const ret = await axios.post("/api/ai-config", {
      ...data,
      sistema: data.sistema
        .map((item) => {
          return `${item.quest}: ${item.response}`;
        })
        .join("\n")
        .trim(),
    });
    if (ret.status === 200) {
      router.back();
    }
  };

  const [advanced, setAdvanced] = useState(false);
  const [pgFaq, setPgFaq] = useState(0);

  return (
    <main>
      <div
        className="flex 
      lg:flex-row 
      md:flex-row 
      flex-col 
      justify-between gap-4 text-center px-[calc(8px+1rem)] lg:px-28 xl:px-32"
      >
        <h1 className="lg:text-4xl md:text-4xl font-bold text-2xl">
          Cadastro de IA
        </h1>
        <Link href="/ai-config">
          <Button className="bg-primary-500 hover:bg-secondary-500 text-white font-bold py-2 px-4 rounded-full items-center w-full">
            <Undo2 size={24} />
            Voltar
          </Button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-[calc(8px+1rem)] lg:px-28 xl:px-32 mt-4 gap-y-8 py-8"
      >
        <div
          className="
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8"
        >
          <div>
            <InputLabel label="Nome da AI" description="Nomeie sua AI.">
              <Input {...register("name", { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.name && (
                <span className="text-danger-500">{errors.name.message}</span>
              )}
            </InputLabel>
          </div>
        </div>
        <div className="flex justify-center">
          <InputLabel
            label='Com figuração AI'
            description='Este será o contexto que a AI usara para interagir.'
          >
            <TabsForm
              onChange={(e, quest) => {
                const index = watch("sistema").findIndex(
                  (item) => item.id === quest.id
                );
                if (index === -1) {
                  setValue("sistema", [
                    ...watch("sistema"),
                    {
                      id: quest.id,
                      quest: quest.quest,
                      response: e,
                    },
                  ]);
                } else {
                  const newSistema = [...watch("sistema")];
                  newSistema[index] = {
                    id: quest.id,
                    quest: quest.quest,
                    response: e,
                  };
                  setValue("sistema", newSistema);
                }
              }}
              value={watch("sistema")}
            />
            {/* errors will return when field validation fails  */}
            {errors.sistema && (
              <span className="text-danger-500">{errors.sistema.message}</span>
            )}
          </InputLabel>
        </div>
        <SwitchLabel
          label="Configurações avançadas"
          value={advanced}
          onChange={(e) => {
            setAdvanced(e);
          }}
        />
        <div
          style={{ display: advanced ? "grid" : "none" }}
        >
          <div className="border-input border-[1px] rounded-lg p-6 gap-4 flex flex-col">
            <div className="gap-4 flex">
              <PopoverFormFaq
                onChange={(e) => {
                  console.log(e);
                }}
              >
                <Button
                  className="gap-2 font-bold bg-success-500/90 hover:bg-success-500">
                  <BsPlusLg size={20} />
                  Adicionar FAQ
                </Button>
              </PopoverFormFaq>
              <Button className="gap-2 font-bold bg-success-500">
                <BsPlusLg size={20} />
                Importar FAQs
              </Button>
              <Button className="gap-2 font-bold bg-danger-500">
                <AiOutlineDelete size={20} />
                Deletar
              </Button>
            </div>
            <div className="rounded-t-lg border-input border-[1px] ">
              <Table >
                <TableHeader>
                  <TableRow>
                    <TableHead>Perguntas</TableHead>
                    <TableHead>Resposta</TableHead>
                    <TableHead className="w-[10%]">Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {watch("faq")
                    .slice(pgFaq, 10)
                    .map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">pergunta</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>))}
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-end items-center gap-2">
              <Button className="bg-transparent text-neutrals-500 hover:bg-black/5 rounded-full p-2 w-[40px] h-[40px]"
                onClick={(e) => {
                  e.preventDefault();
                  if (pgFaq > 0) {
                    setPgFaq(pgFaq - 10);
                  }
                }}
              >
                <FaChevronLeft size={20} />
              </Button>
              <div>
                <span className="text-neutrals-500">
                  {pgFaq + 1} - {watch("faq")
                    .slice(pgFaq, 10).length} de {watch("faq").length}
                </span>
              </div>
              <Button className="bg-transparent text-neutrals-500 hover:bg-black/5 rounded-full p-2 w-[40px] h-[40px]"
                onClick={(e) => {
                  e.preventDefault();
                  if (pgFaq < watch("faq").length) {
                    setPgFaq(pgFaq + 10);
                  }
                }}
              >
                <FaChevronRight size={20} />
              </Button>
            </div>
          </div>
          <div
            className="
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8
        gap-y-8"
          >
            <InputLabel
              label="Modelo"
              description="Escolha o modelo de AI que deseja usar, este parametro reflete no preço por tokens"
            >
              <Combobox
                options={[
                  {
                    value: "gpt-3",
                    label: "GPT-3",
                  },
                  {
                    value: "davinci",
                    label: "Davinci",
                  },
                  {
                    value: "curie",
                    label: "Curie",
                  },
                  {
                    value: "babbage",
                    label: "Babbage",
                  },
                  {
                    value: "gpt-4-1106-preview",
                    label: "GPT-4-1106-preview",
                  },
                ]}
                onSelect={(value) => {
                  setValue("model", value);
                }}
                placeholder="Modelo"
              />
              {/* errors will return when field validation fails  */}
              {errors.model && (
                <span className="text-danger-500">{errors.model.message}</span>
              )}
            </InputLabel>
            <InputLabel
              label="Max Tokens Atendimento"
              description="Limite de tamanho da resposta para o cliente. "
              value={watch("max_tokens")}
            >
              <Slider
                max={4096 as any}
                min={1 as any}
                step={1}
                defaultValue={[watch("max_tokens")]}
                onValueChange={(e) => setValue("max_tokens", e[0])}
              />
              {/* errors will return when field validation fails  */}
              {errors.max_tokens && (
                <span className="text-danger-500">
                  {errors.max_tokens.message}
                </span>
              )}
            </InputLabel>
            <InputLabel
              label="Temperatura AI"
              description=" Controla a aleatoriedade das respostas geradas."
              value={watch("temperature")}
            >
              <Slider
                max={2 as any}
                min={0 as any}
                step={0.01}
                defaultValue={[watch("temperature")]}
                onValueChange={(e) => setValue("temperature", e[0])}
              />
              {/* errors will return when field validation fails  */}
              {errors.temperature && (
                <span className="text-danger-500">
                  {errors.temperature.message}
                </span>
              )}
            </InputLabel>
            <InputLabel
              label="Qualidade"
              description="Isso permite que você gere respostas de alta qualidade, eliminando tokens menos relevantes."
              value={watch("top_p")}
            >
              <Slider
                max={1 as any}
                min={0 as any}
                step={0.01}
                defaultValue={[watch("top_p")]}
                onValueChange={(e) => setValue("top_p", e[0])}
              />
              {/* errors will return when field validation fails  */}
              {errors.top_p && (
                <span className="text-danger-500">{errors.top_p.message}</span>
              )}
            </InputLabel>
            <InputLabel
              label="Black List"
              description="Permite que você especifique uma string para indicar ao modelo quando parar a geração da resposta, separe as palavras com uma “,”."
            >
              <Input {...register("stop", { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.stop && (
                <span className="text-danger-500">{errors.stop.message}</span>
              )}
            </InputLabel>
            <InputLabel
              label="Presença"
              description="Reduz a probabilidade de o modelo incluir palavras específicas na resposta."
              value={watch("presence_penalty")}
            >
              <Slider
                max={2 as any}
                min={0 as any}
                step={0.01}
                defaultValue={[watch("presence_penalty")]}
                onValueChange={(e) => setValue("presence_penalty", e[0])}
              />
              {/* errors will return when field validation fails  */}
              {errors.presence_penalty && (
                <span className="text-danger-500">
                  {errors.presence_penalty.message}
                </span>
              )}
            </InputLabel>
            <InputLabel
              label="Frequencia"
              description="Aumenta ou diminui a frequência de uso de palavras."
              value={watch("frequency_penalty")}
            >
              <Slider
                max={2 as any}
                min={0 as any}
                step={0.01}
                defaultValue={[watch("frequency_penalty")]}
                onValueChange={(e) => setValue("frequency_penalty", e[0])}
              />
              {/* errors will return when field validation fails  */}
              {errors.frequency_penalty && (
                <span className="text-danger-500">
                  {errors.frequency_penalty.message}
                </span>
              )}
            </InputLabel>
          </div>
        </div>
        <div
          className="
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8
        gap-y-8 justify-end"
        >
          <div />
          <Button
            type="submit"
            className="w-full bg-primary-500 hover:bg-secondary-500"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </main>
  );
}
