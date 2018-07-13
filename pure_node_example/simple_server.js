let http = require('http');

let server = http.createServer(
    (req,res) => {
        res.end('hello jimmy')
    }
)
console.log('listen on 127.0.0.1:5555')
server.listen(5555);
