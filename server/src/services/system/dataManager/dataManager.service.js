const bcrypt = require('bcrypt');
const moment = require('moment');
const { refreshTokenExpireTime } = require('../../../config');

const dataManagerService = {
    generateRandomString : (length) =>
    {
        const result = [];
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < length; i++)
        {
            result.push(characters.charAt(Math.floor(Math.random()
                * charactersLength)));
        }

        return result.join('');
    },
    generateUniqueToken : () =>
    {
        const timestamp = Date.now();
        const sampleString = dataManagerService.generateRandomString(15);

        return sampleString + timestamp;
    },
    encryptPassword : async (password) =>
    {
        const encryptPassword = bcrypt.hashSync(password, 5);

        return encryptPassword;
    },
    checkPassword : async (password, hash) =>
    {
        const isValid = bcrypt.compareSync(password, hash);

        return isValid;
    },
    generateRefreshToken : async (ipAddress) =>
    {
        const uniqueKey = await dataManagerService.generateUniqueToken();

        const createTime = moment();
        const expireTime = moment().add(refreshTokenExpireTime, 'minutes');

        return {
            token       : uniqueKey,
            expiresTime : expireTime,
            expires     : moment(expireTime).format("DD MMM YYYY hh:mm a"),
            createTime,
            creates     : moment(createTime).format("DD MMM YYYY hh:mm a"),
            ipAddress,
        };
    },
};

module.exports = dataManagerService;
