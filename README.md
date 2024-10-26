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

## Running the Code

To run the application, follow these steps:

1. Run the application:

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

To run CTRF annotations, follow these steps:

1. Run the CTRF annotations:

```bash
npx github-actions-ctrf report.json
```

## GitHub Action Workflow for CTRF Annotations

This project includes a GitHub Action workflow for running CTRF annotations. The workflow is defined in the `.github/workflows/greetings.yml` file and is triggered on push, pull request, and issue events.

## Addressing OpenSSL Error

If you encounter the "error:0308010C:digital envelope routines::unsupported" error, it is likely due to compatibility issues between OpenSSL versions and Node.js. To resolve this, you can set the `NODE_OPTIONS` environment variable as follows:

### On Unix-based systems (Linux, macOS)

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

### On Windows

```cmd
set NODE_OPTIONS=--openssl-legacy-provider
```

Alternatively, you can add this environment variable to your `package.json` scripts to ensure it is set whenever you run your application.
