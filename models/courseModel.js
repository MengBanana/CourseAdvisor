var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var courseSchema = new Schema({
	name: String,
	description: String
});


var courseModel = mongoose.model('courseModel', courseSchema);

module.exports = courseModel;