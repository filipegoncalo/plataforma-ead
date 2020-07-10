const express = require('express');

const router = express.Router();

const TestController = require('../controllers/TestController');

router.get('/teste', TestController.byDiscipline);

router.get('/testes', TestController.byTeacher);

router.post("/teste",TestController.create);

router.put("/teste/:id",TestController.update);

router.delete("/teste/:id",TestController.delete);

module.exports = router;