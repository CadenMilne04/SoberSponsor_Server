const express = require('express');
const UserController = require('./controllers');

const router = express.Router();

//Token-less routes
router.post('/', UserController.createUser);
router.post('/sign-in', UserController.signInUser);

//Token routes
router.get('/username', UserController.getUsernameFromToken);

module.exports = router;

