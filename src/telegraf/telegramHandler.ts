import { Telegraf } from 'telegraf'

const telegramHandler = async () => {
    const bot = new Telegraf(process.env.TELEGRAM_KEY as string)

    bot.on('text', (ctx) => {
        console.log("CTX: ", ctx)
        ctx.reply("pong")
    })

    bot.launch();
}

export default telegramHandler