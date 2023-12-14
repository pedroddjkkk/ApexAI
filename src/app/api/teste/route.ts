import { openai } from "@/lib/ai/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Descreva a imagem com detalhe dos produtos para um atendente virtual" },
          {
            type: "image_url",
            image_url: {
              "url": "https://www.menuart.com.br/wp-content/uploads/2020/03/criacao-4.jpg",
            },
          },
        ],
      },
    ],
    max_tokens: 4000
  });


  return NextResponse.json(response);
}