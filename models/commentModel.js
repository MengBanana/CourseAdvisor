var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
	user: String,
	course: String,
	professor: String,
	review: String,
	recommen: Boolean,
	dislike: Number,
	like: Number
}, {timestamps: true});


var commentModel = mongoose.model('commentModel', commentSchema);

module.exports = commentModel;