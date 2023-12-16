import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { openai } from "./config";
import { AIConfig } from "@prisma/client";

export async function generateAiResponse(
  messages: ChatCompletionMessageParam[],
  AiConfig: AIConfig
) {
  console.log("messages", messages);

  const completition = await openai.chat.completions.create({
    messages,
    model: AiConfig.model,
    max_tokens: AiConfig.max_tokens,
    functions: [
      {
        name: "get_current_weather",
        description: "A function to get the current weather",
        parameters: {
          type: "object",
          properties: {
            state: {
              type: "string",
              description: "State, e.g. San Francisco, CA",
            },
            city: {
              type: "string",
              description: "City, e.g. San Francisco",
            },
            unit: {
              type: "string",
              enum: ["celsius", "fahrenheit"],
            },
          },
          required: ["state", "city"],
        },
      },
      // funcão para pegar os produtos
      {
        name: "get_products",
        description: "pega os produtos ou serviços",
        parameters: {
          type: "object",
          properties: {
            area: {
              type: "string",
              description:
                "Area de atuação, e.g. Vendas, Suporte e Restaurantes",
            },
            produto: {
              type: "string",
              description:
                "Produto ou serviço, e.g. Vendedor, Suporte Interno Suporte Externo",
            },
          },
        },
      },
    ],
    function_call: "auto",
  });

  return completition;
}
