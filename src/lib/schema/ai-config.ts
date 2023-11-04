import z from "zod";

export const createAiConfigSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(255, "Nome deve ter no máximo 255 caracteres"),
  sistema: z.string({
    required_error: "O campo 'sistema' é obrigatório e deve ser uma string.",
  })
  .min(30)
  ,
  max_tokens: z.number().optional(),
  model: z.string().optional(),
  temperature: z.number().optional(),
  stop: z.string().optional(),
  top_p: z.number().optional(),
  frequency_penalty: z.number().optional(),
  presence_penalty: z.number().optional(),
});