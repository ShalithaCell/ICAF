const { RegistrationViewSchema } = require("../../models");

const RegistrationService = {
    find : async () =>
    {
        const data = await RegistrationViewSchema
            .findOne({ isActive: true, isApproved: true });

        if (!data)
        {
            return '';
        }

        return data;
    },
    create : async (data) =>
    {
        const registrationView = new RegistrationViewSchema({
            description : data,
            isActive    : true,
            isApproved  : false,
        });

        // remove old edits
        await RegistrationViewSchema.remove({ isActive: true, isApproved: false });

        // create user
        const dataSaved = await registrationView.save();

        return {
            created : true,
            data    : dataSaved,
        };
    },
};

module.exports = RegistrationService;
