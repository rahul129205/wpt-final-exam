const mysql = require("mysql");
const Promise = require("bluebird");
const { add } = require("nodemon/lib/rules");
const { use } = require("express/lib/application");
const Connection = require("mysql/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wptexam",
};

async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `INSERT INTO message(msg) values(?)`;
  await connection.queryAsync(sql, [user.msg]);
  console.log("message added in database");
  await connection.endAsync();
}
const user = {
  msg: "i am shrikant bankar",
};

//addUser(user);

async function selectUser() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from message`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log(list);
  return list;
}
//selectUser();

module.exports = { addUser, selectUser };
