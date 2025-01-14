import { Context } from "@grammy";
import { prisma } from "#database";

export async function handleMessage(ctx: Context) {
  const message = ctx.message;
  if (!message) return;

  // Check if user exists, update username if exists
  // or create new user if not
  const {id: userId} = await prisma.user.upsert({
    where: {
      telegramId: message.from.id.toString(),
    },
    update: {
      username: message.from.username,
    },
    create: {
      telegramId: message.from.id.toString(),
      username: message.from.username,
    },
    select: {
      id: true,
    },
  });

  // Log user message
  await prisma.message.create({
    data: {
      message: message.text ?? "No text in message",
      senderId: userId,
    },
  });

  await ctx.reply("This message has been logged", {
    reply_to_message_id: message.message_id,
  });
}
