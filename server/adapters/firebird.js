const firebird = require('node-firebird');
const Config = require('../models/config');

let connection = null;

const connect = async () => {
  const config = await Config.findOne();

  connection = await new Promise(resolve => {
    firebird.attach(config, (err, db) => {
      if (err) throw err;
      resolve(db);
    });
  });
}

const disconnect = async () => {
  await connection.detach(err => {
    if (err) throw err;
  });
  connection = null;
}

const query = async (sql, params = []) => {
  await connect();
  return new Promise((resolve) => {
    connection.query(sql, params, (err, res) => {
      if (err) throw err;            
      resolve(res);
    });
  });   
}
//update
//insert
//delete

module.exports = {
  query
}


