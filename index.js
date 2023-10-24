const express = require('express')
require('../mvc/config')
const User = require('./models/UserModel')
const userRouter = require('./routes/user')
const path = require('path')
const cors = require('cors')
const app = express()
app.use(express.json())

// view engine
app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))

// middleware
// app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/user', userRouter)

app.listen(5000)