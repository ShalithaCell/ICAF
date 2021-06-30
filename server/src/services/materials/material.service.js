const { ResearchMaterialSchema } = require("../../models");

const MaterialService = {
    saveResearchFile : async (materialObj) =>
    {
        const material = new ResearchMaterialSchema({
            category      : materialObj.category,
            title         : materialObj.title,
            publisherName : materialObj.publisherName,
            description   : materialObj.description,
            publishDate   : materialObj.publishDate,
            isActive      : true,
            isApproved    : false,
            fileName      : materialObj.fileName,
            user          : materialObj.user,
        });

        const data = await material.save();

        return data;
    },
};

module.exports = MaterialService;
