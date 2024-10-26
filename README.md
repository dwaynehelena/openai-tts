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

## Running CTRF Annotations

To run CTRF annotations, follow these steps:

1. Ensure that the virtual environment is activated.

2. Run the CTRF annotations:

```bash
npx github-actions-ctrf path-to-your-ctrf-report.json
```

## GitHub Action Workflow for CTRF Annotations

This project includes a GitHub Action workflow for running CTRF annotations. The workflow is defined in the `.github/workflows/greetings.yml` file and is triggered on push, pull request, and issue events.

## Contributing to the Project

We welcome contributions to this project! If you would like to contribute, please follow these guidelines:

1. **Fork the repository**: Click the "Fork" button at the top right corner of the repository page to create a copy of the repository in your GitHub account.

2. **Clone your forked repository**: Clone the forked repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/flaskapp.git
cd flaskapp
```

3. **Create a new branch**: Create a new branch for your changes using the following command:

```bash
git checkout -b your-branch-name
```

4. **Make your changes**: Make the necessary changes to the codebase.

5. **Commit your changes**: Commit your changes with a descriptive commit message using the following command:

```bash
git commit -m "Description of your changes"
```

6. **Push your changes**: Push your changes to your forked repository using the following command:

```bash
git push origin your-branch-name
```

7. **Create a pull request**: Go to the original repository on GitHub and create a pull request from your forked repository. Provide a clear description of your changes and the purpose of the pull request.

## Running Tests and Checking Code Coverage

To run tests and check code coverage, follow these steps:

1. Ensure that the virtual environment is activated.

2. Run the tests using the following command:

```bash
pytest
```

3. Check the code coverage using the following command:

```bash
coverage run -m pytest
coverage report
```

4. Generate a code coverage report in XML format using the following command:

```bash
coverage xml
```

5. Optionally, you can upload the code coverage report to a service like Codecov using the following command:

```bash
codecov -t your-codecov-token
```
