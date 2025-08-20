# Dockerfile for a Vite Application

# ---- Stage 1: Build ----
# This stage builds the Vite application and creates the static files.
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
# Use 'npm ci' for cleaner, more reliable builds in CI/CD environments
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application
# This command runs the "build" script defined in your package.json
RUN npm run build

# ---- Stage 2: Production ----
# This stage sets up a lightweight Nginx server to serve the built files.
FROM nginx:stable-alpine AS production

# Set the working directory for Nginx
WORKDIR /usr/share/nginx/html

# Remove the default Nginx welcome page
RUN rm -f ./*

# Copy the built files from the 'build' stage
COPY --from=build /app/dist .

# Copy the custom Nginx configuration
# This file ensures that routing is handled correctly for a Single Page Application (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# The Nginx image has a default command to start the server,
# so we don't need to specify a CMD here.
