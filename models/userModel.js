const Joi = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15
    },

    firstname: {
        type: String,
    },
    lastname: String,
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    bio: String,
    image: String,
}, {timestamps: true});


function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    };

    return Joi.validate(user, schema);
}

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;
exports.validate = validateUser;



















