const Meeting = require("../models/meeting.model")

const MeetingService = {
    async getAllMeetings(){
        return await Meeting.find({});
    },
    async addAMeeting(title, desc, location){
         await Meeting.create({
             title: title,
             desc: desc,
             location: location,
         });
        return;
    }
};

module.exports = MeetingService;

