FROM node:12.13-alpine

ADD ./product /src
WORKDIR /src
EXPOSE 3001
RUN npm install
CMD ["npm", "start"]
