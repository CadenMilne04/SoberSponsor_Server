const UserService = require('./services');

const UserController = {
  getUsers(res) {
    console.log("here");
    res.send({status: "ok", user: "Caden"});
  },
  getUserById(req, res) {
    const id = req.query.id;
    const user = UserService.getUserById(id);
    if(user == null){
        res.status(400).send("Invalid ID")
    }
    else
        res.status(200).send(user)
  },
  createUser(req, res) {
      const userData = req.body;
      const user = UserService.createUser(userData);
      if(user == null){
          res.status(500).send("Failed to create user.");
      }
      else{
          res.status(200).send(user);
      }
  },
  updateUser(req, res) {
  },
  deleteUser(req, res) {
  }
};

module.exports = UserController;

