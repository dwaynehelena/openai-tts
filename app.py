from flask import Flask, render_template, request, jsonify, send_from_directory
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
            return jsonify({'message': 'Speech created successfully', 'speech_file': url_for('download_speech', filename='speech.mp3')})
        else:
            return jsonify({'error': 'Failed to create speech'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/download/<filename>')
def download_speech(filename):
    return send_from_directory(directory='.', filename=filename)

if __name__ == '__main__':
    app.run(debug=True)
