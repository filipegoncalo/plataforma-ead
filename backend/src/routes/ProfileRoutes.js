const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');

const { userUpdate, userDelete } = require('../validators/profile')

router.get('/', UserController.show);

router.put('/:id', userUpdate, UserController.update);

router.delete('/:id', userDelete, UserController.delete);

module.exports = router;