FROM node:12 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:1.15
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder usr/src/app/build /usr/share/nginx/html
EXPOSE 80
# CMD nginx -g 'daemon off;'