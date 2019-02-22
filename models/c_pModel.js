/*
course to professor matching
*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var c_pSchema = new Schema({
	course: String,
    professor: [ String ]
});


var c_pModel = mongoose.model('c_pModel', c_pSchema);

module.exports = c_pModel;
