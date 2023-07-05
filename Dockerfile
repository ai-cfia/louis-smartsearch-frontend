# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/devcontainers/javascript-node:0-20 AS build
WORKDIR /code
COPY ./src ./src
COPY ./public ./public
COPY package.json .
COPY package-lock.json .
RUN npm install --include=dev
RUN npm run build
RUN CI=1 npm run test

FROM node

WORKDIR /code

COPY --from=build /code/build ./build
RUN npm install -g serve

ENTRYPOINT serve -s build