const db = require("../database/dbConfig.js");
const jwt = require('jsonwebtoken');
const secrets = require('../auth/secrets.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

// function find() {
//   return db("users").select("id", "username", "department");
// }

// function find(token) {
//   var grab;
//   jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
//     grab = decodedToken;
//   })
//   console.log(grab);
//   return db("users")
//   .select("id", "username","department")
//   .where("department", grab.department)
// }

function find(filter) {
  if (filter) return db('users').where(filter);
  else return db('users');
}

function findBy(filter) {
  return db("users").where(filter);
}

// function findBy(filter) {
//   return db("users").where(filter).select("id", "username", "department");
// }

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
