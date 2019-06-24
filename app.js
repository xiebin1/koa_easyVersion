const Koa = require('koa')
const registerRouter  = require('./routes')
const bodyParse = require('koa-bodyparser');
const app = new Koa()


app.use(bodyParse())
app.use(registerRouter())

app.listen(3000)