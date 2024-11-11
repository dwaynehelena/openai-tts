# Project
[![CodeQL](https://github.com/dwaynehelena/openai-tts/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/dwaynehelena/openai-tts/actions/workflows/github-code-scanning/codeql)
[![Dependabot Updates](https://github.com/dwaynehelena/openai-tts/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/dwaynehelena/openai-tts/actions/workflows/dependabot/dependabot-updates)
[![Deploy to GitHub Pages](https://github.com/dwaynehelena/openai-tts/actions/workflows/deploy.yml/badge.svg)](https://github.com/dwaynehelena/openai-tts/actions/workflows/deploy.yml)
[![Build Report](https://github.com/dwaynehelena/openai-tts/actions/workflows/build-report.yml/badge.svg)](https://github.com/dwaynehelena/openai-tts/actions/workflows/build-report.yml)

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

## Building and Deploying the Jekyll Site

To build and deploy the Jekyll site, follow these steps:

1. Install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

2. Build the Jekyll site:

```bash
jekyll build
```

3. Deploy the site to GitHub Pages:

The deployment is handled automatically by the GitHub Actions workflow defined in `.github/workflows/deploy.yml`. Simply push your changes to the `main` branch, and the site will be built and deployed to GitHub Pages.

Note: The Jekyll site uses the `minima` theme.

## Important Note for GitHub Pages

For the site to be correctly displayed on GitHub Pages, ensure that the `index.html` file is present in the root directory of the repository. This is necessary for GitHub Pages to recognize and serve the main page of the site.

## Build Success and Failure Rate Report

A new GitHub Action has been added to report the success and failure rates of the builds. This action runs on pull requests and pushes to the main branch. The results are posted as a comment on the PR.

To view the build success and failure rate report, check the badge at the top of this README or visit the [GitHub Actions page](https://github.com/dwaynehelena/openai-tts/actions/workflows/build-report.yml).

## Setting Up the Chatbot Feature

To set up the chatbot feature, follow these steps:

1. Ensure you have the required dependencies installed:

```bash
npm install
```

2. Add your OpenAI API key to the `.env.local` file:

```bash
OPENAI_API_KEY=your_openai_api_key
```

3. Start the development server:

```bash
npm run dev
```

## Using the Chatbot

To use the chatbot, follow these steps:

1. Open your browser and navigate to `http://localhost:3000`.
2. You will see the chatbot interface on the main page.
3. Type your message in the input field and click "Send".
4. The chatbot will respond to your message using OpenAI's API.
