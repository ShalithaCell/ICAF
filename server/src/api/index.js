const combineRouters = require('koa-combine-routers');
// auth routes
const authRouter = require('./v1/auth/authRouter');
const applicationRouter = require('./application/applicationRouter');
const userRouter = require('./v1/user/userRouter');

const router = combineRouters(
    applicationRouter,
    authRouter,
    userRouter,
);

module.exports = router;
