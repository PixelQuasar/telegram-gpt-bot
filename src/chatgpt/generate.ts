import { OpenAIApi } from "openai"

const generateMessage = async (openai: OpenAIApi, message: string): Promise<string | undefined> => {
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: message}],
        })

        return chatCompletion.data.choices[0].message?.content
}

export default generateMessage
