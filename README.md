# Project

## Purpose of the Project

This project demonstrates the use of React Native to create a simple application. The application includes basic functionalities such as routing, templates, and static files.

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

## Applying Android Metal Style

To apply the Android metal style to the web UI, follow these steps:

1. Ensure that the `src/styles/android-metal.css` file is included in your project.
2. The `public/index.html` file should include a link to the `android-metal.css` file in the head section.
3. The `src/App.js` and `src/components/TTSForm.js` files should apply the Android metal style classes to the relevant elements.

The Android metal style provides a modern and sleek look to the web UI, enhancing the user experience.

## Server Response

Ensure that the server handling the `/tts` endpoint returns a JSON response. This will prevent errors such as "Unexpected token '<', "<!DOCTYPE "... is not valid JSON" from occurring when the server response is HTML instead of JSON.

## Entering the OpenAI Key in the Web UI

To use the OpenAI key in the web UI, follow these steps:

1. Open the application in your web browser.
2. Enter your OpenAI key in the input field labeled "Enter OpenAI Key".
3. Enter the text you want to convert to speech in the input field labeled "Enter text".
4. Click the "Submit" button to send the request to the server.
5. The server will process the request and return the speech file, which you can download from the provided link.

## Search Function

A new search function has been added to the application. This function allows you to search the `README.md` file for specific information.

### How to Use the Search Function

1. Open the application in your web browser.
2. Enter your search query in the input field labeled "Search README.md".
3. Click the "Search" button to perform the search.
4. The search results will be displayed below the search form.
