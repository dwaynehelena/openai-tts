from flask import Flask, render_template, request, jsonify
import os
from tts import create_speech

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tts', methods=['POST'])
def tts():
    text = request.form['text']
    speech_file_path = 'speech.mp3'
    try:
        response = create_speech(text, speech_file_path)
        if response:
            return jsonify({'message': 'Speech created successfully', 'speech_file': speech_file_path})
        else:
            return jsonify({'error': 'Failed to create speech'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
