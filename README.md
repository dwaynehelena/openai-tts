# Project

## Purpose of the Project

This project demonstrates the use of Python to create a simple application. The application includes basic functionalities such as routing, templates, and static files.

## Prerequisites and Dependencies

Before you can run this project, you need to have the following installed on your machine:

- Node.js
- npm (Node package manager)

You also need to install the required npm packages. You can do this by running the following command:

```bash
npm install
```

The required npm packages are listed in the `package.json` file and include:

- react
- react-dom
- react-scripts

## Setting Up the Development Environment

To set up the development environment, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/dwaynehelena/openai-tts.git
cd openai-tts
```

2. Install the required dependencies:

```bash
npm install
```

2. Open your web browser and navigate to `http://localhost:3000` to see the application in action.

## Running the React Application

```bash
npm start
```

2. Open your web browser and navigate to `http://localhost:3000` to see the application in action.

## Running the TTS Script

To run the TTS script (`tts.py`), follow these steps:

1. Set your OpenAI API key as an environment variable:

```bash
export OPENAI_API_KEY='your-api-key'
```

2. Run the TTS script:

```bash
python tts.py <text> <path_to_speech_file>
```

This will create a speech file at the specified path.

## Running CTRF Annotations


## Addressing OpenSSL Error

### On Unix

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

### On Windows

```cmd
set NODE_OPTIONS=--openssl-legacy-provider
```

Alternatively, you can add this environment variable to your `package.json` scripts to ensure it is set whenever you run your application.
