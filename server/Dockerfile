# 1. Base image
FROM node:20

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 4. Copy source code
COPY . .

# 5. Default command (optional here; overridden by docker-compose)
CMD ["npm", "start"]