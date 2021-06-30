const { ObjectId } = require('mongoose').Types;
const { WorkshopsConfig } = require("../../models");

const WorkshopsService = {
    find : async () =>
    {
        const data = await WorkshopsConfig
            .findOne({ isActive: true, isApproved: true });

        if (!data)
        {
            return '';
        }

        return data;
    },
    findToBeApproved : async () =>
    {
        const data = await WorkshopsConfig
            .findOne({ isActive: true, isApproved: false });

        return data;
    },
    findAll : async () =>
    {
        const data = await WorkshopsConfig.find({});

        return data;
    },
    findById : async (id) =>
    {
        const data = await WorkshopsConfig.find({ _id: ObjectId(id) }).catch((err) =>
        {
            console.log(err);

            return null;
        });

        return data;
    },
    create : async (WorkshopsData) =>
    {
        try
        {
            if (!WorkshopsData)
            {
                return null;
            }

            const workshop = new WorkshopsConfig({
                topic       : WorkshopsData.topic,
                description : WorkshopsData.description,
                speakers    : WorkshopsData.speakers,
                isActive    : true,
                isApproved  : false,
            });

            await WorkshopsConfig.remove({ isActive: true, isApproved: false });

            // create user
            const data = await workshop.save();

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
    update : async (WorkshopsData) =>
    {
        try
        {
            if (!WorkshopsData)
            {
                return null;
            }
            // check already exists
            const existingItem = await WorkshopsService.findById(WorkshopsData._id);

            // console.log(`existingItem + ${existingItem}`);
            if (existingItem.length < 1) return null;

            const data = await WorkshopsConfig.updateOne(
                { _id: ObjectId(WorkshopsData._id) },
                {
                    $set : {
                        topic       : WorkshopsData.topic,
                        description : WorkshopsData.description,
                        speakers    : WorkshopsData.speakers,
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

module.exports = WorkshopsService;
