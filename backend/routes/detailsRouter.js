const express = require('express')
const router = express.Router()
const { getDetails,setDetails,deleteDetails } = require('../controller/detailsController')

const {protect}=require('../middleware/authMiddleware')

//getDetails contains get function req and res
//protect only register user can access
router.get("/",protect, getDetails);

router.post("/",protect, setDetails);

//u can delete form by add user id in url and in auth bearer token
router.delete("/:id",protect, deleteDetails);

module.exports = router;