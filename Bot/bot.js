const { Telegraf } = require("telegraf");

const TOKEN = "7099863059:AAGSmQ1SBEDBafog-UDG_gD6QYU-e8d6xQ4";
const bot = new Telegraf(TOKEN);

const web_link = "https://fascinating-lollipop-ab1904.netlify.app/";

bot.start((ctx) => {
  console.log(ctx.update.message.text);
  console.log(ctx.update.message.from);

  return ctx.reply(
    "Assalomu aleykum! Xurmatli mijoz siz ovqat buyurtma beradigan botga kirdingiz. Bizning xizmatdan foydalanganingiz uchun tashakkur... \nMuallif: @MurodjonHalilov",
    {
      reply_markup: {
        keyboard: [[{ text: "Buyurtma berish 🍕🍔", web_app: { url: web_link } }]],
      },
    }
  );
});

bot.launch();
