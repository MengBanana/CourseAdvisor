var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var professorSchema = new Schema({
    name: String,
    description: String,
    title: String,
    img: String
});


var professorModel = mongoose.model('professorModel', professorSchema);

module.exports = professorModel;