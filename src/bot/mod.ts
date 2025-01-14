import { Bot } from "@grammy";
import { config } from "#config";

import { handleMessage } from "./controllers.ts";

export function getBot(): Bot {
    const bot = new Bot(config.TELEGRAM_BOT_TOKEN);
    bot.on("message", handleMessage);
    return bot;
}
