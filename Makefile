# Makefile for common development tasks

# Variables
PYTHON = python
PIP = pip
FLASK = flask
COVERAGE = coverage
PYLINT = pylint
FLAKE8 = flake8

# Default target
.DEFAULT_GOAL := help

# Targets
.PHONY: help
help: ## Show this help message
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-20s %s\n", $$1, $$2}'

.PHONY: install
install: ## Install the required dependencies
	$(PIP) install -r requirements.txt

.PHONY: test
test: ## Run the tests
	$(PYTHON) -m pytest

.PHONY: coverage
coverage: ## Run the tests and check code coverage
	$(COVERAGE) run -m pytest
	$(COVERAGE) report

.PHONY: lint
lint: ## Run static code analysis
	$(PYLINT) **/*.py
	$(FLAKE8) .

.PHONY: build
build: ## Build the project
	$(PIP) install -r requirements.txt

.PHONY: run
run: ## Start the development server
	$(FLASK) run
