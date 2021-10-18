FROM node:alpine as node-backend-development

RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

FROM node:alpine as node-backend-prod

RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .