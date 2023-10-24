const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/literature').then((e) => console.log("mongo connected"))