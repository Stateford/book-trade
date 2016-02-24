// app/models/user.js

// modules
// ========
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var configDB = require('../../config/database');

var connection = mongooose.createConnection(configDB.db);

// userSchema
var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    books: [bookSchema],
    requested: [
        {
            title: String,
            id: Number
        }
    ]
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
