FROM node:12.16.3-alpine3.9 as builder

RUN mkdir -p /app
WORKDIR '/app'

COPY ./package*.json ./
RUN npm install

COPY . ./

RUN npm run build

FROM nginx

RUN apt update && apt upgrade && \
  apt install -y bash vim less curl iputils-ping dnsutils

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html