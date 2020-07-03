const express = require('express');
const { celebrate, Segments,  Joi } = require('celebrate');

const routes = express.Router();

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const DisciplineController = require('./controllers/DisciplineController');
const ClasseController = require('./controllers/ClasseController');
const TestController = require('./controllers/TestController');
const QuestionsController = require('./controllers/QuestionsController');



routes.post('/sign-in', AuthController.login);

routes.post('/sign-up', celebrate({
  [Segments.BODY]: Joi.object().keys({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z-0-9]{8,30}$')).required(),
    password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
  }),
}), AuthController.register);

routes.post('/reset', AuthController.reset);

routes.get('/reset/:forget', AuthController.reset);

routes.post('/forgot', AuthController.forgot);


/* ======== USERS ======= */
//find users
routes.get('/usuarios', UserController.index);

//update users
routes.put('/usuario/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    first_name: Joi.string().min(3),
    last_name: Joi.string().min(3),
    formation: Joi.string(),
    institution: Joi.string(),
    genre: Joi.string(),
    datebirth: Joi.string(),
    document: Joi.string().min(9),
    photo: Joi.string(),
    curriculum: Joi.string()
  }),
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().required()
  }),
}), UserController.update);

//delete users
routes.delete('/usuario/:id', celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().required()
  }).unknown(),
}), UserController.delete);

/* ====== DISCIPLINAS ======*/
//find disciplinas
routes.get('/disciplinas',celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),
}), DisciplineController.index);

//create discipline
routes.post('/disciplina', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    institution: Joi.string().required(),
    description: Joi.string().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),
}), DisciplineController.create);

//update discipline
routes.put('/disciplina/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    institution: Joi.string(),
    description: Joi.string()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().required()
  }),
}), DisciplineController.update);

//delete discipline
routes.delete('/disciplina/:id', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().required()
  }),
}), DisciplineController.delete);

/* ======== CLASSES =========*/
//find classes
routes.get('/turmas',  celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),
}), ClasseController.byDiscipline);

//create classes
routes.post('/turma', celebrate({
  [Segments.BODY]: Joi.object().keys({
    link: Joi.string(),
    name: Joi.string().required(),
    schedule: Joi.date().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),
}), ClasseController.create);

//update classes
routes.put('/turma/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    link: Joi.string(),
    name: Joi.string(),
    schedule: Joi.string()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().required()
  }),
}), ClasseController.update);

//delete classes
routes.delete('/turma/:id', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().required()
  }),
}), ClasseController.delete);

// create test


//disciplina/turma/test
routes.post("/test",TestController.addTest);
//routes.get("/teste/student/:id_disciplines/:id_classe/:id_test",TestController.studentByDisciplineClass);
routes.get("/teste/user/:id_disciplines/:id_classes/:id_test",TestController.userByDisciplineClass);
//por classe
routes.get("/teste/classe/:id_classes",TestController.classesByTest);
routes.get("/teste/classesAluno/:id_classes/:id_user",TestController.classesAlunoByTest);
routes.get("/teste/classesDiscipline/:id_discipline/:id_user",TestController.classesDisciplineByTest);
routes.get("/teste/studentTest/:id_user",TestController.userByTest);
routes.get("/teste/tipo/:id_type",TestController.ByTestType);
routes.get("/teste/tipo/:id_type/:id_user",TestController.ByTestTypeUser);

//disciplina/test/usuario
//teste de determinado usuario de tal disciplina
//multipla escolha
//dissertativa
//quiz
//prova
//exercicio

//todas as provas de um aluno


//adicionar prova
//add exercicio
//add resposta
routes.get("/questions",QuestionsController.index);
routes.get("/questions/teste",QuestionsController.selectByTest);
routes.post("/questions",QuestionsController.addQuestion);
routes.put("/questions",QuestionsController.changeQuestion);
routes.delete("/questions",QuestionsController.removeQuestion);
routes.delete("/questions/teste",QuestionsController.removeQuestionByTest);

//adicionar question
//adicionar alternatives
//adicionar answer

module.exports = routes;