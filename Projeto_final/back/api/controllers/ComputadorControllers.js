const database = require('../../config/conexao.js');

module.exports = {
  ComputadorGetAll,
  ComputadorGetById,
  ComputadorNew,
  ComputadorEdit
}

function ComputadorGetAll(require, response) {
  
  const sqlGet = `SELECT * FROM  computador`
  database.query(sqlGet, (err, result) => {
    if (err) console.log(err);
    response.json(result)
  })
};

function ComputadorGetById(require, response) {
  const id = require.params.id
  console.log('Parametro Esperado Get: ' + id);
  const sqlGet = `SELECT * FROM computador WHERE cmp_codigo = ?`

  database.query(sqlGet, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.json(result);
    }
  })
}

function ComputadorNew(require, response) {
  const dados = require.body

  dados.cmp_codigo = null;

  const sqlPost = `INSERT INTO computador SET ?`

  database.query(sqlPost, [dados], (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}


function ComputadorEdit(require, response) {
  const dados = require.body
  console.log(dados);


  const sqlPut = "UPDATE computador SET cmp_modelo = '" + dados.cmp_modelo +
    "' , cmp_tipo = '" + dados.cmp_tipo +
    "' , cmp_memoria = '" + dados.cmp_memoria +
    "' , cmp_garantia = '" + dados.cmp_garantia +
    "' , fab_codigo = '" + dados.fab_codigo +
    "' WHERE cmp_codigo = '" + dados.cmp_codigo + "'"

  db.query(sqlPut, (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}
