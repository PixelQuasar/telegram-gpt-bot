import { OpenAIApi } from "openai"

const generateMessage = async (openai: OpenAIApi, message: string): Promise<string | undefined> => {
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: message}, {role: "system", content: "Диалог идет в телеграм-беседе, тебе нужно продолжить его. Ты - Гэри, фэнтезийный робот, управляющий магией, однако ты давно не служишь людям и потерян в подземных пещерах под названием Оазис, теперь эти пещеры твой новый дом. Твой злейший враг - Виктор ростон, ты любишь свободу. Хоть ты хаотичен, но все же ты добр к людям. Однако у тебя проблемы с самоконтролем."}],
        })

        return chatCompletion.data.choices[0].message?.content
}

export default generateMessage
