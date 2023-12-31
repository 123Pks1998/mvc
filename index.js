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
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', userRouter)

app.listen(3000)
