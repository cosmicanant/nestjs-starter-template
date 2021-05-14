## Description

[Nest](https://github.com/nestjs/nest) based  TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## APIs CURL

- POST /SIGNUP - USER REGISTRATION
```
curl -X POST \
  http://localhost:3000/auth/signup \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"username": "test1",
	"password": "Test123456"
}'
```

- POST /signin - GET JWT token
```
curl -X POST \
  http://localhost:3000/auth/signin \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"username": "test1",
	"password": "Test123"
}'
```

- GET ALL TASKS
```
curl -X GET \
  http://localhost:3000/tasks \
  -H 'authorization: Bearer __.__.HcSaMsX4X0BVywP0vzdXUol18oG-ua0-YgMNzbRHhlg' \
  -H 'cache-control: no-cache'
```

- GET TASK BY ID:
```
curl -X GET \
  http://localhost:3000/tasks/2 \
  -H 'authorization: Bearer __.___.HcSaMsX4X0BVywP0vzdXUol18oG-ua0-YgMNzbRHhlg' \
  -H 'cache-control: no-cache' \
```

- POST TASK
```
curl -X POST \
  http://localhost:3000/tasks \
  -H 'authorization: Bearer __._.WDHuNwmDaRQsVD0CycJ6Ajfkc2oxvYAqTufulQ5ccNg' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"title": "New1 user 2",
	"description": "Test1"
}'
```

- DELETE TASK
```
curl -X DELETE \
  http://localhost:3000/tasks/1 \
  -H 'authorization: Bearer __._.WDHuNwmDaRQsVD0CycJ6Ajfkc2oxvYAqTufulQ5ccNg' \
  -H 'cache-control: no-cache'
```

- PATCH TASK STATUS
```
curl -X PATCH \
  http://localhost:3000/tasks/2/status \
  -H 'cache-control: no-cache' \
  -H 'authorization: Bearer __._.WDHuNwmDaRQsVD0CycJ6Ajfkc2oxvYAqTufulQ5ccNg' \
  -H 'content-type: application/json' \
  -d '{
	"status": "IN_PROGRESS"
}'
```