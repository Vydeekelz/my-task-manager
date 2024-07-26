const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const {name} = req.body;
  if (!name) {
      res.status(401)
      .send({success:false, msg: 'Not authorised'})
  }
  else {
      res.status(201).json( {success: true, message: `Welcome, ${name}` })}
})

module.exports = router