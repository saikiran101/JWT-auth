const asyncHandler=require('express-async-handler')
const Detail = require('../model/detailsModel')
const User = require('../model/userModel')

//desc Get details
//route GET /form/savedetails
//access Private
const getDetails = asyncHandler(async (req, res) => {
    const details= await Detail.find({user:req.user.id})
    
    res.status(200).json(details)
})

//desc set details
//route POST /form/savedetails
//access Private
const setDetails = asyncHandler(async(req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('please complete the provide details')
    }
    const details=await Detail.create({
			user: req.user.id,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			middleName: req.body.middleName,
			address: req.body.address,
			country: req.body.country,
			city: req.body.city,
			zipcode: req.body.zipcode,
			email: req.body.email,
			phoneNumber: req.body.phoneNumber,
			height: req.body.height,
			weight: req.body.weight,
		});

    res.status(200).json(details)
})

//desc delete details
//route DELETE /form/savedetails
//access Private
const deleteDetails = asyncHandler(async (req, res) => {
    const detail = await Detail.findById(req.params.id)
    
    if (!detail) {
        res.status(400)
        throw new Error('detail not found')
    }
    //Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure  the logged  in user matches the goal user
    if (detail.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    await detail.remove()
    res.status(200).json({ message: "specified form is deleted" });
}
)
module.exports = {
    getDetails,
    setDetails,
    deleteDetails,
}