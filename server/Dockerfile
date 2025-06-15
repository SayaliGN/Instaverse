# server/Dockerfile

FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# Install nodemon globally (already in your package.json too)
RUN npm install -g nodemon

COPY . .

# Default command
CMD ["nodemon", "index.js"]
