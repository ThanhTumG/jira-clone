import z from "zod";

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(1, "Password is required"),
});

export const registerFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.email(),
  password: z.string().min(1, "Password is required"),
});
