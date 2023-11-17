from pathlib import Path
import openai

# Set your OpenAI API key directly in the script
openai.api_key = ''

# Define the path for the output speech file
speech_file_path = Path(__file__).parent / "speech.mp3"

# Create the speech
response = openai.Audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="Ladies and gentlemen, Welcome to gptswarm.net"
)

# Save the speech to a file
response.stream_to_file(speech_file_path)


