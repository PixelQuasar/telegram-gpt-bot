import dotenv from "dotenv";
import telegramHandler from "./telegraf/telegramHandler";
import openaiClient from "./chatgpt/openaiClient";
import randomRange from "./util/randomRange";
dotenv.config()

const init = async () => {
    try {
        const openai = await openaiClient()

        telegramHandler(openai)
    }
    catch (error) {
        console.log("INDEX ERROR:", error)
    }

}

init()
