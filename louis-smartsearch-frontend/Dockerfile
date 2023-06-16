FROM node

WORKDIR /code

COPY build ./build

RUN npm install -g serve

ENTRYPOINT serve -s build
