import z from "zod";

export const createAiConfigSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(255, "Nome deve ter no máximo 255 caracteres"),
  sistema: z.array(z.object({
    id: z.string(),
    quest: z.string(),
    response: z.string(),
  })),
  max_tokens: z.number().optional(),
  model: z.string().optional(),
  temperature: z.number().optional(),
  stop: z.string().optional(),
  top_p: z.number().optional(),
  frequency_penalty: z.number().optional(),
  presence_penalty: z.number().optional(),
  faq: z.array(z.object({
    id: z.string(),
    quest: z.string(),
    response: z.string(),
  })),
});
