import z from "zod";

export const newUserSchema = z.object({
  name: z
    .string()
    .max(10, { message: "Name must be less than 10 characters" })
    .min(3, { message: "Name must be at least 3 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be less than 20 characters" }),
});
