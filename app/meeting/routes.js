const express = require('express');
const MeetingController = require('./controllers');

const router = express.Router();

//Token-less routes
router.get('/all', MeetingController.getAllMeetings);
router.post('/add', MeetingController.addAMeeting);


module.exports = router;

