const express = require('express');
const UserController = require('./controllers');

const router = express.Router();

//Token-less routes
router.post('/create', UserController.createUser);
router.post('/sign-in', UserController.signInUser);

router.post('/refresh-jwt', UserController.refreshJWT);

router.patch('/journal/new', UserController.addJournalEntry);
router.patch('/journal/all', UserController.getJournalEntries);

router.patch('/update/password', UserController.updatePassword);
router.patch('/update/location', UserController.updateLocation);
router.patch('/update/quit-date', UserController.updateQuitDate);

//Token routes
router.get('/username', UserController.getUsernameFromToken);
router.get('/quit-date', UserController.getQuitDate);

module.exports = router;

