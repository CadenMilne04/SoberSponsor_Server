const User = require("../models/user.model")
const Bcrypt = require("../middleware/bcrypt")
const JWT = require("../middleware/jwt")

const UserService = {
    async createUser(userData) {
        const newUsername = userData.username;
        const newPassword = userData.password;

        try {
            //Hash the password
            const newHashedPassword = await Bcrypt.hashPassword(newPassword);

            //Save the user to the database
            const user = await User.create({
                username: newUsername,
                password: newHashedPassword,
                location: "",
                quitDate: null,
            });

            //Create and return a jsonwebtoken
            const token = JWT.createJWT(user);
            return token;
        } catch (error) {
            throw error;
        }
    },

    async signInUser(userData){
        const username = userData.username;
        const password = userData.password;

        try {
            //Find the user inside the database
            const user = await User.findOne({username: username});  
            if(user == null) throw new Error("Couldn't find the user in the database");

            //Check to ensure that the password is correct
            await Bcrypt.checkPassword(password, user.password);

            //Create and return a new jsonwebtoken
            const token = JWT.createJWT(user);
            return token;

        } catch (error) {
            throw error;
        }
    },

    async verifyJWT(token){
        try {
            //Verify the JWT and return the encoded username
            const username = await JWT.verifyJWT(token);
            return username; 
        } catch (error) {
            throw error; 
        }
    },

    async updatePassword(username, password){
        const newHashedPassword = await Bcrypt.hashPassword(password);

        await User.findOneAndUpdate(
                {username: username},
                {password: newHashedPassword});
    },

    async updateLocation(username, location){
        await User.findOneAndUpdate({username: username},{location: location});
    },

    async updateLocation(username, date){
        await User.findOneAndUpdate({username: username},{quitDate: date});
    },

    async addJournalEntry(username, title, body){
        const entry = {
            title: title,
            body: body,
        }
        await User.updateOne({username: username}, {$push: {journalEntries: entry}});
    },

    async getJournalEntries(username){
        const user = await User.findOne({username: username});
        return user.journalEntries;
    }
};

module.exports = UserService;

