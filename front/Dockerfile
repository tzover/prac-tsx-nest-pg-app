FROM node:14.15.4-slim
ENV CI true
COPY ./app/package.json /home/app/package.json
WORKDIR /home/app
RUN npm install