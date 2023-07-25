FROM node:18.16.1-alpine3.18 AS build

WORKDIR /app

ENV PORT=3000
ARG SITE

COPY . .

RUN npm i
RUN npm run build
RUN npm run check:all
RUN npm run test:ci
RUN sed -i "s@<SITE>@${SITE}@g" ./dist/robots.txt

FROM nginx:1.25.1-alpine AS runtime

ENV PORT=3000

COPY ./docker/nginx.conf /etc/nginx/conf.d/template
COPY --from=build /app/dist /usr/share/nginx/html

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

EXPOSE 3000
