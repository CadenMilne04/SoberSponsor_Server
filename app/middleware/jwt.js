const jwt = require('jsonwebtoken');

const secret = process.env.JWT_PASSWORD;

 
const JWT = {
    createJWT(user){
        const token = jwt.sign({username: user.username, location: user.location, quitDate: user.quitDate}, secret);
        return token;
    },

    async verifyJWT(token){
        try {
            const decoded = await jwt.verify(token, secret);

            return decoded.username;
        } catch (error) {
            throw error;    
        }
    }
};

module.exports = JWT;
