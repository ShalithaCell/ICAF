const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./api');
const { databaseInitializer } = require('./services');

// init the database connection.
databaseInitializer();

const app = new Koa();

app.use(koaBody());

// Use the Router on the sub route /books
app.use(router());

// Bootstrap the server
app.listen(5000, () =>
{
    console.log('server stared with port 5000');
});
