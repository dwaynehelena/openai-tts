import unittest
from unittest.mock import patch, MagicMock
import openai
from pathlib import Path
import logging

class TestTTS(unittest.TestCase):

    @patch('openai.Audio.create')
    def test_speech_creation_success(self, mock_create):
        # Mock the response of the openai.Audio.create function
        mock_response = MagicMock()
        mock_response['audio'] = b'Test audio content'
        mock_create.return_value = mock_response

        # Call the function to create speech
        from tts import create_speech
        speech_file_path = Path(__file__).parent.parent / "speech.mp3"
        create_speech(speech_file_path)

        # Check if the speech file was created
        self.assertTrue(speech_file_path.exists())

        # Check if the speech file content is correct
        with open(speech_file_path, 'rb') as f:
            content = f.read()
            self.assertEqual(content, mock_response['audio'])

    @patch('openai.Audio.create')
    def test_speech_creation_failure(self, mock_create):
        # Mock the response of the openai.Audio.create function to raise an error
        mock_create.side_effect = openai.error.OpenAIError("Test error")

        # Call the function to create speech
        from tts import create_speech
        speech_file_path = Path(__file__).parent.parent / "speech.mp3"

        with self.assertLogs(level='ERROR') as log:
            create_speech(speech_file_path)
            self.assertIn("An error occurred while creating the speech: Test error", log.output[0])

if __name__ == '__main__':
    unittest.main()
