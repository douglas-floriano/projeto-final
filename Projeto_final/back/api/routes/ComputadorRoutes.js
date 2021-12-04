const controllers = require('../controllers/ComputadorControllers.js');

server.get('/computador', controllers.ComputadorGetAll);

server.get('/computador/:id', controllers.ComputadorGetById)

server.post('/computador', controllers.ComputadorNew)

server.put('/computador/:id', controllers.ComputadorEdit)