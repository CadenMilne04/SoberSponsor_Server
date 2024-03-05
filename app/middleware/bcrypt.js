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

    checkPassword(password, userHash){
        bcrypt.compare(password, userHash, function(err, result) {
            if(err) return err;
            return result;
        });
    }
}

module.exports = Bcrypt;

    
