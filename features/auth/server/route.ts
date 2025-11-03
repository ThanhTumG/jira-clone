import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginFormSchema, registerFormSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginFormSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    return c.json({ email, password });
  })
  .post("/register", zValidator("json", registerFormSchema), async (c) => {
    const { email, name, password } = c.req.valid("json");

    return c.json({ email, name, password });
  });

export default app;
