import { generateAiResponse } from "@/lib/ai/chat";
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

      const chat: ChatCompletionMessageParam[] = messages.map((message) => ({
        content: message.body,
        role: message.fromMe ? "assistant" : "user",
      }));

      const generatedResponse = await generateAiResponse(chat);

      const res = await axios.post("http://localhost:8000/whatsapp/message", {
        id: messages[0].id.remote,
        message: generatedResponse.choices[0].message.content,
      });

      return NextResponse.json("Message received", { status: 200 });
  }
}
