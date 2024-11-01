FROM node:lts

WORKDIR /app

COPY package*.json .

RUN pnpm install

COPY . .

EXPOSE 9001

CMD [ "node", "index.js" ]
