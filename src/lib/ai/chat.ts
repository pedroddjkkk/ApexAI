import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { openai } from "./config";

export async function generateAiResponse(
  messages: ChatCompletionMessageParam[]
) {
  const completition = await openai.chat.completions.create({
    messages,
    model: "gpt-4",
    max_tokens: 150,
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
    ],
    function_call: "auto",
  });

  return completition;
}
