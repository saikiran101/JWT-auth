const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getMe}=require('../controller/userController')

const {protect}=require('../middleware/authMiddleware')

router.post('/register', registerUser)

router.post('/login', loginUser)

// can access directly only jwt token user can view this own details  
router.get('/me',protect,getMe)

module.exports = router;