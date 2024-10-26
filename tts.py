import sys
import openai
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def create_speech(speech_file_path):
    try:
        with open(speech_file_path, "rb") as audio_file:
            response = client.audio.transcriptions.create(
                file=audio_file,
                model="whisper-1"
            )
        print(response)
        return response
    except openai.OpenAIError as e:
        print(f"An error occurred: {e}")
    except FileNotFoundError as e:
        print(f"File not found: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python transcribe.py <path_to_speech_file>")
        sys.exit(1)

    speech_file_path = sys.argv[1]
    create_speech(speech_file_path)
