# Use the Python 3 alpine official image
# https://hub.docker.com/_/python
FROM python:3.11-alpine
ENV BACKEND_PORT=8080

# Create and change to the app directory.
WORKDIR /app

# Copy local code to the container image.
COPY . .

# Install project dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Run the web service on container startup.
CMD ["/bin/sh", "-c", "hypercorn main:app --bind \"[::]:${BACKEND_PORT}\""]