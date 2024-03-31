
FROM node:latest

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]
