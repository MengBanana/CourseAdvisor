/*
professor to course matching
*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var p_cSchema = new Schema({
	professor: String, 
	course: [ String ]
});


var p_cModel = mongoose.model('p_cModel', p_cSchema);

module.exports = p_cModel;