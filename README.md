# Agenda

A simple Nodejs API + Angularjs app built for a Dimed recruitment test.

The API was built on Nodejs, Expressjs, MongoDB (Mongoose) and others time saving little modules for node and front-end was built with Angularjs, it access the API and consumes the data, which is nothing more that a simple MongoDB collection.

## Requirements

- [Node and npm](http://nodejs.org);
- [MongoDB](https://www.mongodb.com/);
- Dont worry about DB, when you run the app, it will create the DB and its collection for you;
- An internet connection to access Angularjs CDN;

## Installation

1. Install the app with: `npm install`;
2. Start the server with: `node server.js`;
3. When you run `node server.js`, it will create a database on MongoDB called agenda-api, which is on `config/database.js` config file;
4. View in browser at `http://localhost:8080`.
