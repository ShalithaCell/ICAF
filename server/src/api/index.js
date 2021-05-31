const combineRouters = require('koa-combine-routers');

const authRouter = require('./v1/auth/authRouter');
const applicationRouter = require('./application/applicationRouter');
const userRouter = require('./v1/user/userRouter');
const roleRouter = require('./v1/role/roleRouter');
const homepageRouter = require('./v1/homepage/homepageRouter');


const router = combineRouters(
    applicationRouter,
    authRouter,
    userRouter,
    roleRouter,
    homepageRouter,
);

module.exports = router;
