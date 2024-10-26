from flask import Flask, request, jsonify
from tts import create_speech
import os

app = Flask(__name__)

@app.route('/tts', methods=['POST'])
def tts():
    data = request.get_json()
    text = data.get('text')
    if not text:
        return jsonify({'error': 'Text input is required'}), 400

    speech_file_path = os.path.join('static', 'speech.mp3')
    response = create_speech(text, speech_file_path)
    if response:
        return jsonify({'speech_file': speech_file_path})
    else:
        return jsonify({'error': 'Failed to create speech file'}), 500

if __name__ == '__main__':
    app.run(debug=True)
