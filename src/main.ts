import { getBot } from "#bot";
import { config } from "#config";
import { webhookCallback } from "@grammy";

if (import.meta.main) {
  const bot = getBot();
  if (config.USE_WEBHOOK) {
    const handleUpdate = webhookCallback(bot, "std/http");
  
    await Deno.serve(async (req) => {
      if (req.method === "POST") {
        const url = new URL(req.url);
        if (url.pathname.slice(1) === bot.token) {
          try {
            return await handleUpdate(await req.json());
          } catch (err) {
            console.error(err);
          }
        }
      }
      return new Response();
    });
  } else {
    bot.start();
  }
}


