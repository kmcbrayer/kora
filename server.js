
var koa = require('koa');
var send = require('koa-send');
var Router = require('koa-router');
var router = new Router();
var serve = require('koa-static');
var app = module.exports = koa();


//put static files in /public
app.use(serve(__dirname + '/public'));

// rest endpoints
// router.get('/api/whatever', function *(){
//     this.body = 'hi from get';
// });
// router.post('/api/whatever', function *(){
//     this.body = 'hi from post'
// });
//
// app
//   .use(router.routes())
//   .use(router.allowedMethods());

app.use(function* index(){
    yield send(this, "./index.html");
});


app.listen(3000);

console.log('listening on port 3000');
