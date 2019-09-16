const Schema = require('mongoose').Schema;
const Model = require('mongoose').model;

const configSchema = new Schema({
  databaseType: String,
  host: String,  
  database: String,
  user: String,
  password: String,
  port: Number,
  pageSize: Number  
});

const Config = Model('Config', configSchema);

module.exports = Config;