const database = require('../../config/conexao.js');

module.exports = {
  FabricanteGetAll,
  FabricanteGetById,
  FabricanteNew,
  FabricanteEdit
}

function FabricanteGetAll(require, response) {
  console.log('Rota Fabricante Encontrada!');
  const sqlGet = `SELECT * FROM  fabricante`
  database.query(sqlGet, (err, result) => {
    if (err) console.log(err);
    response.json(result)
  })
};

function FabricanteGetById(require, response) {
  const id = require.params.id
  const sqlGet = `SELECT * FROM fabricante WHERE fab_codigo = ?`

  database.query(sqlGet, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.json(result);
    }
  })
}

function FabricanteNew(require, response) {
  const dados = require.body
  console.log(dados);


  dados.fab_codigo = null;

  const sqlPost = `INSERT INTO fabricante SET ?`

  database.query(sqlPost, dados, (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}


function FabricanteEdit(require, response) {
  const dados = require.body

  const sqlPut = "UPDATE fabricante SET fab_nome = '" + dados.fab_nome +
    "' , fab_fantasia = '" + dados.fab_fantasia +
    "' , fab_pais = '" + dados.fab_pais +
    "' WHERE fab_codigo = '" + dados.fab_codigo + "'"

  db.query(sqlPut, (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}
