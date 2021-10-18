<h1 align="center">Boilerplate API Node.Js com Express</h1>
<div align="center">
    Boilerplate for Node Js Api with Express
</div>

## Clone

```sh
    https://github.com/CaioQueirozIFCE/boilerplate-api-node-js.git .
```
## Install

```sh
   With the cloned project, run yarn install to install all dependencies listed in package.json.
```
## Features

- **Docker support**
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/sirrodgepodge/morgan-body)
- **Error handling**: centralized error handling mechanism
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Running dev :rocket:

```sh
   yarn dev:server
```
## Running build :artificial_satellite:

```sh
   yarn build
```

## Docker :whale:

```bash
# run docker container in development mode
yarn docker:dev
# run docker container in production mode
yarn docker:prod

```
## Project Structure

```
src\
 |--app\                # Layer related to project infrastructure
    |--container\       # File to generate injectables (dependency injections): tsyringe
    |--errors\          # Class for managing global errors
    |--http             # Infrastructure layer related to http protocol
        |--middlewares  # Custom express middlewares
        |--server.ts    # Express app
    |--routes\          # Routes
    |--utils\           # Utility classes and functions
        |--validates.ts # Utility functions that help in project structure
        |--debugfiles\  # debug utility
 |--config\             # Environment variables and configuration related things
 |--logs\               # Application log files

```
## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
#Name App
APP_NAME=boilerplate-node
# Port number
APP_PORT=3333
#Jwt key's
JWT_SECRET=
EXPIRESINJWT=
#Bcrypt key's
HASH_PASSWORD=
HASH_REQUEST=
# SMTP configuration options for the email service
MAIL_MAILER=
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=
MAIL_FROM_ADDRESS=
MAIL_FROM_NAME=

```

## License

**The MIT License (MIT)**

Copyright © 2021 Caio Queiroz
