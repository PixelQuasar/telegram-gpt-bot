import { OpenAIApi } from "openai"

const config = require("../../config.json")

const generateMessage = async (openai: OpenAIApi, message: string): Promise<string | undefined> => {
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: message}, {role: "system", content: "Диалог идет в телеграм-беседе, тебе нужно продолжить его. " + config.personality}],
        })

        return chatCompletion.data.choices[0].message?.content
}

export default generateMessage
