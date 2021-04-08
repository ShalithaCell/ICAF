function AuthRequestType()
{
    this.email = '';
    this.password = '';
}

AuthRequestType.prototype.isValid = function()
{
    return this.email.length > 0 && this.password.length > 0;
};

module.exports = AuthRequestType;
