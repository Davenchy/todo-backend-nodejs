# Todo App Backend - NodeJS

This is a simple backend for a todo app.

It uses [Express](https://expressjs.com/) as a web server.

It uses [Mongoose](https://mongoosejs.com/) for database management.

## Install and Run

Clone the project using

```shell
git clone --depth 1 https://github.com/Davenchy/todo-backend-nodejs.git
cd todo-backend-nodejs
```

Install dependencies and run the server

```shell
npm install
npm start
```

## Environment Variables

The following environment variables are required:

> You could define your own values inside `.env` file.

- `MONGO_URI`: The URI for connecting to the database.
- `PORT`: The port to listen on.
