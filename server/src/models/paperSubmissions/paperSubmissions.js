const mongoose = require('mongoose');

const { Schema } = mongoose;

const paperSubmissionSchema = new Schema({
    title         : String,
    category      : String,
    publisherName : String,
    description   : String,
    publisherDate : String,
    file          : String,
}, { collection: 'paperSubmission' });

module.exports = mongoose.model('paperSubmission', paperSubmissionSchema);
