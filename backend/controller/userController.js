const jwt = require('jsonwebtoken')
const bcrypt=require("bcryptjs")
const asyncHandler = require('express-async-handler')
const User =require('../model/userModel')

//desc Register new user
//route POST /user/register
//access Private    
const registerUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(400)
        throw new Error('please provide Username and password')
    }

    //check if user exists
    const userExists = await User.findOne({ username })
    
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(password,salt)

    //Create User
    const user = await User.create({
        username,
        password: hashPassword
    })
    //validate and display 
    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            token: generateToken(user._id),
        })  
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

//desc Auth new user
//route POST /user/login
//access Private    
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    //check for username
    const user = await User.findOne({ username })
    //check for password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
					_id: user.id,
					username: user.username,
					token: generateToken(user._id),
				});  
    } else {
         res.status(400)
		 throw new Error("Invalid credentails");
    }
})

//desc Get user data
//route GET /user/me
//access Private   
//accessing data with jwt token from bearer token in postman
const getMe = asyncHandler(async (req, res) => {
    const { _id, username } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        username,
    })
    res.json({message: 'User data displayed'})
})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn:'30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}