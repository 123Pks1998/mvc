const express = require('express')
const router = express.Router()
const { handleGetUser } = require('../controllers/user')

router.get('/', handleGetUser)

module.exports = router;