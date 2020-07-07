const express = require('express');

const AuthController = require('../controllers/AuthController');
const { authSignUp, authSignIn } = require('../validators/auth')

const router = express.Router();

router.post('/sign-in', authSignIn, AuthController.signIn);

router.post('/sign-up', authSignUp, AuthController.signUp);

router.post('/reset', AuthController.reset);

router.get('/reset/:code', AuthController.reset);

router.post('/forgot', AuthController.forgot);


module.exports = router;