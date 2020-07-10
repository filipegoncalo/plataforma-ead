const express = require('express');

const router = express.Router();

const ClasseController = require('../controllers/ClasseController');

router.get('/turma', ClasseController.byDiscipline);

router.get('/turmas', ClasseController.byTeacher);

router.post('/turma', ClasseController.create);

router.put('/turma/:id', ClasseController.update);

router.delete('/turma/:id', ClasseController.delete);


module.exports = router;