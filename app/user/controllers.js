const UserService = require('./services');

const UserController = {
  getUsers(res) {
  },
  async createUser(req, res) {
      const userData = req.body;

      const result = await UserService.createUser(userData);

      if(result == -1){
          res.status(500).send("Failed to create user.");
      }
      else if(result == -2){
          res.status(500).send("Database Error");
      }
      else if(result == 1){
          res.status(200).send("Created new user");
      }
  },
  updateUser(req, res) {
  },
  deleteUser(req, res) {
  }
};

module.exports = UserController;

