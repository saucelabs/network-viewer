# Using the Node image.js version 20
FROM node:22

# Install the working directory
WORKDIR /app

# Installing git
RUN apt-get update && apt-get install -y git

# Cloning the repository
RUN git clone https://github.com/saucelabs/network-viewer.git

# Go to the directory with the cloned repository
WORKDIR /app/network-viewer

# Install dependencies
RUN npm ci

# Go to the examples directory and install the dependencies
WORKDIR /app/network-viewer/examples
RUN npm install

# We return to the root directory of the repository
WORKDIR /app/network-viewer

# Building the project
RUN npm run build

# Exposing the port on which the application will run
EXPOSE 3000

# Launching the app
CMD [ "npm", "run", "start" ]
