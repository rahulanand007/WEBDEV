const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "Thisisjwtsecret"

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
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    //Create a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })

    const data = {
        user : {
            id: user.id
        }
    }  
    const authtoken = jwt.sign(data,JWT_SECRET) 
    res.json(authtoken)
    //Catch errors
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error")
    }
})

// Login endpoint 
router.post('/login',[
    body('email', "Please Enter a valid Email").isEmail(),
    body('password', "Password cannot be empty").exists()
],async (req,res)=>{
    //If there are errors , return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password}= req.body;
    try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({errors: "Please enter valid credentials"})
        }
        
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).json({errors: "Please enter valid credentials"})
        }
        const data = {
            user : {
                id: user.id
            }
        }  
        const authtoken = jwt.sign(data,JWT_SECRET) 
        res.json(authtoken)

    } catch (error) {
         console.log(error.message);
        res.status(500).send("Internal server error")
    }

})   

module.exports = router