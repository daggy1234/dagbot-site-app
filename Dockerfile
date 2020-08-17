FROM node:12

COPY package*.json ./

RUN npm install

RUN npm install pm2 -g

COPY . .

RUN npm run build

COPY ./src/client ./dist/client

RUN cd ./dist/client && npm install && npm run build 

EXPOSE 4000

CMD ["pm2-runtime","./dist/app.js"]