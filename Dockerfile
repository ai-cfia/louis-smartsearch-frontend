FROM mcr.microsoft.com/devcontainers/javascript-node:0-20
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

COPY --from=0 build ./build
RUN npm install -g serve

ENTRYPOINT serve -s build