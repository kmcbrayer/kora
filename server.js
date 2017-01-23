
var koa = require('koa');
var send = require('koa-send');
var router = require('koa-router')();
var serve = require('koa-static');

var app = module.exports = koa();

//put static files in /public
app.use(serve(__dirname + '/public'));

// example rest endpoints
router.get('/api/whatever', function *(){
    this.body = 'hi from get';
});
router.post('/api/whatever', function *(){
    this.body = 'hi from post'
});

app.use(function* index(){
    yield send(this, "./index.html");
});

app.use(router.routes());

app.listen(3000);

console.log('listening on port 3000');
