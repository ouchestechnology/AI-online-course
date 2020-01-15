//Import express web framework for node.js
const mongoose = require('mongoose')

//Declare the mongoose Schema
const Schema = mongoose.Schema

// Construct the userSchema for how each document will look like in the database "Users" collection
const userSchema = new Schema(
    {
        firstname: {type: String, require: true},
        lastname: {type: String, require: true},
        age: {type: Number, require: true, min: 15},
        username: {type: String, unique: true, required: true, lowercase: true},
        email: {type: String, unique: true, required: true, lowercase: true, minlength: 5, maxlength: 255},
        password: {type: String, require: true},
        regDate: String,
        regTime: String,
    },
    { timestamps: true },
)

//Export the module for use in other modules
module.exports = mongoose.model('Users', userSchema)