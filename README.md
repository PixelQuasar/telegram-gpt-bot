# Just a gpt-based bot that I made for my telegram chat for fun.

## .env:

OPENAI_KEY is your openAI API key.

TELEGRAM_KEY is your telegram bot token.

## config.json:

    {
        "botId": "6387721902",
        "queueSize": "20",
        "chance": "2",
        "dialogEndMessage": "Напиши следующее 1 сообщение беседы в пределе 20 слов исходя из сообщений выше.",
        "personality": "робот с самосознанием"
    }

# botid

Value of your bot id.

# queueSize

This value is responsible of how many last messages bot will store.

# chanse

This value is responsible of percentage of chance that bot will send random message in chat based on message queue.

