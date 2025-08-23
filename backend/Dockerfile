# Use the Python 3 alpine official image
# https://hub.docker.com/_/python
FROM python:3.11
ENV STAGE=prod
ENV BACKEND_PORT=8080
ENV PYTHONPATH="/app/src:${PYTHONPATH}"
RUN echo ${PYTHONPATH}

# Create and change to the app directory.
WORKDIR /app

# Install project dependencies
# Only requirements.txt is copied to leverage Docker cache
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy local code to the container image.
COPY . .


# Run the web service on container startup.
# if production, use hypercorn else just run bash
RUN chmod +x ./entrypoint.sh
CMD ["./entrypoint.sh"] 