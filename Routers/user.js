const express = require("express")
const router = express.Router()
const userController= require('../Controlers/user')

router.post('/api/register',userController.register)
router.post('/api/login',userController.login)

module.exports = router