const Router = require('koa-router');
const StatusCodes = require('http-status-codes');
const AuthRequestType = require('../../types/auth/AuthRequestType');

// Prefix all routes with: /auth
const router = new Router({
    prefix : '/auth',
});

// Routes will go here

// user sign in method
router.post('/', (ctx, next) =>
{
    const request = Object.setPrototypeOf(ctx.request.body, AuthRequestType.prototype);
    // Check if any of the data field not empty

    if (!request.isValid())
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;
        ctx.body = 'Please enter username and password';
    }
    else
    {
        ctx.response.status = StatusCodes.OK;
        ctx.body = 'ok';
    }
    next().then();
});

module.exports = router;
