const mysql = require('mysql2');
const database = 'dados212n';

// instanciar objeto de acesso ao banco de dados
const db = mysql.createConnection({
  user: 'root',
  password: '24683590',
  host: 'localhost',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.log('Erro ao conectar no mysql...', err)
    return
  }
  db.query('USE ' + database);
  console.log('\nConexão estabilizada com sucesso!!!')
})

module.exports = db;
