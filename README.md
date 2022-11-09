# 🖥️🔮 tarot-dev-back 🔮🖥️

## Description

The principal function for this server is manage the SigIn/LogIn, provide service about tarot cards.

## How to install

1. Clone the repository 
after continue configure your variables take the `.env.example` and rename for `.env`. Then edit `.env` whit your enviroment variables

before you continue you need mongodb 
you can install manually in your computer or you can dockerize your mongodb 

see the next steps

### mongo 🤖

first install [docker](https://www.docker.com/products/docker-desktop/)

second create a container whit [mongo image](https://hub.docker.com/_/mongo) in the link explain how run a docker container in local

third, you can use docker compose file in repositorie just need type before you laun the server

```bash
yarn db-start
```
this function run a container whit mongo in dettached mode

2. in the root of the project run a terminal and execute the next command:
```bash
yarn
```
set enviroment variables

3. wake up the backend app
```bash
yarn start
```

if you have any problem please take a look to your enviroment variables, check your database is running.


## Services 🚽
the application have 3 principal services tarot cards, user and authentication

### Authentication 🔐

with the authentication service we log or sign in a user, in both methods we get a bearer token to authenticate in the following request



### 🎴 Tarot Cards 🎴
in tarot card we have a usual crud but the application count whit another methods to manage the associate images of tarot cards

- the middlewares
  - save image in server 
  - upload to cloudinary, in this method we receive an url whit image direction
  - delete image in localhost

### User 🙍‍♀️🙍‍♂️

In this case we get different method to check some things about the user or update some fields
- check by email
- setVote
- setUploadImage


## Technology 🖥
The core of the app is build in [nodejs](https://nodejs.org/en/), but the project use some libraries like:

- express, framework to create API-REST  
- mongodb, non relational DB 
- dotenv, manage our enviroment variables in a simple file
- multer, manage incoming files,
- jsonwebtoken and bcrypt to manage security

## next steeps 🦶

automate how reset the fields isVoted and  isTarotCardSend in user
implement Rest-API for tarot card puntuation



## use free and share

made whit 💜 by `Adriel Arocha Oronoz`

