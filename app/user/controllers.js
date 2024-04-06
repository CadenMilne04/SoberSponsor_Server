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
    }

};

module.exports = UserController;

