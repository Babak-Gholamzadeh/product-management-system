FROM node:12.13-alpine

ADD ./company /src
WORKDIR /src
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]
