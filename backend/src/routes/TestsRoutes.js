const express = require('express');

const router = express.Router();

const TestController = require('../controllers/TestController');

router.post("/",TestController.create);


module.exports = router;