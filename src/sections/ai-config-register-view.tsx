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
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FaqDataTables from "@/components/data-tables/form-faq-table";
import { Label } from "@/components/ui/label";
import { MdDeleteForever } from "react-icons/md";

// types
export type InputsAionfig = {
  id?: string;
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
    response: string | File;
  }[];
  file: File[];
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
  } = useForm<InputsAionfig>({
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
      file: [],
    },
  });

  const onSubmit = async (data: InputsAionfig) => {
    // trsforma o array em uma string com pegunta e respostas

    const objtData = {
      ...data,
      sistema: data.sistema
        .map((item) => {
          return `${item.quest}: ${item.response}`;
        })
        .join("\n")
        .trim(),
      faq: data.faq
        .map((item) => {
          if (item.response instanceof File) return {
            quest: item.quest,
            response: item.response
          };
          return `${item.quest}: ${item.response}`;
        })
        .join("\n")
        .trim(),
    }

    const formData = new FormData();

    formData.append("name", objtData.name);
    formData.append("sistema", objtData.sistema);
    formData.append("max_tokens", objtData.max_tokens.toString());
    formData.append("model", objtData.model);
    formData.append("temperature", objtData.temperature.toString());
    formData.append("stop", objtData.stop);
    formData.append("top_p", objtData.top_p.toString());
    formData.append("frequency_penalty", objtData.frequency_penalty.toString());
    formData.append("presence_penalty", objtData.presence_penalty.toString());
    // envia um array de arquivos
    objtData.file.forEach((item) => {
      formData.append("file", item);
    });
    formData.append("faq", objtData.faq);


    const ret = await axios.post("/api/ai-config", formData);
    if (ret.status === 200) {
      router.back();
    }
  };

  const onSearch = async (e: React.FormEvent) => {
    const res = await axios.post("/api/web-scraping", {
      teste: "teste",
    });

    console.log(res);
  };

  const [advanced, setAdvanced] = useState(false);

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
      <div className="grid md:grid-cols-2 sm:grid-cols-1 flex-col px-[calc(8px+1rem)] lg:px-28 xl:px-32 mt-4 gap-y-8 py-8">
        <div>
          <InputLabel
            label="Site"
            description="Responda suas perguntas com seu web site"
          >
            <Input />
          </InputLabel>
          <Button
            className="gap-2 font-bold bg-success-500/90 hover:bg-success-500"
            onClick={onSearch}
          >
            Procurar
          </Button>
        </div>
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
          {/* upload file */}
          <div>
            <InputLabel label="Arquivo" description="Envie arquivo.">
              <Input
                type="file"
                onChange={(e) => {
                  if (!e.target.files) return;
                  const file = e.target.files[0];
                  setValue("file", [...watch("file"), file]);
                  console.log("watch", watch("file"));
                }}
              />
              {/* errors will return when field validation fails  */}
              {errors.file && (
                <span className="text-danger-500">{errors.file.message}</span>
              )}
              <Label className="text-sm text-gray-500 flex flex-col">
                Arquivos:
                {watch("file").map((item, index) => (
                  <span key={index} className="text-primary-500 flex flex-row items-center gap-2" onClick={(e) => setValue("file", watch("file").filter((e) => e.name != item.name))}>
                    <MdDeleteForever size={18} />
                    {" "}
                    {item?.name}
                  </span>
                ))}
              </Label>
            </InputLabel>
          </div>
          {/* <div>
            <InputLabel
              label="Site"
              description="Responda suas perguntas com seu web site"
            >
              <Input />
            </InputLabel>
            <Button
              className="gap-2 font-bold bg-success-500/90 hover:bg-success-500"
              onClick={onSearch}
            >
              Procurar
            </Button>
          </div> */}
        </div>
        <div className="flex justify-center">
          <InputLabel
            label="Configuração AI"
            description="Este será o contexto que a AI usara para interagir."
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
        <div className="pb-8">
          <InputLabel
            label="FAQ"
            description="Adicione perguntas e respostas para sua AI."
          >
            <FaqDataTables setValue={setValue} watch={watch} />
          </InputLabel>
        </div>
        <SwitchLabel
          label="Configurações avançadas"
          value={advanced}
          onChange={(e) => {
            setAdvanced(e);
          }}
        />
        <div style={{ display: advanced ? "grid" : "none" }}>
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
