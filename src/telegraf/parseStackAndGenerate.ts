import generateMessage from "../chatgpt/generate"
import { OpenAIApi } from 'openai';

const config = require('../../config.json')

const parseStackAndGenerate = async (openai: OpenAIApi, messageStack: Array<Array<string>>): Promise<string | undefined> => {
    const aplhabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ"

    const rawUserNames: Array<string> = messageStack.map((message) => message[0])
    const userList: Array<string> = rawUserNames.filter((user, index) => {
        return rawUserNames.indexOf(user) == index
    })
    const userMap: Array<Array<string>> = userList.map((user, index) => {
        return [user, aplhabet[index]]
    })

    const userNames: Array<string> = rawUserNames.map((user) => {
        return (userMap.find((userName) => {
            return userName[0] == user
        }) as any)[1]
    })
    const messages: Array<string> = messageStack.map((message) => message[1])

    const promptDialog: string = userNames.map((user, index) => {
        return  "Собеседник " + user + ": " + messages[index]
    }).join("\n\n")

    const promptString = promptDialog + "\n\n" + config.dialogEndMessage

    return await generateMessage(openai, promptString)
}

export default parseStackAndGenerate
