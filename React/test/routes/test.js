const express = require('express')
const router = express.Router()
const Test = require('../models/Test')

router.get('/score', (req, res) => {
    const test = Test(req.body)
    test.save();
    res.send(req.body)
  })

 module.exports = router