const express = require('express');

const router = express.Router();

const DisciplineController = require('../controllers/DisciplineController');


router.get('/disciplinas', DisciplineController.show);

router.post('/disciplina', DisciplineController.create);

router.put('/disciplina/:id', DisciplineController.update);

router.delete('/disciplina/:id', DisciplineController.delete);

module.exports = router;