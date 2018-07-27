const utility = require('utility');
const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})

// app.get 第一個參數為路徑，第二個參數為 handler 函數
app.get('/', (req, res)=>{
    
    res.send('hello world')
})

// 把帶入的參數q用md5加密回傳
app.get('/encode', (req, res)=>{
    // 從 get 中取出變數 q
    //如果是 post 則從body取變數，需要用到 body-parser 套件
    let q = req.query.q;

    // 使用 md5 加密
    let md5_value = utility.md5(q)
    
    res.send(`${q} 的md5加密結果為: ${md5_value}`)
})