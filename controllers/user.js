const User = require('../models/UserModel')

async function handleGetUser(req, resp) {
    let user = await User.find({})
    resp.render("home", { data: user })
}

module.exports = {
    handleGetUser
}

// middleware
// app.use((req, resp, next) => {
//     // return resp.json({ msg: 'hello' })
//     next()
// })