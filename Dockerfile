FROM node:14-alpine

WORKDIR /app
COPY package.json ./
RUN yarn
COPY ./ ./
RUN yarn build
RUN rm -rf ./src

CMD ["yarn", "start"]