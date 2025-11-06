import z from "zod";

export const schema = z
  .object({
    email: z.string().email(),
    newPassword: z.string().min(8, { message: "The Lowest Number is 8" }),
    confirmNewPassword: z
      .string()
      .min(8, { message: "The Lowest Number is 8" }),
  })
  .refine((value) => value.newPassword === value.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "Confirm Passwrod is not Match",
  });
