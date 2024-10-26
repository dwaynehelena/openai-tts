import unittest
from unittest.mock import patch, MagicMock
import openai
from pathlib import Path
import logging

class TestTTS(unittest.TestCase):

    @patch('openai.Audio.speech.create')
    def test_speech_creation_success(self, mock_create):
        # Mock the response of the openai.Audio.speech.create function
        mock_response = MagicMock()
        mock_create.return_value = mock_response

        # Call the function to create speech
        from tts import create_speech
        create_speech()

        # Check if the speech file was created
        speech_file_path = Path(__file__).parent.parent / "speech.mp3"
        self.assertTrue(speech_file_path.exists())

    @patch('openai.Audio.speech.create')
    def test_speech_creation_failure(self, mock_create):
        # Mock the response of the openai.Audio.speech.create function to raise an error
        mock_create.side_effect = openai.error.OpenAIError("Test error")

        # Call the function to create speech
        from tts import create_speech

        with self.assertLogs(level='ERROR') as log:
            create_speech()
            self.assertIn("An error occurred while creating the speech: Test error", log.output[0])

if __name__ == '__main__':
    unittest.main()
