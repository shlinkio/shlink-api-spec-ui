FROM node:12.9.1-alpine as node
COPY . /shlink-api-spec
RUN cd /shlink-api-spec && \
    npm install && \
    npm run export && \
    rm -r out/index

FROM nginx:1.17.3-alpine
LABEL maintainer="Alejandro Celaya <alejandro@alejandrocelaya.com>"
RUN rm -r /usr/share/nginx/html && rm /etc/nginx/conf.d/default.conf
COPY --from=node /shlink-api-spec/out /usr/share/nginx/html
COPY assets/nginx.conf /etc/nginx/conf.d/default.conf
