FROM node:12.9.1-alpine as node
COPY . /shlink-api-spec
RUN cd /shlink-api-spec && \
    npm install && \
    npm run export && \
    rm -r out/404.html

FROM nginx:1.17.3-alpine
LABEL maintainer="Alejandro Celaya <alejandro@alejandrocelaya.com>"
RUN rm -r /usr/share/nginx/html
COPY --from=node /shlink-api-spec/out /usr/share/nginx/html
