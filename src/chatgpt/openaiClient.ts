import { Configuration, OpenAIApi } from 'openai'

const openaiClient = async (): Promise<OpenAIApi> => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_KEY
    })

    const openai = new OpenAIApi(configuration);

    return openai
}

export default openaiClient
