import os
from dotenv import load_dotenv
import chainlit as cl
from openai import AsyncOpenAI

#Load environment variables
load_dotenv()

#Initialize AsyncOpenAI client
client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@cl.on_message
async def main(message: cl.Message):
    try:
        response = await client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": message.content}]
        )

        await cl.Message(
            content=response.choices[0].message.content
        ).send()

    except Exception as e:
        await cl.Message(
            content=f"Error: {str(e)}"
        ).send()