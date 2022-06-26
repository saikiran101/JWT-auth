const express = require('express')
const colors=require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require("./config/db");
const port = process.env.PORT || 8080

//mongoose database connect
connectDB();

const app = express()

//to get objects to be displayed in postman for checking
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//user route contains-> register, login, me to display the register routes
app.use("/user", require('./routes/UserRoutes'));
//form/save-details route contains-> / route with GET and POST /:id it check register user and save-details with same user if both are match DELETE 
app.use("/form/save-details", require('./routes/detailsRouter'))

//handler for status errors
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`))