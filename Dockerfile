FROM node:20.17.0-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
