import { generateAiResponse } from "@/lib/ai/chat";
import { openai } from "@/lib/ai/config";
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

      const conversation = await prisma.conversation.findUnique({
        where: {
          chat_id: messages[0].from,
        },
      });

      if (!conversation) {
        const assistant = await openai.beta.assistants.create({
          name: "Assistente Dia de Pizza",
          instructions:
            "Você é um atendente virtual, você irá atender clientes da empresa Dia de Pizza, a empresa é localizada na R. Manoel Ribas, 2570 - Jardim Ouro Branco, Paranavaí - PR, 87704-000. O dia de pizza abre das 18:00 até 23:00 sempre. O telefone é (44) 3422-3010. O pedido pode ser entregue ou retirado no balcão. O cardápio pode ser acessado por esse link https://www.diadepizza.com.br/cardapio.html. O horário atual é " +
            new Date().toLocaleTimeString(),
          model: "gpt-4-1106-preview",
        });

        const newConversation = await prisma.conversation.create({
          data: {
            chat_id: messages[0].from,
            thread_id: assistant.id,
          }
        })
      }

      const chat: ChatCompletionMessageParam[] = messages.map((message) => ({
        content: message.body,
        role: message.fromMe ? "assistant" : "user",
      }));

      chat.unshift({
        content:
          "Você é um atendente virtual, você irá atender clientes da empresa Dia de Pizza, a empresa é localizada na R. Manoel Ribas, 2570 - Jardim Ouro Branco, Paranavaí - PR, 87704-000. O dia de pizza abre das 18:00 até 23:00 sempre. O telefone é (44) 3422-3010. O pedido pode ser entregue ou retirado no balcão. O cardápio pode ser acessado por esse link https://www.diadepizza.com.br/cardapio.html. O horário atual é " +
          new Date().toLocaleTimeString() +
          " . Não responda em Markdown, as respostas são em texto puro.",
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
            id: messages[0].id.remote,
            message: newResponse.choices[0].message.content,
          });
        }
      } else {
        const res = await axios.post("http://localhost:8000/whatsapp/message", {
          id: messages[0].id.remote,
          message: generatedResponse.choices[0].message.content,
        });
      }

      return NextResponse.json("Message received", { status: 200 });
  }
}
