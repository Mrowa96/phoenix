FROM node:18.16.1-alpine3.18 AS build

WORKDIR /app

COPY ["./package.json", "./package-lock.json", "./"]

RUN npm i

COPY . .

RUN npm run build

FROM node:18.16.1-alpine3.18 AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules

RUN npm prune

EXPOSE 3000

CMD ["node", "./dist/server/entry.mjs"]
