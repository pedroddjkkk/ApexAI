import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { openai } from "./config";

export async function generateAiResponse(
  messages: ChatCompletionMessageParam[]
) {
  const completition = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
    max_tokens: 150,
  });

  return completition;
}
