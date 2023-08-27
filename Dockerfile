FROM node:20.2.0 

WORKDIR /usr/src/app 

RUN npm install -g npm@9.7.1 && npm install create-next-app 


