FROM node:6.9.1
ADD package.json .
ADD fbautoreply.js .
RUN npm install
ENTRYPOINT ["node", "fbautorespond.js"]
