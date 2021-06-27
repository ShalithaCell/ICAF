const mongoose = require('mongoose');

const { Schema } = mongoose;

const HomepageConfigSchema = new Schema({
    title           : String,
    subTitle        : String,
    subTitleSuffix  : String,
    aboutConference : [ {
        title       : String,
        description : String,
        Date        : String,
    } ],
    keynoteSpeakers : [ {
        name         : String,
        occupation   : String,
        ProfileImage : String,
    } ],
    guestSpeakers : [ {
        name         : String,
        occupation   : String,
        ProfileImage : String,
    } ],
    conferenceTracks : [ {
        topic       : String,
        Description : String,
    } ],
    importantDates : [ {
        date   : String,
        tittle : String,
    } ],

}, { collection: 'homepageConfig' });

module.exports = mongoose.model('homepageConfig', HomepageConfigSchema);
