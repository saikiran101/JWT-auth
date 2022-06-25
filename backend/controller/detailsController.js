const asyncHandler=require('express-async-handler')

//desc Get details
//route GET /form/savedetails
//access Private
const getDetails = asyncHandler(async(req, res) => {
    res.status(200).json({message:'get details'})
})
//desc set details
//route POST /form/savedetails
//access Private
const setDetails = asyncHandler(async(req, res) => {
    if (!req.body.firstName) {
        res.status(400)
        throw new Error('please provide details')
    }
    res.status(200).json({message:`set details`})
})
//desc delete details
//route DELETE /form/savedetails
//access Private
const deleteDetails = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `delete details ${req.params.id}` });
}
)
module.exports = {
    getDetails,
    setDetails,
    deleteDetails,
}