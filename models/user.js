const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// Creating the model for establishing communication 
module.exports = mongoose.Model('user', userSchema)