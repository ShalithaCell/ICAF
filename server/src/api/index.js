const combineRouters = require('koa-combine-routers');
// auth routes
const authRouter = require('./auth');

const router = combineRouters(
    authRouter,
);

module.exports = router;
