const express = require('express');
const {celebrate,Joi}= require("celebrate");

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const DisciplinesController = require('./controllers/DisciplinesController');
const ClassesController = require('./controllers/ClassesController');

const routes = express.Router();
//Auth
routes.get('/login/:email/:password',
    celebrate({
        params:Joi.object().keys({
            email: Joi.string().required().min(5).email(),
            password: Joi.string().required().min(5)
        })},{ abortEarly:false}),
AuthController.login);

routes.get('/forget/:email',
    celebrate({
        params:Joi.object().keys({
             email: Joi.string().required().min(10),
        })},{ abortEarly:false}),
 AuthController.forget);

routes.put('/reset',
    celebrate({
        body:Joi.object().keys({
            email: Joi.string().required().min(8),
            password: Joi.string().required().min(5),
            date: Joi.string().required().min(8),
        })},{ abortEarly:false}), 
 AuthController.reset);

//users
//routes.get('/disciplines', UserController.index);
routes.post('/disciplines',
    celebrate({
        body:Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required(),
        })},{ abortEarly:false}),
    DisciplinesController.create);
//routes.put('/users/:id', UserController.update);
//routes.delete('/users/:id', UserController.delete);

/*disciplines*/
// routes.get('/disciplines', UserController.index);
// routes.post('/disciplines', UserController.index);
// routes.put('/disciplines', UserController.index);
// routes.delete('/disciplines', UserController.index);

//classes
/*
routes.get('/disciplines', UserController.index);
routes.put('/disciplines', UserController.index);
routes.delete('/disciplines', UserController.index);
*/
routes.post('/classes',
    celebrate({
        body:Joi.object().keys({
            name: Joi.string().required(),
            period: Joi.string().required(),
            email:Joi.string().required().email()
        })},{ abortEarly:false}),
ClassesController.create);


module.exports = routes;