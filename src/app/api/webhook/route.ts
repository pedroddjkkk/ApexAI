import { generateAiResponse } from "@/lib/ai/chat";
import prisma from "@/lib/db";
import { verifyWebhook } from "@/lib/webhook/verify";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import type { Message } from "whatsapp-web.js";

export async function POST(req: NextRequest) {
  const { valid, body } = await verifyWebhook(req);

  if (!valid) {
    return NextResponse.json("Invalid signature", { status: 200 });
  }

  switch (body.type) {
    case "message":
      const messages = body.messages as Message[];

      const whatsappConfig = await prisma.whatsappClient.findUnique({
        where: {
          id: body.clientId,
        },
        include: {
          ai_config: true,
        }
      });

      if (!whatsappConfig || !whatsappConfig.active) {
        return NextResponse.json("Client not active");
      } else if (!whatsappConfig.ai_config) {
        return NextResponse.json("Client not configured");
      }

      const chat: ChatCompletionMessageParam[] = messages.map((message) => ({
        content: message.body,
        role: message.fromMe ? "assistant" : "user",
      }));

      chat.unshift({
        content:
          "Você é um atendente virtual, aqui estão os dados da empresa que você vai atender os clientes " + whatsappConfig.ai_config.sistema + ".\n\n" +
          new Date().toLocaleTimeString() +
          " . Não responda em Markdown, lembre-se que as respostas serão enviadas por whatsapp, então markdow não vai funcionar. Tente ser o mais breve possivel não escreva nada além no necessário, envie emojis. Não responda perguntas fora do escopo comercial da empresa",
        role: "system",
      });

      const generatedResponse = await generateAiResponse(chat);

      if (generatedResponse.choices[0].finish_reason === "function_call") {
        if (
          generatedResponse.choices[0].message.function_call?.name ===
          "get_current_weather"
        ) {
          const body = JSON.parse(
            generatedResponse.choices[0].message.function_call?.arguments
          );

          const res = await axios.get(
            `https://api.hgbrasil.com/weather?key=6b49adc2&city_name=${body.city},${body.state}`
          );

          chat.push({
            content: JSON.stringify(res.data.results),
            role: "function",
            name: "get_current_weather",
          });

          const newResponse = await generateAiResponse(chat);

          await axios.post("http://localhost:8000/whatsapp/message", {
            conversationId: messages[0].id.remote,
            message: newResponse.choices[0].message.content,
            clientId: body.clientId,
          });
        }
      } else {
        await axios.post("http://localhost:8000/whatsapp/message", {
          conversationId: messages[0].id.remote,
          message: generatedResponse.choices[0].message.content,
          clientId: body.clientId,
        });
      }

      return NextResponse.json("Message received");
    case "qrcode":
      await prisma.whatsappClient.update({
        data: {
          qrCode: body.qrCode,
          ready: false,
        },
        where: {
          id: body.clientId,
        },
      });

      return NextResponse.json("Qrcode received");
    case "ready":
      await prisma.whatsappClient.update({
        data: {
          ready: true,
        },
        where: {
          id: body.clientId,
        },
      });

      return NextResponse.json("Client ready");
    case "disconnected":
      await prisma.whatsappClient.update({
        data: {
          ready: false,
        },
        where: {
          id: body.clientId,
        },
      });

      return NextResponse.json("Client disconnected");
  }
}
