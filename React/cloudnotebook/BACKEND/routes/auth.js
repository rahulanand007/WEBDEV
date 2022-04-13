const express = require('express')
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// Create a user using: POST "/api/auth/". Doesn't require Auth
router.post('/', [
    body('name', "Name length should be a minimum of 3 characters").isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password should not be less than 5 characters').isLength({min:5}),
] ,(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      }).then(user => res.json(user))
      .catch(err=>{console.log(err)
      res.json({error: 'Email already taken! Please enter a different value'})})
    
})

module.exports = router