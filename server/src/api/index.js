const combineRouters = require('koa-combine-routers');
// auth routes
const authRouter = require('./v1/auth/authRouter');

const router = combineRouters(
    authRouter,
);

module.exports = router;
