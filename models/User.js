const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    emal: String,
    createdAt: String
});

module.exports = model('User', userSchema);