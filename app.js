import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8592046400:AAGPw1msTRFYR9mFskLmzaABu0mrtTouvsE"
const bot = new TelegramBot(TOKEN, { polling: true })
bot.on("message", async function (msg) {
     const chatId = msg.chat.id;
     const text = msg.text;
     const firstName = msg.chat.first_name;
     console.log(msg);

     if (text == "/start") {
          bot.sendMessage(chatId, `xush kelibsiz, ${firstName}`, {
               reply_markup: {
                    keyboard: [
                         [{ text: "Boshlash 🔥" }],
                         [{ text: "Menu 🍔" }, { text: "Til 🌍" }]
                    ],
                    resize_keyboard: true
               },
          });
     } else if (text == "/help") {
          bot.sendMessage(chatId, `Sizga qanday yordam, klerak, ${firstName}?`);
     } else if (text == "/sozlamalar") {
          bot.sendMessage(chatId, ` Bu sozlamalar ${firstName}?`)
     } else if (text == "Boshlash 🔥") {
          const xabar = await bot.sendMessage(chatId, `Iltimos, kuting...`);





          setTimeout(function () {
               bot.deleteMessage(chatId, xabar.message_id);
               bot.sendPhoto(chatId, "./img/mers.jpg", {
                    caption: `Mercedes-Benz CLR 1999 года был гоночным прототипом, который был снят с гонки «24 часа Ле-Мана» после серии аварий, вызванных аэродинамическими проблемами. Автомобиль, разработанный в сотрудничестве с HWA GmbH, оснащался 6,0-литровым двигателем V12 мощностью более 600 лошадиных сил, но его аэродинамика оказалась нестабильной на высоких скоростях и на неровностях трассы. `,
                    reply_markup: {
                         inline_keyboard: [
                              [
                                   { text: "Rasmlari", callback_data: "photos" },
                                   { text: "Ma'lumot", callback_data: "info" },
                              ],
                              [{ text: "Sotib olish", callback_data: "buy" }],
                         ],
                    },
               });




               console.log("2 sekund kechiktirildi");
          }, 1 * 1000);
          bot.sendMessage(chatId, ` Boshlanyapti... ${firstName}?`)
     } else if (text == "Menu 🍔") {
          bot.sendMessage(chatId, ` Menyuuuuu... ${firstName}?`)
     } else if (text == "Til 🌍") {
          bot.sendMessage(chatId, ` Tilni tanlang ${firstName}?`)
     }
});
console.log("Bot ishga tushdi...")