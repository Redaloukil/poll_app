FROM node:10-alpine

WORKDIR /src/app    

COPY package.json /src/app/package.json

COPY . /app

RUN npm install 

COPY .env.example /app/.env.example

CMD ["npm","start"]

EXPOSE 4000


