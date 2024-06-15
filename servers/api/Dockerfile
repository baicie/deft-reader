FROM node:20.10.0

COPY dist /dist
COPY static /static
COPY package.json /package.json
COPY .env /.env

RUN npm install pnpm -g
RUN pnpm install

EXPOSE 3001

CMD ["node", "./dist/main.js"]