"use strict";

const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();
const botText = require("./const");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    `Привет ${
      ctx.message.from.first_name ? ctx.message.from.first_name : "незнакомец"
    }!`
  )
);
bot.help((ctx) => ctx.reply(botText.commands));

bot.command("frontend", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Frontend-Разработка</b>",
      Markup.inlineKeyboard([
        [Markup.button.callback("HTML", "btn_1")],
        [Markup.button.callback("CSS", "btn_2")],
        [Markup.button.callback("JavaScript", "btn_3")],
      ])
    );
  } catch (err) {
    console.error(err);
  }
});
bot.command("backend", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Backend-Разработка</b>",
      Markup.inlineKeyboard([
        [Markup.button.callback("Node.js и Java", "btn_4")],
      ])
    );
  } catch (err) {
    console.error(err);
  }
});

bot.command("git", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>GitHub</b>",
      Markup.inlineKeyboard([
        [Markup.button.callback("Git для начинающих", "btn_5")],
      ])
    );
  } catch (err) {
    console.error(err);
  }
});

bot.command("cs", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Computer Science</b>",
      Markup.inlineKeyboard([
        [Markup.button.callback("CS - самое нужное", "btn_6")],
      ])
    );
  } catch (err) {
    console.error(err);
  }
});

const addActionBot = (name, src, text) => {
  bot.action(name, async (ctx) => {
    try {
      await ctx.answerCbQuery(); //иконка ожидания ответа быстро исчезнет
      if (src !== false) {
        await ctx.replyWithPhoto({
          source: src,
        });
      }
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: true, // отключаем отображение изображения в ссылках
      });
    } catch (err) {
      console.error(err);
    }
  });
};

addActionBot("btn_1", "./img/html.png", botText.infoHTML);
addActionBot("btn_2", "./img/css.png", botText.infoCSS);
addActionBot("btn_3", "./img/js.jpeg", botText.infoJS);
addActionBot("btn_4", "./img/node.jpeg", botText.infoNodeJs);
addActionBot("btn_5", "./img/git.png", botText.infoGit);
addActionBot("btn_6", "./img/cs.png", botText.infoCS);

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
