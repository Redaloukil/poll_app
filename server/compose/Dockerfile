FROM node:10-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm install 

COPY .env.example /app/.env.example

COPY . /app

CMD ["npm","start"]

EXPOSE 4000


