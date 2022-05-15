FROM node:lts-alpine
RUN npm install -g http-server
RUN mkdir -p /home/frontend
WORKDIR /home/frontend
COPY . /home/frontend
RUN npm install -g npm@latest && npm install
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]
