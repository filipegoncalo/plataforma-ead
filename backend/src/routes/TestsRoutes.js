const express = require('express');

const router = express.Router();

const TestController = require('../controllers/TestController');

router.post("/test",TestController.addTest);

//router.get("/teste/student/:id_disciplines/:id_classe/:id_test",TestController.studentByDisciplineClass);

router.get("/teste/user/:id_disciplines/:id_classes/:id_test",TestController.userByDisciplineClass);

router.get("/teste/classe/:id_classes",TestController.classesByTest);

router.get("/teste/classesAluno/:id_classes/:id_user",TestController.classesAlunoByTest);

router.get("/teste/classesDiscipline/:id_discipline/:id_user",TestController.classesDisciplineByTest);

router.get("/teste/studentTest/:id_user",TestController.userByTest);

router.get("/teste/tipo/:id_type",TestController.ByTestType);

router.get("/teste/tipo/:id_type/:id_user",TestController.ByTestTypeUser);


module.exports = router;