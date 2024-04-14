const UserService = require('./services');

const UserController = {
    async createUser(req, res) {
      const userData = req.body;

      try {
          const token = await UserService.createUser(userData);
          res.status(200).send({
              message: "New User Created",
              token: token
          });
      } catch (error) {
          res.status(500).send(error.message);
      }
    },

    async signInUser(req, res) {
      const userData = req.body;

      try {
          const token = await UserService.signInUser(userData);
          res.status(200).send({
              message: "Signed in Successfully",
              token: token
          });
      } catch (error) {
          res.status(500).send(error.message);
      }
    },

    async getUsernameFromToken(req, res){
        const {token} = req.body;
        try {
            const username = await UserService.verifyJWT(token);
              res.status(200).send({
                  message: "Token authorized",
                  username: username
              });
        } catch (error) {
          res.status(500).send(error.message);
        }
    },

    async updatePassword(req, res){
        const {token, password} = req.body;

        try {
            //Get the username from the JWT
            const username = await UserService.verifyJWT(token);

            //update the DB entry with that username
            await UserService.updatePassword(username, password);

              res.status(200).send({
                  message: "Password Updated Successfully",
              });
        } catch (error) {
          res.status(500).send(error.message);
        }

    },

    async updateLocation(req, res){
        const {token, location} = req.body;

        try {
            //Get the username from the JWT
            const username = await UserService.verifyJWT(token);

            //update the DB entry with that username
            await UserService.updateLocation(username, location);

              res.status(200).send({
                  message: "Location Updated Successfully",
              });
        } catch (error) {
          res.status(500).send(error.message);
        }

    },

    async updateQuitDate(req, res){
        const {token, date} = req.body;

        try {
            //Get the username from the JWT
            const username = await UserService.verifyJWT(token);

            //update the DB entry with that username
            await UserService.updateLocation(username, date);

              res.status(200).send({
                  message: "Quit Date Updated Successfully",
              });
        } catch (error) {
          res.status(500).send(error.message);
        }

    },


    async addJournalEntry(req, res){
        const {token, title, body} = req.body;

        try {
            //Get the username from the JWT
            const username = await UserService.verifyJWT(token);

            //update the DB entry with that username
            await UserService.addJournalEntry(username, title, body);

              res.status(200).send({
                  message: "Entry Updated Successfully",
              });
        } catch (error) {
          res.status(500).send(error.message);
        }

    }

};

module.exports = UserController;

