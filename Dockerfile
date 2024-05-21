FROM node:latest 

WORKDIR /app

COPY package*.json ./
COPY ./src/database/sql.sql ./

RUN npm install
RUN npm install -g npm@10.8.0

COPY . .

EXPOSE 3333

CMD ["npm", "start"]