import { z } from "zod";
import "@std/dotenv/load";

const Config = z.object({
  DATABASE_URL: z.string().url(),
  TELEGRAM_BOT_TOKEN: z.string(),
  USE_WEBHOOK: z.string().transform((value) => value === "true"),
});

export type Config = z.infer<typeof Config>;

export const config = Config.parse(Deno.env.toObject());
