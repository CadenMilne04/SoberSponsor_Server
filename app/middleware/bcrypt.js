const bcrypt = require('bcrypt');

const saltRounds = 10;

const Bcrypt = {
    async hashPassword(password){
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return hashedPassword;
        } catch (error) {
            throw new Error('Error hashing password');
        }
    },

    async checkPassword(password, userHash){
        const result = await bcrypt.compare(password, userHash);
        if(result == true) return true;
        else throw Error("Invalid Password")
    }
}

module.exports = Bcrypt;
