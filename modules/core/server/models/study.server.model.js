var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var studySchema = new Schema({
  study_name: {
    type: String
  },

}, { strict: false, minimize: false }

);

var Study = mongoose.model('Study', studySchema);

module.exports = Study;
