FROM python:3.11-slim

ARG USER=vscode
ARG DEBIAN_FRONTEND=noninteractive

# Install necessary packages
RUN apt-get update \
    && apt-get install -y --no-install-recommends sudo \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user
RUN useradd -m -s /bin/bash ${USER} \
    && echo "${USER} ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/${USER} \
    && chmod 0440 /etc/sudoers.d/${USER}

# Set the user
USER ${USER}

# Set the working directory
WORKDIR /workspace

# Install Python dependencies
COPY requirements.txt /workspace/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /workspace/
