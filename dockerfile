# Use an official Node.js image as the base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the application's port (adjust if needed)
EXPOSE 5000

# Set the default command to run the application
CMD ["npm", "run", "start:dev"]
