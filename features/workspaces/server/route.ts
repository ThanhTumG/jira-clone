import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { createWorkspaceSchema } from "../schemas";
import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, WORKSPACES_ID } from "@/config";
import { ID } from "node-appwrite";

const app = new Hono().post(
  "/",
  zValidator("json", createWorkspaceSchema),
  sessionMiddleware,
  async (c) => {
    const tableDB = c.get("tableDB");
    const user = c.get("user");
    const { name } = c.req.valid("json");

    const workspaces = await tableDB.createRow({
      databaseId: DATABASE_ID,
      tableId: WORKSPACES_ID,
      rowId: ID.unique(),
      data: {
        name: name,
        userId: user.$id,
      },
    });

    return c.json({ data: workspaces });
  }
);

export default app;
