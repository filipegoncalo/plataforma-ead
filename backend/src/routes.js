const express = require('express');
const {celebrate,Joi}= require("celebrate");
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();

routes.get('/login/:email/:password',
    celebrate({
        params:Joi.object().keys({
            email: Joi.string().required().min(10).email(),
            password: Joi.string().required().min(10)
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
            email: Joi.string().required().min(10),
            password: Joi.string().required().min(10),
            date: Joi.string().required().min(10),
        })},{ abortEarly:false}),
 AuthController.reset);

//users
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

/*disciplines
routes.get('/disciplines', UserController.index);
routes.post('/disciplines', UserController.index);
routes.put('/disciplines', UserController.index);
routes.delete('/disciplines', UserController.index);

//classes
routes.get('/disciplines', UserController.index);
routes.post('/disciplines', UserController.index);
routes.put('/disciplines', UserController.index);
routes.delete('/disciplines', UserController.index);

//s
routes.get('/disciplines', UserController.index);
*/

module.exports = routes;