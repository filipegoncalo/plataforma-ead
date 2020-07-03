const express = require('express');

const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.post('/sign-in', AuthController.login);

router.post('/sign-up',  AuthController.register);

router.post('/reset', AuthController.reset);

router.get('/reset/:forget', AuthController.reset);

router.post('/forgot', AuthController.forgot);


module.exports = router;