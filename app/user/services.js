const User = require("../models/user.model")
const Bcrypt = require("../middleware/bcrypt")

const UserService = {
  getAllUsers() {
    // Logic to fetch all users from the database
  },
  async createUser(userData) {
    const newUsername = userData.username;
    const newPassword = userData.password;

    const newHashedPassword = await Bcrypt.hashPassword(newPassword);
    if(newHashedPassword == null) return -1;

    try {
        await User.create({
            username: newUsername,
            password: newHashedPassword,
        });
    } catch (error) {
        console.log(error);
        return -2;    
    }
    return 1; 
  },
  updateUser(id, userData) {
    // Logic to update an existing user in the database
  },
  deleteUser(id) {
    // Logic to delete a user from the database
  }
};

module.exports = UserService;

