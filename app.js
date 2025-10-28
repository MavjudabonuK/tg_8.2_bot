import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8263073061:AAEn2deT4ERtt_1B5ZXBfphBnFm84Sqxg8"
const bot = new TelegramBot(TOKEN, { polling: true })
bot.on("message", function (msg) {
    const chatId = msg.chat.id;
    const text = msg.text;
    console.log(msg)
    bot.sendMessage(chatId, `${text}`)
    bot.sendDice(chatId)
})

console.log("Bot ishga tushdi...")