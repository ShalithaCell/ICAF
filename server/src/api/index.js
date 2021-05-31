const combineRouters = require('koa-combine-routers');
// auth routes
const authRouter = require('./v1/auth/authRouter');
const applicationRouter = require('./application/applicationRouter');
const homepageRouter = require('./v1/homepage/homepageRouter');

const router = combineRouters(
    applicationRouter,
    authRouter,
    homepageRouter,
);

module.exports = router;
