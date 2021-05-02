const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./api');
const { dbContext, exceptionService } = require('./services');

// init the database connection.
dbContext();

const app = new Koa();

app.use(koaBody());

// register generic error handler middleware
app.use(exceptionService.errorHandler);

// register json error handler middleware
app.use(exceptionService.jsonErrorHandler);

// Use the Router on the sub route /books
app.use(router());

// Bootstrap the server
app.listen(process.env.PORT || 5000, () =>
{
    console.log('server stared with port 5000');
});
