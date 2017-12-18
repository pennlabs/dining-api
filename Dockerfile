# Dockerfile for dining-api

FROM node:4.8.6

RUN apt-get update
RUN apt-get upgrade -y

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

EXPOSE 3000

CMD node server.js
