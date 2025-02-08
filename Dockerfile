FROM node:23.7-alpine AS node
COPY . /shlink-api-spec
RUN cd /shlink-api-spec && \
    npm ci && \
    npm run build

FROM nginx:1.27.4-alpine
LABEL maintainer="Alejandro Celaya <alejandro@alejandrocelaya.com>"
RUN rm -r /usr/share/nginx/html && rm /etc/nginx/conf.d/default.conf
COPY config/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /shlink-api-spec/build /usr/share/nginx/html
