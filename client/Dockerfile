# 1. Base image
FROM node:20

# 2. Set working directory
WORKDIR /app

# 3. Copy only package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 4. Copy remaining source code
COPY . .

# 5. Start the app
CMD ["npm", "start"]
