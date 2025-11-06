import z from "zod";
export const schema = z.object({
  email: z.string().email("Invalid email"),
  otp: z.string().min(3, "OTP is required"),
});
// export const schema = z.object({
//   email: z.string().email(),
//   otp: z.string(),
// });
