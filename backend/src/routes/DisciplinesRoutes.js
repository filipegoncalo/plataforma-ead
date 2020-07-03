const express = require('express');

const router = express.Router();

const DisciplineController = require('../controllers/DisciplineController');


router.get('/disciplinas', DisciplineController.index);

router.post('/disciplinas', DisciplineController.create);

router.put('/disciplinas/:id', DisciplineController.update);

router.delete('/disciplinas/:id', DisciplineController.delete);

module.exports = router;