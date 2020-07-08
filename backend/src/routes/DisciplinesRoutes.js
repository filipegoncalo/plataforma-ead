const express = require('express');

const router = express.Router();

const DisciplineController = require('../controllers/DisciplineController');

const { disciplineCreate, disciplineUpdate, disciplineDelete } = require('../validators/disciplines');

router.get('/disciplinas', DisciplineController.show);

router.post('/disciplina', disciplineCreate, DisciplineController.create);

router.put('/disciplina/:id', disciplineUpdate, DisciplineController.update);

router.delete('/disciplina/:id', disciplineDelete, DisciplineController.delete);

module.exports = router;