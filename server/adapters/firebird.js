const firebird = require('node-firebird');

const options = {
  host: '127.0.0.1',
  port: 3050,
  database: 'E:/sgsuper/dbcomp.fdb',
  user: 'SYSDBA',
  password: 'masterkey',
  role: null,
  pageSize: 4096
};

const query = (sql, params = []) => {
  return new Promise((resolve) => {
    firebird.attach(options, (err, db) => {
      db.query(query, params, (err, res) => {
        resolve(res);
      });
    });
  });
}
//update
//insert
//delete

module.exports = {
  query
}


