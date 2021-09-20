FROM node:14

WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app
COPY package*.json /usr/src/app/

RUN npm install

COPY . .

EXPOSE 8080

# en mode dev avec nodemon
CMD [ "npm", "run", "start.dev" ] 
# CMD ["node","node/server.js"] =< en prod

