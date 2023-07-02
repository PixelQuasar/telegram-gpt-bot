import { OpenAIApi } from "openai"

const generateMessage = async (openai: OpenAIApi, message: string): Promise<string | undefined> => {
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: message}, {role: "system", content: "ты ведешь себя как фэнтезийный робот"}],
        })

        return chatCompletion.data.choices[0].message?.content
}

export default generateMessage
