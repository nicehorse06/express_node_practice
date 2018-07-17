const express = require('express')
const db = require('./db');

const app = express();

var UserController = require('./user/UserController');
// tell route /users mapping to /
app.use('/users', UserController);

module.exports = app;