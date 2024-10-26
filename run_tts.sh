#!/bin/bash

# Activate the virtual environment
pip3 install -r requirements.txt
python3 -m venv venv
source venv/bin/activate

# Run the TTS script
python3 tts.py "$1"

