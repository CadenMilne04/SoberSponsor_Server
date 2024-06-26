const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    quitDate: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    journalEntries: [
        {
            date: {type: Date, default: Date.now},
            title: {type: String},
            body: {type: String},
        }
    ]

}, { collection: "users" });

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;

