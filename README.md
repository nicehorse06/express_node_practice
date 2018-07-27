參考網址：[URL](https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09)

[《Node.js 包教不包会》 by alsotang](https://github.com/alsotang/node-lessons)

運行 server 命令為下列指令，並啟動於 3000 port
```
npm run server
```

##  用到的套件

* mongoose套件為 moongoDB官方的 ORM
* body-parser 為解析 HTTP requests的套件on
* utility 用來作 md5 加密
* superagent 用來發 http 請求，之後可以研究用 node 原生的 request 套件來實作
* cheerio 為 node 版的 jQuery，可以把 HTML 的 string 用 jQuery 的方式解析

## 檔案架構

* An app.js for configuring the application, 
* db.js for specifying the connection to the database
* server.js for spinning up the node server on a specific port of your choice
* User.js for mongo Schema for User
* UserController.js  contain the actions which control the flow of data into and from your database

## HTTP 相關

* only HTTP methods which have a body are POST and PUT. Remember that
* POST man 使用時，put 和 POST 的body參數要使用 x-www-form-urlencoded

## 其他提示

npm list 可以看到包的依賴關係