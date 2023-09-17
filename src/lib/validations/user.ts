import { z } from "zod";

export const createUserSchema = z.object({
  username: z
    .string({
      invalid_type_error: "Invalid username",
      required_error: "Username is required",
    })
    .min(3)
    .max(255),
  email: z
    .string({
      invalid_type_error: "Invalid email",
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      invalid_type_error: "Invalid password",
      required_error: "Password is required",
    })
    .min(6)
    .max(255),
});
