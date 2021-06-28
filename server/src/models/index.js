const User = require('./user/user');
const Role = require('./role/role');
const RefreshToken = require('./user/refreshToken');
const Token = require('./token/token');
const HomepageConfig = require('./homepage/homepage');
const PaperSubmissions = require('./paperSubmissions/paperSubmissions');
const RegistrationViewSchema = require('./registrationView/registrationView');

module.exports = {
    User,
    Role,
    RefreshToken,
    Token,
    HomepageConfig,
    PaperSubmissions,
    RegistrationViewSchema,
};
