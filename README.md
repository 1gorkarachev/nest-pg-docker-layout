## Description

NestJs layout application with TypeORM

## Running the app

```bash

# copy env
$ cp .env.example .env

# app start
$ docker-compose up -d

# run migrations
$ docker-compose exec app npm run migration:run
```
