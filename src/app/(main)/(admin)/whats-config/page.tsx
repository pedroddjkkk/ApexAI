"use client";
import React, { useEffect, useState } from "react";

// components
import { InputLabel } from "@/components/inputs/imput-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// hook form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAiConfigSchema } from "@/lib/schema/ai-config";
import QRCode from "react-qr-code";
import axios from "axios";

// types
type Inputs = {
  name: string;
  sistema: string;
  max_tokens: number;
  model: string;
  temperature: number;
  stop: string;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
};

export default function AiConfig() {
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(async () => {
      setLoading(true);

      const ret = await axios.get("/api/qrcode");

      setQrCode(ret.data.qrCode);
      setLoading(false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createAiConfigSchema),
    defaultValues: {
      name: "",
      sistema: "",
      max_tokens: 0,
      model: "",
      temperature: 0,
      stop: "",
      top_p: 0,
      frequency_penalty: 0,
      presence_penalty: 0,
    },
  });

  const onSubmit = async (data: Inputs) => {
    const ret = await axios.post("/api/whats-config", data);
  };

  return (
    <main>
      <div className="px-8">
        <h1 className="font-bold text-3xl">Configuração Whatsapp</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-[calc(8px+1rem)] lg:px-28 xl:px-32 mt-4 gap-y-8 py-8"
      >
        <div
          className="
        grid md:grid-cols-2 sm:grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8
        "
        >
          <div className="items-center flex ">
            <InputLabel
              label="Nome Seção"
              description="Nomeie sua seção para identificação"
            >
              <Input {...register("name", { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.name && (
                <span className="text-danger-500">{errors.name.message}</span>
              )}
            </InputLabel>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-neutrals-500">Whatsapp</h1>
            <QRCode value={qrCode} />
            <h2 className="font-bold text-neutrals-500">
              Escaneie o QRCode para conectar o Whatsapp
            </h2>
          </div>
        </div>
        <div
          className="
        grid md:grid-cols-2 grid-cols-1
        lg:gap-x-16 xl:gap-x-32 md:gap-x-8
        gap-y-8 "
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
