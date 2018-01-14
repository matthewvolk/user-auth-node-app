const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../models/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// export schema
const User = module.exports = mongoose.model('User', UserSchema);

// functions for getting users by ID and username
module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback) {
    const Query = {username: username}
    User.findOne(query, callback);
};