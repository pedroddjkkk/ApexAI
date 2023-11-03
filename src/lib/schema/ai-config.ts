import z from "zod";

export const createAiConfigSchema = z.object({
  user_id: z.string(),
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(255, "Nome deve ter no máximo 255 caracteres"),
  sistema: z.string({
    required_error: "O campo 'sistema' é obrigatório e deve ser uma string.",
  }),
  max_tokens: z.number({
    required_error: "O campo 'max_tokens' é obrigatório e deve ser um número.",
  }),
  model: z.string({
    required_error: "O campo 'model' é obrigatório e deve ser uma string.",
  }),
  temperature: z.number({
    required_error: "O campo 'temperature' é obrigatório e deve ser um número.",
  }),
  stop: z.string({
    required_error: "O campo 'stop' é obrigatório e deve ser uma string.",
  }),
  top_p: z.number({
    required_error: "O campo 'top_p' é obrigatório e deve ser um número.",
  }),
  frequency_penalty: z.number({
    required_error:
      "O campo 'frequency_penalty' é obrigatório e deve ser um número.",
  }),
  presence_penalty: z.number({
    required_error:
      "O campo 'presence_penalty' é obrigatório e deve ser um número.",
  }),
});
