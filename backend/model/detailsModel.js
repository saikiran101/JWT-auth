const mongoose = require('mongoose')

const detailsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User',
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    height: { type: String, required: true },
    weight: { type: String, required: true }
},
    {
    timestamps: true,
    }
)
module.exports= mongoose.model("Detail",detailsSchema)
