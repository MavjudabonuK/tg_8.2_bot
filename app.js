import TelegramBot from "node-telegram-bot-api";
const TOKEN = ""
const bot = new TelegramBot(TOKEN, {polling: true})
bot.on("message", function (msg){
    const chatId = msg.chat.id;
    const text = msg.text;
    console.log(msg)
    bot.sendMessage(chatId, `${text}`)
})