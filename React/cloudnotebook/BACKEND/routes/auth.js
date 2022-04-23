const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const { body, validationResult } = require('express-validator');

//Create a user using: POST "/api/auth/createuser"
router.post('/createuser',[
    body('name', "Name Length must be min 3 characters").isLength({min:3}),
    body('email', "Please Enter a valid Email").isEmail(),
    body('password', "Password length must be min 5 characters").isLength({ min: 5 })
],async (req,res)=>{
    //If there are errors , return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user exists
    try{
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({ errors: "Sorry a user of this email exists" });
    }
    //Create a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
    res.json(user)
    //Catch errors
    }catch(error){
        console.log(error.message);
        res.status(500).send("Some Error Occured")
    }
})

module.exports = router