const express = require('express');
const UserController = require('./controllers');

const router = express.Router();

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;

