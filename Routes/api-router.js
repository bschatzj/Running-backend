
const router = require('express').Router()
const Login = require('./Auth/Login/Login')
const Register = require('./Auth/Register/Register')
const Profile = require('./Profile/ProfileRoutes')


router.use('/login', Login)
router.use('/register', Register)
router.use('/profile', Profile)


module.exports = router