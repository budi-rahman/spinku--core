const express = require('express')
const router = express.Router()
const merchantRouter = require('./merchant')
const outletRouter = require('./outlet')
const userRouter = require('./user')
const terminalRouter = require('./terminal')
const login = require('./login')
const {isLogin} = require('../middlewares/role')

router.get('/', (req, res) => {
    res.send('Hi There')
})


router.use('/users', isLogin, userRouter)
router.use('/terminals', isLogin, terminalRouter)
router.use('/merchants', isLogin, merchantRouter)
router.use('/outlets', isLogin, outletRouter)
router.use('/login', login)

module.exports = router