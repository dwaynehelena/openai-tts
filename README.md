# FlaskApp

## Purpose of the Project

This project is a Flask web application that demonstrates the use of Flask framework to create a simple web application. The application includes basic functionalities such as routing, templates, and static files.

## Prerequisites and Dependencies

Before you can run this project, you need to have the following installed on your machine:

- Python 3.11
- pip (Python package installer)

You also need to install the required Python packages. You can do this by running the following command:

```bash
pip install -r requirements.txt
```

## Setting Up the Development Environment

To set up the development environment, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/dwaynehelena/flaskapp.git
cd flaskapp
```

2. Create a virtual environment:

```bash
python -m venv venv
```

3. Activate the virtual environment:

- On Windows:

```bash
venv\Scripts\activate
```

- On macOS and Linux:

```bash
source venv/bin/activate
```

4. Install the required dependencies:

```bash
pip install -r requirements.txt
```

## Running the Code

To run the Flask application, follow these steps:

1. Ensure that the virtual environment is activated.

2. Run the Flask application:

```bash
flask run
```

3. Open your web browser and navigate to `http://127.0.0.1:5000` to see the application in action.

## Running the TTS Script

To run the TTS script (`tts.py`), follow these steps:

1. Ensure that the virtual environment is activated.

2. Set your OpenAI API key in the `tts.py` script:

```python
openai.api_key = 'your-api-key'
```

3. Run the TTS script:

```bash
python tts.py
```

This will create a speech file named `speech.mp3` in the project directory.

## Running the TTS Script with Bash Script

To run the TTS script (`tts.py`) using the provided bash script (`run_tts.sh`), follow these steps:

1. Ensure that the virtual environment is activated.

2. Set your OpenAI API key in the `tts.py` script:

```python
openai.api_key = 'your-api-key'
```

3. Run the bash script:

```bash
./run_tts.sh
```

This will create a speech file named `speech.mp3` in the project directory.

## Running CTRF Annotations

To run CTRF annotations, follow these steps:

1. Ensure that the virtual environment is activated.

2. Run the CTRF annotations:

```bash
npx github-actions-ctrf report.json
```

## GitHub Action Workflow for CTRF Annotations

This project includes a GitHub Action workflow for running CTRF annotations. The workflow is defined in the `.github/workflows/greetings.yml` file and is triggered on push, pull request, and issue events.
