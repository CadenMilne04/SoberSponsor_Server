const mongoose = require('mongoose');

// Define the schema for the User model
const meetingSchema = new mongoose.Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    location: {
        type: String
    },
}, { collection: "meetings" });

// Create a User model from the schema
const Meeting = mongoose.model('Meeting', meetingSchema);

// Export the User model
module.exports = Meeting;

