const app = require('./app')
const port = process.env.PORT || 3000

const server =  app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/jimmy', (req, res)=>{
    res.send('hello jimmy')
})