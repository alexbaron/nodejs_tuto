FROM node:14

WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app
COPY ./src/package*.json /usr/src/app/

RUN DEBIAN_FRONTEND=noninteractive apt-get update -q \
    && DEBIAN_FRONTEND=noninteractive apt-get install -qq -y \
    vim \
    && rm -rf /var/lib/apt

RUN npm install

COPY . .

EXPOSE 8080

# en mode dev avec nodemon
CMD [ "npm", "run", "start.dev" ] 
# CMD ["node","node/server.js"] =< en prod

