參考網址：[URL](https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09)

mongoose套件為 moongoDB官方的 ORM

body-parser 為解析 HTTP requests的套件on


An app.js for configuring the application, 
a db.js for specifying the connection to the database
a server.js for spinning up the node server on a specific port of your choice

User.js for mongo Schema for User
UserController.js  contain the actions which control the flow of data into and from your database

only HTTP methods which have a body are POST and PUT. Remember that

POST man 使用時
put 和 POST 的body參數要使用 x-www-form-urlencoded