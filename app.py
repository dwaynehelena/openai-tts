from flask import Flask, render_template, request, send_file
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
    create_speech(text, speech_file_path)
    return send_file(speech_file_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
