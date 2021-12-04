const controllers = require('../controllers/FabricanteControllers.js');

server.get('/fabricante', controllers.FabricanteGetAll);

server.get('/fabricante/:id', controllers.FabricanteGetById)

server.post('/fabricante', controllers.FabricanteNew)

server.put('/fabricante/:id', controllers.FabricanteEdit)