const User = require("../models/user.model")

const UserService = {
  getAllUsers() {
    // Logic to fetch all users from the database
  },
  getUserById(id) {
    // Logic to fetch a user by ID from the database
    console.log("ID: ", id);
    if(id == "abc123"){
        return "cadenmilne04";
    }
    return null;
  },
  async createUser(userData) {
    const username = userData.username;
    const password = userData.password;

    if(password.length >= 10){
        //Send User to database
        try {
            const user = await User.create({
                username: username,
                password: password,
            });
        } catch (error) {
            return "Error Creating User";    
        }
    }
    return null; 
  },
  updateUser(id, userData) {
    // Logic to update an existing user in the database
  },
  deleteUser(id) {
    // Logic to delete a user from the database
  }
};

module.exports = UserService;

