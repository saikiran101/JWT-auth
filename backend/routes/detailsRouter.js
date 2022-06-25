const express = require('express')
const router = express.Router()
const { getDetails,setDetails,deleteDetails } = require('../controller/detailsController')

//getDetails contains get function req and res
router.get("/", getDetails);


router.post("/", setDetails);


router.delete("/:id", deleteDetails);

module.exports = router;