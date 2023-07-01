import { Telegraf } from 'telegraf'
import { OpenAIApi } from 'openai';
import randomRange from '../util/randomRange';
import parseStackAndGenerate from './parseStackAndGenerate';

const telegramHandler = async (openai: OpenAIApi) => {
    const bot = new Telegraf(process.env.TELEGRAM_KEY as string)

    const messageStack: Array<Array<string>> = []
    const stackSize = 20
    const chance = 1

    bot.on('text',async (ctx) => {
        //console.log("CTX: ", ctx)
        messageStack.push([ctx.from.first_name, ctx.message.text])
        if (messageStack.length > stackSize) messageStack.shift()

        if (randomRange(0, 100) <= chance * 100) {
            console.log(123123)
            let answer = await parseStackAndGenerate(openai, messageStack) as string

            if (answer.includes(":")) {
                answer = answer.split(":")[1]
            }

            bot.telegram.sendMessage(ctx.chat.id, answer )
        }
    })

    bot.launch()
}

export default telegramHandler