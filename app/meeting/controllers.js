const MeetingService = require('./services');

const MeetingController = {
    async getAllMeetings(req, res){
        console.log("here");
        try {
              const meetings = await MeetingService.getAllMeetings();

              res.status(200).send({
                  meetings: meetings
              });
            
        } catch (error) {
              res.status(500).send({
                  message: "Error Finding Meetings",
              });
        }

    },
    async addAMeeting(req, res) {
        const {title, desc, location} = req.body;
        try {
              await MeetingService.addAMeeting(title, desc, location);

              res.status(200).send({
                  message: "Added successfully"
              });
            
        } catch (error) {
              res.status(500).send({
                  message: "Error adding Meeting",
              });
        }
    },
};

module.exports = MeetingController;

