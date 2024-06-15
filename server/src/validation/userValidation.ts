import z from "zod";

export const userSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" })
    .max(10, { message: "Name must be less than 10 characters" }),
  password: z
    .string({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be less than 20 characters" }),
});
