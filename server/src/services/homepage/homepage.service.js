const { ObjectId } = require('mongoose').Types;
const { HomepageConfig } = require("../../models");
const HomepageConfigType = require('../../types/homepageConfig/homepageConfig');

const HomepageService = {
    findAll : async () =>
    {
        const data = await HomepageConfig.find({});

        return data;
    },
    findById : async (id) =>
    {
        const data = await HomepageConfig.find({ _id: ObjectId(id) }).catch((err) =>
        {
            // TODO: log error
            console.log(err);

            return null;
        });

        return data;
    },
    create : async (homepageData) =>
    {
        try
        {
            const request = Object.setPrototypeOf(homepageData, HomepageConfigType.prototype);

            if (!request.isValid())
            {
                return null;
            }

            const homepage = new HomepageConfig({
                title            : request.title,
                subTitle         : request.subTitle,
                subTitleSuffix   : request.subTitleSuffix,
                aboutConference  : request.aboutConference,
                keynoteSpeakers  : request.keynoteSpeakers,
                guestSpeakers    : request.guestSpeakers,
                conferenceTracks : request.conferenceTracks,
                importantDates   : request.importantDates,
            });

            // create user
            const data = await homepage.save();

            return {
                created : true,
                data,
            };
        }
        catch (e)
        {
            console.log(e);
            throw e;
        }
    },
    update : async (homepageData) =>
    {
        try
        {
            const request = Object.setPrototypeOf(homepageData, HomepageConfigType.prototype);

            if (!request.isValid())
            {
                return null;
            }
            // check already exists
            const existingItem = await HomepageService.findById(request._id);

            // console.log(`existingItem + ${existingItem}`);
            if (existingItem.length < 1) return null;

            const data = await HomepageConfig.updateOne(
                { _id: ObjectId(request._id) },
                {
                    $set : {
                        title            : request.title,
                        subTitle         : request.subTitle,
                        subTitleSuffix   : request.subTitleSuffix,
                        aboutConference  : request.aboutConference,
                        keynoteSpeakers  : request.keynoteSpeakers,
                        guestSpeakers    : request.guestSpeakers,
                        conferenceTracks : request.conferenceTracks,
                        importantDates   : request.importantDates,
                    },
                },
            );

            return data;
        }
        catch (e)
        {
            console.log(e);
            throw e;
        }
    },
};

module.exports = HomepageService;
