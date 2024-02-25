require('dotenv').config()

const express = require('express')
const bodyParserSetup = require('./middleware/bodyParser.js');
const mongooseSetup = require('./middleware/mongoose.js');

const app = express()

mongooseSetup();
bodyParserSetup(app);

app.use('/api/user', require('./user/routes.js'))
module.exports = app
