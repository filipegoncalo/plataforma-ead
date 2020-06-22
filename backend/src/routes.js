const express = require('express');
const { celebrate, Segments,  Joi } = require('celebrate');

const routes = express.Router();

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const DisciplineController = require('./controllers/DisciplineContoller');
const ClasseController = require('./controllers/ClasseController');
const TestController = require('./controllers/TestController');



routes.post('/login', AuthController.login);
routes.post('/reset', AuthController.reset);
routes.get('/reset/:forget', AuthController.reset);
routes.post('/forget', AuthController.forget);


/* ======== USERS ======= */
//find users
routes.get('/usuarios', UserController.index);

//create users
routes.post('/usuario', celebrate({
  [Segments.BODY]: Joi.object().keys({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    formation: Joi.string(),
    institution: Joi.string()
  }),
}), UserController.register);

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

routes.get('/test/',TestController.index);

module.exports = routes;