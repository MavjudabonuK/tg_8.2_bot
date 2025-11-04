import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8263073061:AAEn2deT4ERtt_1B5ZXBfphBnFm84Sqxg8"
const bot = new TelegramBot(TOKEN, { polling: true })
bot.on("message", function (msg) {
    const chatId = msg.chat.id;
    const text = msg.text;
    const firstName = msg.chat.first_name;
    console.log(msg);

    if (text == "/start") {
        bot.sendMessage(chatId, `xush kelibsiz, ${firstName}` , {
        reply_markur: {
            keyboar: [
                [{text: "Boshlash 🔥"}],
                [{text: "Menu 🍔"}, {text: "Til 🌍"}]
            ],
             resize_keyboard: true
        },
    });
    } else if (text == "/help") {
        bot.sendMessage(chatId, `Sizga qanday yordam, klerak, ${firstName}?`);
    }else if (text == "/sozlamalar") {
         bot.sendMessage(chatId, ` Bu sozlamalar ${firstName}?`)
    }else if (text == "Boshlash 🔥") {
         bot.sendMessage(chatId, ` Boshlanyapti... ${firstName}?`)
    }else if (text == "Menu 🍔") {
         bot.sendMessage(chatId, ` Menyuuuuu... ${firstName}?`)
    }else if (text == "Til 🌍") {
         bot.sendMessage(chatId, ` ... ${firstName}?`)
    }
console.log("Bot ishga tushdi...")