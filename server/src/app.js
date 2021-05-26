const Koa = require('koa');
const koaBody = require('koa-body');
const KoaStatic = require('koa-static');
const cors = require('@koa/cors');
const logger = require('koa-logger');
// const loggerFile = require('koa-logging-middleware');
const router = require('./api');
const { dbContext, exceptionService, applicationDataSeeder } = require('./services');

// init the database connection.
dbContext();

const app = new Koa();

app
    .use(koaBody())
    .use(exceptionService.errorHandler) // register generic error handler middleware
    .use(exceptionService.jsonErrorHandler) // register json error handler middleware
    .use(cors()) // allowed CORS
    .use(router()) // Use the Router on the sub routes
    .use(KoaStatic('public')) // server statics
    .use(logger()) // enable logs
    // .use(loggerFile('./log/')) // log to file
    // Bootstrap the server
    .listen(process.env.PORT || 5000, () =>
    {
        console.log('server stared with port 5000');

        // application default data seeder
        applicationDataSeeder.seedRoles()
            .then((r) => console.info('role data seeder executed'));
        applicationDataSeeder.seedUsers()
            .then((r) => console.info('user data seeder executed'));

        console.log();
        console.log();
        console.log('=======================Server StartUp===========================');
        console.log('For more info :');
        console.log('\x1b[33m\x1b[4m%s\x1b[0m', 'http://localhost:5000/api/');
        console.log('=====================================================================');
        console.log();
    });
