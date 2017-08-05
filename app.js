const Koa = require('koa')
const app = new Koa()

app.use(require('koa-static')(__dirname + '/assets'));
app.use(require('koa-static')(__dirname + '/node_modules'));

app.listen('80')