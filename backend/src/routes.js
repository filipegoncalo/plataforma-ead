const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

/**auth
routes.post('/register', UserController.register);
routes.post('/login', UserController.login);
routes.post('/reset', UserController.reset);
routes.post('/reset/:code', UserController.reset);
routes.post('/forget', UserController.forget);
*/

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