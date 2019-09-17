const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db'
});

const query = (sql, params = []) => {
  return new Promise((resolve) => {
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', params, (err, res, fields) => {
      if (err) throw err;
      resolve(res);
    });
    connection.end();
  });
}
//update
//insert
//delete

module.exports = {
  query
}


