const router = require("express").Router();

const Users = require("./users-model.js");

// router.get("/", (req, res) => {
//   Users.find()
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.send(err));
// });

// router.get("/", (req, res) => {
//   Users.find(req.headers.authorization)
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.send(err));
// });

router.get('/', (req, res) => {
  const { department } = req.decoded;
  Users.find({ department }).then(users => res.status(200).json(users))
  .catch(error => res.status(500).json({ error: error.message }))
})

// router.get(`/:department`, (req, res) => {
//   const { department }= req.params;
//   Users.findBy({department})
//   .then(users => {
//       res.json(users);
//   })
//   .catch(err => res.send(err));
// })

module.exports = router;
