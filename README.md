# Project
[![CodeQL](https://github.com/dwaynehelena/openai-tts/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/dwaynehelena/openai-tts/actions/workflows/github-code-scanning/codeql)
[![Dependabot Updates](https://github.com/dwaynehelena/openai-tts/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/dwaynehelena/openai-tts/actions/workflows/dependabot/dependabot-updates)
[![Deploy to GitHub Pages](https://github.com/dwaynehelena/openai-tts/actions/workflows/deploy.yml/badge.svg)](https://github.com/dwaynehelena/openai-tts/actions/workflows/deploy.yml)

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
