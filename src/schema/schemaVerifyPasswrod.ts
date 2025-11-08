import z from "zod";
export const schema = z.object({
  otp: z.string().min(3, "OTP is required"),
});
