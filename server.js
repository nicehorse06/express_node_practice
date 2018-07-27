const app = require('./app')
const port = process.env.PORT || 3000
// 引入用來轉 md5 加密
const utility = require('utility');
// 用來發 http 請求的套件
const superagent = require('superagent');
// node 版的 jquery
const cheerio = require('cheerio');

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

// 用 superagent 和 cheerio 去抓取網頁內容
app.get('/crawler', (req, res, next)=>{
    // 指定去抓此網站的內容
    superagent.get('https://cnodejs.org/').end((err, sres) => {
        if(err){
            return next(err)
        }
        // sres.text存有get到的HTML，再用 cheerio.load() 載入
        // 之後就可以用 jquery 化的方法去處理這個 HTML
        let $ = cheerio.load(sres.text)
        let items = []
        $('#topic_list .topic_title').each(function (idx, element) {
            var $element = $(element);
            items.push({
              title: $element.attr('title'),
              href: $element.attr('href')
            });
        });
        res.send(items);
    })
})