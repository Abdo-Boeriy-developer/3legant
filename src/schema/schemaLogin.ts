import z from "zod";

export const schemaLogin = z.object({
  email: z.string().email(""),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(12, "Password must not exceed 12 characters"),
});
