var Koa = require('koa')
var router = require('koa-router')();
var path = require('path');
var KoaStatic = require('koa-static');

var app = new Koa()

app.use(KoaStatic(path.join( __dirname, './src/my-app/build')));

router.get('/test', async function(ctx, next) {
  ctx.response.body = 'hello jenkins'
})

app.use(router.routes())

app.listen({
  port: 3000
}, function() {
  console.log(`🚀 Server ready at http://localhost:3000`)
})