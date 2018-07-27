// 此檔案的主要功用為整合 express server、db、controller
const express = require('express')
const db = require('./db');

const app = express();

var UserController = require('./user/UserController');

// tell route /users mapping to /
// use 為一 middleware 告訴 route 所有 /users 轉址到 /
// 也就是 url/users 對應到 UserController 中的 '/'
app.use('/users', UserController);

module.exports = app;