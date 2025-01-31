# Use an official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on (assuming it's 3000)
EXPOSE 5804

# Define the command to run the application
CMD ["node", "app.js"]
