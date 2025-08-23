# Dockerfile for a Vite Application

# ---- Stage 1: Build ----
# This stage builds the Vite application and creates the static files.
FROM node:20
ENV FRONTEND_PORT=3000
ENV FRONTEND_STAGE=dev

# Set the working directory in the container
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
# Use 'npm ci' for cleaner, more reliable builds in CI/CD environments
RUN npm ci

# Copy the rest of the application source code
COPY . .

RUN echo ${FRONTEND_PORT}

# dynamically create bash script to run the correct command
RUN chmod +x ./entrypoint.sh
CMD ["./entrypoint.sh"] 