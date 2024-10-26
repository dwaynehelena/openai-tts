from pathlib import Path
import openai
import logging

# Set your OpenAI API key directly in the script

# Configure logging
logging.basicConfig(level=logging.INFO)

# Define the path for the output speech file
speech_file_path = Path(__file__).parent / "speech.mp3"

try:
    # Create the speech
    response = openai.Audio.speech.create(
        model="tts-1",
        voice="alloy",
        input="Ladies and gentlemen, Welcome to gptswarm.net"
    )
    # Save the speech to a file
    response.stream_to_file(speech_file_path)
    logging.info("Speech created and saved successfully.")
except openai.error.OpenAIError as e:
    logging.error(f"An error occurred while creating the speech: {e}")
