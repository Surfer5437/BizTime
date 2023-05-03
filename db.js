/** Database setup for BizTime. */
/** Database client for pg-relationships-demo. */

const { Client } = require("pg");

const client = new Client({
  host: 'localhost',
  user: 'livin',
  port:5432,
  password: 'rootUser',
  database:'biztime'
});

client.connect();

module.exports = client;

