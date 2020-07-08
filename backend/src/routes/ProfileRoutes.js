const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');

const { userUpdate, userDelete } = require('../validators/profile');

router.get('/profile', UserController.show);

router.put('/profile/:id', userUpdate, UserController.update);

router.delete('/profile/:id', userDelete, UserController.delete);

module.exports = router;