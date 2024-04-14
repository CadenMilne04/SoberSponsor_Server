const express = require('express');
const UserController = require('./controllers');

const router = express.Router();

//Token-less routes
router.post('/create', UserController.createUser);
router.post('/sign-in', UserController.signInUser);

router.patch('/update/password', UserController.updatePassword);
router.patch('/update/location', UserController.updateLocation);
router.patch('/update/quit-date', UserController.updateQuitDate);

//Token routes
router.get('/username', UserController.getUsernameFromToken);

module.exports = router;

