import sys
import openai
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def create_speech(text, speech_file_path):
    try:
        response = client.audio.transcriptions.create(
            text=text,
            model="whisper-1"
        )
        with open(speech_file_path, "wb") as audio_file:
            audio_file.write(response['audio'])
        print("Audio file created successfully.")
        return response
    except openai.OpenAIError as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python tts.py <text> <path_to_speech_file>")
        sys.exit(1)

    text = sys.argv[1]
    speech_file_path = sys.argv[2]
    create_speech(text, speech_file_path)
