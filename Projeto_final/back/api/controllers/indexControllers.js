const db = require('../../config/conexao.js');

module.exports = {
  indexControllers
}

function indexControllers(req, res) {
  console.log('Rota Raiz Encontrada!');
  res.json('Rota Raiz Encontrada!');
};

