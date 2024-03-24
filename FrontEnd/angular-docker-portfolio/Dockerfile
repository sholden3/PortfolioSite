# Stage 1: Compile and Build angular codebase

# We use the alpine linux build which is a security-oriented, lightweight linux distro
FROM node:alpine as build

# Set the working directory
WORKDIR /usr/local/app

# Add source code to app. Grab all source code in current directory.
COPY ./ /usr/local/app/

# Install all dependencies from package.json file in angular project.
RUN npm install

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image with the alpine linux distro
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /usr/local/app/dist/angular-docker-portfolio /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# CMD ["ng", "serve", "--host", "0.0.0.0"]