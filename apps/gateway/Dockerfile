FROM oven/bun:1.2.5-alpine

RUN apk add --no-cache procps

WORKDIR /usr/src/app

COPY packages/common ./packages/common
COPY apps/gateway apps/gateway
COPY bun.lock .
COPY package.json .
COPY turbo.json .

ENV PORT=3000
ENV NATS_SERVERS=nats://nats:4222

RUN bun install

EXPOSE 3000
