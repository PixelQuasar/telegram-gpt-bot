import { Telegraf } from 'telegraf'
import { OpenAIApi } from 'openai';
import randomRange from '../util/randomRange';
import parseStackAndGenerate from './parseStackAndGenerate';
import generateMessage from '../chatgpt/generate';

const config = require('../../config.json')

const telegramHandler = async (openai: OpenAIApi) => {
    const bot = new Telegraf(process.env.TELEGRAM_KEY as string)

    const messageStack: Array<Array<string>> = []
    const stackSize = parseInt(config.queueSize)
    const chance = parseInt(config.chance)

    bot.on('text',async (ctx) => {
        console.log("CTX: ", ctx)
        // console.log("REPLY:", ctx.message.reply_to_message?.from?.id)
        messageStack.push([ctx.from.first_name, ctx.message.text ? ctx.message.text : "*файл или картинка*"])

        if (ctx.message.reply_to_message?.from?.id == config.botId) {
            const oneMessageAnswer = await generateMessage(openai, ctx.message.text) as string

            bot.telegram.sendMessage(ctx.chat.id, oneMessageAnswer)
        }

        if (messageStack.length > stackSize) messageStack.shift()

        if (randomRange(0, 100) <= chance) {
            let answer = await parseStackAndGenerate(openai, messageStack) as string

            if (answer.includes(":")) {
                answer = answer.split(":")[1]
            }

            bot.telegram.sendMessage(ctx.chat.id, answer)
        }
    })

    bot.launch()
}

export default telegramHandler